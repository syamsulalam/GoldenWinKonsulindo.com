// A simple email validation function
const isEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Main function to handle POST requests from the form
export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const { name, email, phone, coverLetter } = Object.fromEntries(formData);
    const resumeFile = formData.get('resume');

    // --- Basic Validation ---
    if (!name || !email || !phone || !resumeFile) {
      return new Response('Missing required fields.', { status: 400 });
    }
    if (!isEmail(email)) {
        return new Response('Invalid email address.', { status: 400 });
    }
    if (resumeFile.size === 0) {
        return new Response('Resume file is empty.', { status: 400 });
    }

    // --- Prepare email content ---
    const toEmails = [
        { email: 'email@goldenwinkonsulindo.com' },
        { email: 'win@goldenwinkonsulindo.com' },
    ];
    const fromEmail = 'noreply@goldenwinkonsulindo.com'; // Use a no-reply address from your domain
    const subject = `New Job Application from ${name}`;

    const htmlContent = `
      <html>
        <body>
          <h2>New Job Application Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr>
          <h3>Cover Letter:</h3>
          <p>${coverLetter.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;
    
    // --- Convert file to Base64 for attachment ---
    const resumeArrayBuffer = await resumeFile.arrayBuffer();
    const resumeBase64 = btoa(String.fromCharCode(...new Uint8Array(resumeArrayBuffer)));

    // --- Construct SendGrid API Payload ---
    const sendgridPayload = {
      personalizations: [{ to: toEmails }],
      from: { email: fromEmail, name: 'GoldenWin Konsulindo Careers' },
      subject: subject,
      content: [{ type: 'text/html', value: htmlContent }],
      attachments: [
        {
          content: resumeBase64,
          filename: resumeFile.name,
          type: resumeFile.type,
          disposition: 'attachment',
        },
      ],
    };

    // --- Send the email via SendGrid ---
    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendgridPayload),
    });

    if (!sendgridResponse.ok) {
        // Log error and redirect to error page
        console.error('SendGrid API error:', await sendgridResponse.text());
        return Response.redirect(`${new URL(context.request.url).origin}/application-error`, 302);
    }

    // --- Redirect to success page on success ---
    return Response.redirect(`${new URL(context.request.url).origin}/application-success`, 302);

  } catch (error) {
    console.error('Error processing form submission:', error);
    // Redirect to a generic error page on unexpected failure
    return Response.redirect(`${new URL(context.request.url).origin}/application-error`, 302);
  }
}
