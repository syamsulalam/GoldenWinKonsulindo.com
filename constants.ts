
import type { ConsultingProject, Testimonial } from './types';

export const PROFILE_DATA = {
  name: "Dr. Windijarto, SE. MBA",
  title: "Expert Consultant in Economics and Financial Management",
  bio: "With over 32 years of distinguished experience as a lecturer, researcher, and consultant in social, economic, and management fields, Dr. Windijarto brings unparalleled depth of knowledge to every project. His expertise lies in financial management and economics, guiding corporations and public institutions toward strategic growth and operational excellence. Holding a Doctorate in Economics from Universitas Airlangga and an MBA from the University of Central Arkansas, he combines rigorous academic theory with practical, real-world solutions.",
  imageUrl: "https://i.imgur.com/uG2D22u.png", // Image extracted from CV and uploaded
};

export const CONSULTING_PROJECTS: ConsultingProject[] = [
    { year: 2024, name: "Feasibility Study and Partnership Scheme for Vocational Faculty Establishment in Gresik", client: "Universitas Airlangga" },
    { year: 2024, name: "Company Long-Term Plan Formulation 2025-2030", client: "PT Berkah Industri Mesin Angkat" },
    { year: 2024, name: "Concession Study for Batang Multipurpose Terminal, Ketanggan Village, Gringsing District, Batang Regency, Central Java", client: "PT Pelabuhan Indonesia (Persero) Regional 3" },
    { year: 2024, name: "Company Long-Term Plan Formulation", client: "PT Kawasan Industri Gresik" },
    { year: 2023, name: "Cooperation Plan Study for State-Owned Goods Infrastructure Provision at Arar Port", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
    { year: 2023, name: "Corporate Financial Restructuring for Petrokimia Gresik Family Employees", client: "PT Petrokimia Gresik" },
    { year: 2022, name: "Consultancy Services for Proposal Preparation and Feasibility Analysis of State-Owned Goods Utilization at Garongkong Port", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
    { year: 2022, name: "Consultancy Services for Investment Feasibility Study Document Preparation", client: "PT Pelabuhan Indonesia (Persero) Regional 4" },
    { year: 2022, name: "Feasibility Study for Development and Operation of Malay Bandaraya Tourism Area at Pekanbaru Pasar Bawah Port", client: "PT Pelabuhan Indonesia (Persero)" },
    { year: 2022, name: "RJPP Formulation for PT Surabaya Industrial Estate Rungkut 2021-2026", client: "PT Surabaya Industrial Estate Rungkut" },
    { year: 2022, name: "Due Diligence for Cooperation Plan between PT Perta Arun Gas and PT Pembangunan Lhokseumawe for Integrated Cold Storage Business", client: "PT Perta Arun Gas" },
    { year: 2022, name: "Appraisal of KM. Madu Barge Utilization", client: "PT Varia Usaha Lintas Segara" },
    { year: 2022, name: "Due Diligence Study for Capital Injection of PT Perta Arun Gas in PT Patriot Nusantara Aceh", client: "PT Perta Arun Gas" },
    { year: 2021, name: "Appraisal of Ship Utilization Study", client: "PT Varia Usaha Lintas" },
    { year: 2021, name: "Employee Placement Study for PT. Petrokimia Gresik in Subsidiaries, Joint Ventures, and Other Companies", client: "PT Petrokimia Gresik" },
    { year: 2021, name: "Talent Management Program to Improve Company Performance through Human Capital Management", client: "PT Petro Oxo Nusantara" },
    { year: 2021, name: "Functional and Structural Job Identification Study", client: "PT Petrokimia Gresik" },
    { year: 2021, name: "Prospectus Study for Regional-Owned Enterprises in East Java", client: "Pemprov Jawa Timur" },
    { year: 2021, name: "Study of Non-Productive Asset Utilization", client: "PT Semen Indonesia Logistik" },
    { year: 2020, name: "Business Feasibility and Cooperation Model Study for Refined Sugar Industry Development", client: "PT PG Rajawali 1" },
    { year: 2020, name: "Valuation and Feasibility Study for Subsidiary Formation of PT Petro Graha Medika", client: "RS Petro Kimia" },
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
