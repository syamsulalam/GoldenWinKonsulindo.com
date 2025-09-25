
import type { Testimonial, TeamMember, Service, Industry, Article } from './types';
import { ArticleCategory } from './types';
import {
    ScaleIcon, ChartBarIcon, BriefcaseIcon, UsersIcon, GlobeIcon, DocumentTextIcon, BeakerIcon,
    BuildingLibraryIcon, TruckIcon, CogIcon, CpuChipIcon, HeartIcon, FireIcon, HomeIcon
} from './components/Icons';


export const SERVICES_DATA: Service[] = [
    {
        id: "business-planning",
        icon: ScaleIcon,
        title: "Business Planning",
        description: "Crafting robust strategies and feasibility studies to ensure project viability and long-term success from the ground up.",
        longDescription: "Our Business Planning services provide the foundational analysis required for any successful venture. We conduct exhaustive feasibility studies to assess market, financial, and operational viability, and develop comprehensive business plans (RBB) that serve as a roadmap for execution, funding, and growth.",
        subServices: [
            { title: "Feasibility Studies", description: "In-depth analysis of project viability, assessing financial, technical, and market factors." },
            { title: "Business Plan Development (RBB)", description: "Creating detailed, data-driven business plans for startups and new ventures." }
        ]
    },
    {
        id: "corporate-planning",
        icon: BriefcaseIcon,
        title: "Corporate Planning",
        description: "Guiding established organizations through complex strategic shifts like M&A, process optimization, and long-term roadmapping.",
        longDescription: "For established corporations, we offer strategic planning services to navigate growth and transformation. Our expertise covers complex Mergers & Acquisitions, optimizing workflows through Business Process Management (BPM), and charting a clear future with divisional and corporate-level roadmaps.",
        subServices: [
            { title: "Mergers & Acquisition (M&A)", description: "Strategic advisory through the entire M&A lifecycle, from valuation to integration." },
            { title: "Business Process Management (BPM)", description: "Analyzing and redesigning workflows to improve efficiency, reduce costs, and enhance quality." },
            { title: "Division Roadmaps", description: "Developing long-range strategic plans for specific business units to align with corporate goals." }
        ]
    },
    {
        id: "corporate-financial-planning",
        icon: ChartBarIcon,
        title: "Corporate Financial Planning",
        description: "Maximizing corporate value through expert financial modeling, valuation, and sophisticated investment analysis.",
        longDescription: "Our financial experts provide critical insights to enhance fiscal health and drive value. We build sophisticated financial models for forecasting and decision-making, conduct precise corporate valuations, and perform rigorous investment analysis to guide capital allocation and strategic financial decisions.",
        subServices: [
            { title: "Financial Modeling", description: "Building dynamic financial models for forecasting, valuation, and scenario planning." },
            { title: "Corporate Valuation", description: "Providing accurate and defensible business valuations for M&A, financial reporting, and strategic planning." },
            { title: "Investment Analysis", description: "Evaluating investment opportunities to maximize returns and manage risk." }
        ]
    },
    {
        id: "corporate-research",
        icon: BeakerIcon,
        title: "Corporate Research",
        description: "Delivering data-driven insights with comprehensive market research and rigorous economic impact analysis.",
        longDescription: "Informed decisions are built on solid data. Our corporate research services offer deep dives into market dynamics, competitive landscapes, and consumer behavior. We also specialize in conducting economic impact analyses to understand the broader effects of projects and policies.",
        subServices: [
            { title: "Market Research", description: "Conducting qualitative and quantitative research to identify market trends, opportunities, and threats." },
            { title: "Economic Impact Analysis", description: "Assessing the effect of projects, policies, or investments on the wider economy." }
        ]
    },
    {
        id: "human-resources-planning",
        icon: UsersIcon,
        title: "Human Resources Planning",
        description: "Aligning your workforce with business goals through strategic talent management and organizational design.",
        longDescription: "Your people are your greatest asset. We help you maximize their potential through strategic HR planning, including developing talent management frameworks, optimizing your organizational design for efficiency, and creating comprehensive HR strategies that support your business objectives.",
        subServices: [
            { title: "Talent Management", description: "Strategies for attracting, developing, and retaining top talent." },
            { title: "Organizational Design", description: "Structuring your organization to improve communication, efficiency, and effectiveness." },
            { title: "HR Strategy", description: "Developing a long-term HR plan that aligns with your company's strategic goals." }
        ]
    },
    {
        id: "information-system-planning",
        icon: CpuChipIcon,
        title: "Information System Planning",
        description: "Navigating digital transformation with strategic IT audits and clear technology implementation roadmaps.",
        longDescription: "In the digital age, a coherent IT strategy is crucial. We provide expert guidance through comprehensive IT strategy development, system audits to identify gaps and opportunities, and the creation of clear digital transformation roadmaps to guide your technology investments and implementation.",
        subServices: [
            { title: "IT Strategy & Audits", description: "Assessing current IT infrastructure and developing a strategy for future growth and security." },
            { title: "Digital Transformation Roadmaps", description: "Creating a step-by-step plan for adopting new technologies and processes." }
        ]
    },
    {
        id: "reporting-governance",
        icon: DocumentTextIcon,
        title: "Reporting & Governance",
        description: "Enhancing transparency and stakeholder confidence with professional sustainability and annual report development.",
        longDescription: "Clear, compelling reporting is key to stakeholder trust. We specialize in developing comprehensive annual reports that communicate financial health and strategic direction, as well as sustainability reports that showcase your commitment to ESG (Environmental, Social, and Governance) principles.",
        subServices: [
            { title: "Sustainability Reporting", description: "Developing reports that communicate your organization's ESG performance." },
            { title: "Annual Report Development", description: "Crafting professional and compliant annual reports for stakeholders and regulators." }
        ]
    }
];

export const INDUSTRIES_DATA: Industry[] = [
    { name: "Banking & Finance", description: "Navigating regulatory complexity and digital disruption with strategies for growth and risk management.", icon: BuildingLibraryIcon },
    { name: "Logistics & Supply Chain", description: "Optimizing operations, improving efficiency, and building resilient supply chains for the modern economy.", icon: TruckIcon },
    { name: "Manufacturing", description: "Driving operational excellence, process improvement, and strategic planning for industrial leaders.", icon: CogIcon },
    { name: "Technology", description: "Guiding tech firms through rapid growth cycles with market analysis, IT strategy, and digital transformation.", icon: CpuChipIcon },
    { name: "Healthcare", description: "Providing strategic planning and financial consulting for hospitals, clinics, and healthcare providers.", icon: HeartIcon },
    { name: "Energy & Resources", description: "Advising on large-scale energy projects, from feasibility and impact assessment to financial planning.", icon: FireIcon },
    { name: "Public Sector", description: "Assisting government agencies with economic development, policy analysis, and public-private partnerships.", icon: ScaleIcon },
    { name: "Real Estate & Construction", description: "Delivering feasibility studies, market analysis, and financial modeling for property development projects.", icon: HomeIcon },
];

export const ARTICLES_DATA: Article[] = [
    {
        id: 'economic-outlook-2025',
        title: 'Indonesia Economic Outlook 2025: Navigating Global Headwinds',
        category: ArticleCategory.Research,
        author: 'Dr. Windijarto, SE. MBA',
        date: 'October 22, 2024',
        imageUrl: 'https://picsum.photos/800/600?random=1',
        summary: 'A deep dive into the macroeconomic trends, challenges, and opportunities facing Indonesia in the upcoming year. This research paper explores key sectors poised for growth and provides strategic recommendations.',
        content: 'Full content of the research paper would go here, detailing methodology, findings, and analysis on various economic indicators and their implications for businesses in Indonesia.'
    },
    {
        id: 'digital-transformation-webinar',
        title: 'Webinar Recap: The Digital Transformation Roadmap for SMEs',
        category: ArticleCategory.Webinar,
        author: 'Syamsul Alam',
        date: 'September 15, 2024',
        imageUrl: 'https://picsum.photos/800/600?random=2',
        summary: 'Highlights from our recent webinar on how Small and Medium Enterprises can leverage technology to improve efficiency, reach new markets, and build a competitive edge in the digital age.',
        content: 'This article would provide a summary of the key takeaways from the webinar, perhaps with embedded video clips, presentation slides, and a Q&A summary.'
    },
    {
        id: 'esg-reporting-importance',
        title: 'Why ESG Reporting is No Longer Optional for Modern Corporations',
        category: ArticleCategory.Blog,
        author: 'Dr. Rr. Rooswanti Putri A.A.',
        date: 'August 05, 2024',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        summary: 'An insightful blog post on the rising importance of Environmental, Social, and Governance (ESG) reporting for attracting investment, building brand reputation, and ensuring long-term sustainability.',
        content: 'The full blog post would explore the drivers behind the ESG movement, the benefits of transparent reporting, and practical first steps for companies looking to develop their ESG strategy.'
    },
    {
        id: 'new-partnership-announcement',
        title: 'GoldenWinKonsulindo Announces Strategic Partnership with a Leading Logistics Firm',
        category: ArticleCategory.News,
        author: 'Corporate Communications',
        date: 'July 28, 2024',
        imageUrl: 'https://picsum.photos/800/600?random=4',
        summary: 'We are thrilled to announce a new partnership aimed at transforming supply chain efficiency in the region. This collaboration will combine our strategic consulting expertise with cutting-edge logistics technology.',
        content: 'A press release style article detailing the nature of the partnership, the goals, and quotes from the leaders of both organizations.'
    },
    {
        id: 'community-development-initiative',
        title: 'Our Commitment to Community: Supporting Local Education Initiatives',
        category: ArticleCategory.CSR,
        author: 'Corporate Communications',
        date: 'June 10, 2024',
        imageUrl: 'https://picsum.photos/800/600?random=5',
        summary: 'As part of our commitment to Corporate Social Responsibility, we are proud to launch a new program supporting educational workshops for underprivileged students in Surabaya. Learn more about our initiative.',
        content: 'This article would detail the CSR program, its objectives, how the community can get involved, and the long-term vision for our social impact efforts.'
    }
];


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
    skills: [
        "Financial Management",
        "Economic Analysis",
        "Feasibility Studies",
        "Corporate Strategy",
        "Business Valuation",
        "Public Policy Consulting"
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
    skills: [
        "Strategic Management",
        "IT & Business Integration",
        "Business Process Improvement",
        "Corporate Planning (RJPP)",
        "Feasibility Studies",
        "Technology Management"
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
    skills: [
        "Legal Compliance",
        "Contract Drafting & Review",
        "Legal Research & Opinion",
        "Regulatory Analysis",
        "Permit Processing (OSS)",
        "Risk Assessment"
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
    skills: [
        "Entrepreneurship",
        "Digital Strategy",
        "Web Development & Hosting",
        "Business Development",
        "IT Infrastructure",
        "E-commerce Solutions"
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