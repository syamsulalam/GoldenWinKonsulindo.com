
import type { Testimonial, TeamMember } from './types';

export const PROFILE_DATA = {
  name: "Dr. Windijarto, SE. MBA",
  title: "Expert Consultant in Economics and Financial Management",
  bio: "With over 32 years of distinguished experience as a lecturer, researcher, and consultant in social, economic, and management fields, Dr. Windijarto brings unparalleled depth of knowledge to every project. His expertise lies in financial management and economics, guiding corporations and public institutions toward strategic growth and operational excellence. Holding a Doctorate in Economics from Universitas Airlangga and an MBA from the University of Central Arkansas, he combines rigorous academic theory with practical, real-world solutions.",
  imageUrl: "/img/windijarto.png",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "windijarto",
    name: "Dr. Windijarto, SE. MBA",
    title: "Founder & Lead Consultant",
    imageUrl: "/img/windijarto.png",
    bio: "Over 32 years of experience in economics and financial management, guiding corporations and public institutions toward strategic growth. Holds a Doctorate in Economics and an MBA.",
    fullBio: "With a distinguished career spanning more than three decades, Dr. Windijarto is a leading authority in economic and financial management consulting. As a seasoned lecturer, researcher, and hands-on consultant, he has provided strategic guidance to a diverse range of clients, including government bodies, state-owned enterprises, and private corporations. His work focuses on creating sustainable value through meticulous financial analysis, robust feasibility studies, and strategic corporate planning. Dr. Windijarto is dedicated to translating complex economic theories into actionable strategies that drive growth, efficiency, and long-term success.",
    education: [
      { period: "2008", institution: "Universitas Airlangga", degree: "Doctorate in Economics (Ilmu Ekonomi)" },
      { period: "1994", institution: "University of Central Arkansas, USA", degree: "Master of Business Administration (MBA)" },
      { period: "1987", institution: "Universitas Airlangga", degree: "Bachelor of Economics (S1), Management" },
    ],
    experience: [
        { period: "1988 - Present", company: "Universitas Airlangga", title: "Lecturer, Faculty of Economics and Business" },
        { period: "2015 - Present", company: "LPMB-FEB UNAIR", title: "Head" },
        { period: "2015 - 2020", company: "Universitas Airlangga Postgraduate School", title: "Head of S2 PSDM Program" },
        { period: "2010 - 2015", company: "FEB Unair", title: "Vice Dean III" },
    ],
    consultingProjects: [
      { year: 2024, name: "Feasibility Study and Partnership Scheme for Vocational Faculty Establishment in Gresik", client: "Universitas Airlangga" },
      { year: 2024, name: "Company Long-Term Plan Formulation 2025-2030", client: "PT Berkah Industri Mesin Angkat" },
      { year: 2024, name: "Concession Study for Batang Multipurpose Terminal", client: "PT Pelabuhan Indonesia (Persero) Regional 3" },
      { year: 2024, name: "Company Long-Term Plan Formulation", client: "PT Kawasan Industri Gresik" },
      { year: 2023, name: "Cooperation Plan Study for State-Owned Goods Infrastructure Provision at Arar Port", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
      { year: 2023, name: "Corporate Financial Restructuring for Petrokimia Gresik Family Employees", client: "PT Petrokimia Gresik" },
      { year: 2022, name: "Consultancy Services for Proposal Preparation and Feasibility Analysis of State-Owned Goods Utilization at Garongkong Port", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
      { year: 2022, name: "Consultancy Services for Investment Feasibility Study Document Preparation", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
      { year: 2022, name: "Due Diligence for Cooperation Plan between PT Perta Arun Gas and PT Pembangunan Lhokseumawe for Integrated Cold Storage Business", client: "PT Perta Arun Gas" },
      { year: 2021, name: "Appraisal of Ship Utilization Study", client: "PT Varia Usaha Lintas" },
      { year: 2021, name: "Talent Management Program to Improve Company Performance through Human Capital Management", client: "PT Petro Oxo Nusantara" },
      { year: 2021, name: "Prospectus Study for Regional-Owned Enterprises in East Java", client: "Pemprov Jawa Timur" },
      { year: 2020, name: "Business Feasibility and Cooperation Model Study for Refined Sugar Industry Development", client: "PT PG Rajawali 1" },
      { year: 2020, name: "Valuation and Feasibility Study for Subsidiary Formation of PT Petro Graha Medika", client: "RS Petro Kimia" },
    ]
  },
  {
    id: "rooswanti",
    name: "Dr. Rr. Rooswanti Putri A.A., S.Kom., M.M.",
    title: "Senior Consultant, Strategic Management",
    imageUrl: "/img/roos.png",
    bio: "Doctor of Management Science with extensive experience in strategic management and IT. Specializes in feasibility studies, business process improvement, and technology integration.",
    fullBio: "Dr. Rr. Rooswanti is a specialist in strategic management, focusing on the intersection of technology and business performance. Her doctoral research on causal ambiguity in media provides her with a unique perspective on competitive strategy. She has a proven track record in leading complex projects, from developing IT master plans to formulating long-term corporate strategies (RJPP) for major industrial clients. Her expertise includes business process analysis, IT utilization for performance enhancement, and large-scale feasibility studies, making her a vital asset for clients navigating digital transformation and strategic planning.",
    education: [
      { period: "2013 - 2017", institution: "Universitas Airlangga", degree: "Doctor of Management Science", details: "Dissertation on Causal Ambiguity in Trans Media." },
      { period: "2010 - 2012", institution: "Universitas Airlangga", degree: "Master of Management", details: "Thesis on IT's role in improving performance at PT Bank Central Asia Tbk." },
      { period: "2004 - 2008", institution: "Stikom Surabaya", degree: "Bachelor of Computer Science", details: "Focus on Information Systems." },
    ],
    experience: [
        { period: "2023 - Present", company: "Universitas Internasional Semen Indonesia", title: "Lecturer, Master of Management & Management" },
        { period: "2022 - Present", company: "Universitas Airlangga", title: "Lecturer, Doctoral Program in Human Resource Development" },
        { period: "2014 - Present", company: "Universitas Kristen Petra", title: "Lecturer, Business Management" },
    ],
    consultingProjects: [
        { year: 2025, name: "Feasibility Study & Basic Design for Sports Facility Construction (Driving Range & Paddle Tennis)", client: "PT SIER" },
        { year: 2025, name: "Environmental Monitoring and Management for NGRR Tuban Refinery", client: "PT Pertamina (Persero)" },
        { year: 2024, name: "Feasibility Study for KEK Gresik Area Expansion", client: "PT Berkah Kawasan Manyar Sejahtera" },
        { year: 2024, name: "Alignment of KIG and SIG Long-Term Corporate Plans (RJPP)", client: "PT Kawasan Industri Gresik" },
        { year: 2024, name: "IT Master Plan for Perum Jasa Tirta II (2025-2029)", client: "Perum Jasa Tirta II" },
    ]
  },
  {
    id: "ahnaf",
    name: "Ahnaf Wajendra Pranaja, S.H.",
    title: "Legal & Compliance Associate",
    imageUrl: "/img/ahnaf.png",
    bio: "Law graduate specializing in corporate and business law. Proficient in legal compliance, contract drafting, regulatory analysis, and managing licensing to support operations.",
    fullBio: "Ahnaf Wajendra Pranaja is a dedicated legal professional with a strong foundation in business and corporate law from Universitas Airlangga. He brings expertise in navigating complex regulatory landscapes, ensuring full legal and environmental compliance for large-scale projects. His experience includes managing permit applications through the Online Single Submission (OSS) system, conducting legal-social risk assessments, and performing comprehensive reviews of regulations related to environmental permits, labor compliance, and operational safety. Ahnaf is skilled in legal research, contract drafting, and providing the legal backbone for successful project execution.",
    education: [
      { period: "2021 - 2025", institution: "Universitas Airlangga", degree: "Bachelor of Law (S.H.)", details: "GPA: 3.53/4.00. Specializing in Business Law." },
    ],
    experience: [
        { period: "Feb 2024 - Present", company: "BKMP UNAIR", title: "Head of Technical Team for Social, Economic, & Public Health Survey", details: "Led RKL-RPL compliance, managed OSS Tuban permits, and performed legal-social risk assessments for oil refinery projects." },
        { period: "Des 2024 - Jan 2025", company: "AB & Partner's Law Office, Surabaya", title: "Legal Intern", details: "Analyzed breach of contract cases, conducted regulatory inventories, reviewed agreements, and drafted legal opinions." },
        { period: "Jul 2023 - Okt 2023", company: "BKMP UNAIR", title: "Member, Socioeconomic and Population Survey Team", details: "Conducted legal reviews on regulations for Hazardous Waste Management, Environmental Permits, and Labor Compliance." },
    ],
    consultingProjects: []
  },
  {
    id: "syamsul-alam",
    name: "Syamsul Alam",
    title: "Entrepreneur & Digital Strategist",
    imageUrl: "/img/alam.png",
    bio: "Seasoned entrepreneur with a strong background in founding and scaling digital businesses. Specializes in web infrastructure, development, and creating robust online presences for clients.",
    fullBio: "Syamsul Alam is a dynamic entrepreneur with a proven track record of establishing and leading multiple successful companies since 2016. His expertise lies in the digital realm, where he has consistently provided clients with essential services ranging from secure web hosting to the development of professional online portfolios. With a keen understanding of digital infrastructure and market needs, Syamsul excels at building businesses from the ground up and empowering others to thrive online. His practical, hands-on approach makes him a valuable strategist for any venture looking to solidify its digital footprint.",
    education: [
      { period: "N/A", institution: "Universitas Airlangga", degree: "Studies in Economics & Business" },
    ],
    experience: [
        { period: "2016 - Present", company: "Multiple Ventures", title: "Founder & Company Owner", details: "Founded and directs a portfolio of technology and service-based companies. Specializes in providing digital infrastructure, including web hosting, development, and IT solutions for a diverse client base, from individual professionals to growing businesses." },
    ],
    consultingProjects: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Dr. Windijarto's insights were instrumental in our financial restructuring. His approach is both strategic and practical, delivering results that exceeded our expectations.",
    author: "Director of Finance",
    title: "State-Owned Enterprise"
  },
  {
    quote: "The feasibility study conducted by GoldenWinKonsulindo was incredibly thorough. It provided the clarity and data we needed to move forward with a major infrastructure project confidently.",
    author: "CEO",
    title: "Logistics Corporation"
  },
  {
    quote: "A brilliant strategist with a deep understanding of complex economic landscapes. Working with Dr. Windijarto has given our organization a significant competitive advantage.",
    author: "Head of Strategy",
    title: "Regional Development Agency"
  }
];
