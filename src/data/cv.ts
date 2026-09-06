// Content sourced verbatim from Omkar Kamale's CV.

// `?url` forces a real emitted file URL for every size — without it, Vite
// inlines small SVGs (Apple/Fox/TIAA/Citi are all under the 4KB threshold)
// as an unescaped data URI, which breaks when used inside an unquoted
// CSS url() because the SVG's attribute quotes (') aren't percent-encoded.
import appleLogo from '../assets/logos/apple.svg?url'
import foxLogo from '../assets/logos/fox.svg?url'
import tiaaLogo from '../assets/logos/tiaa.svg?url'
import citiLogo from '../assets/logos/citi.svg?url'
import otisLogo from '../assets/logos/otis.svg?url'
import catalentLogo from '../assets/logos/catalent.svg?url'
import munichreLogo from '../assets/logos/munichre.svg?url'
import deloitteLogo from '../assets/logos/deloitte.svg?url'

export const profile = {
  name: 'Omkar Kamale',
  initials: 'OK',
  role: 'Associate Director',
  company: 'Deloitte',
  roles: [
    'Solution Architecture',
    'Full-Stack Development',
    'Data Engineering',
    'RFP Proposals',
    'Project Management',
  ],
  tagline:
    'An expert consultant and solution architect with 15+ years leading full-stack development, data engineering and RFP delivery for enterprise clients like Apple, TIAA and Citi Bank.',
  phone: '+91 9594 552 799',
  email: 'omkarkamale001@gmail.com',
}

export type Engagement = {
  client: string
  role: string
  summary?: string
  projects: { title: string; description: string }[]
}

export type Position = {
  company: string
  role: string
  dates: string
  intro?: string
  engagements?: Engagement[]
  stack?: string
}

export const experience: Position[] = [
  {
    company: 'Deloitte, India',
    role: 'Associate Director',
    dates: 'July 2022 — Present',
    engagements: [
      {
        client: 'Apple Inc',
        role: 'Senior Consultant (Contractor - Deloitte)',
        projects: [
          {
            title: 'EFFA (Early Field Failure Analysis)',
            description:
              "EFFA is Apple's centralized operations platform for managing and analysing field-returned devices, replacing a fragmented legacy system with a single workflow that tracks a device from receipt through testing, inventory management, compliance, reporting, and final disposition. Previously, returned-device analysis was spread across multiple tools and manual processes, causing slow operations, data quality issues, compliance risks, poor visibility and high operational overhead. EFFA provides end-to-end traceability, compliance and audit readiness, real-time operational visibility, standardized workflows, better support for large-scale NPI launches, and reduced manual effort and operational cost. Frontend on Reactjs with Redux toolkit and Backend on Springboot, Database on PostgresSQL.",
          },
          {
            title: 'Space Planner',
            description:
              'Web app to trigger solutions for space optimization in different Apple stores. Analyze the data and visualize it on the web app. Create different optimization scenarios, then feed the scenarios to the Gurobi solver and get the results. Built with React, Redux, Redux-saga, and Highcharts for charting.',
          },
          {
            title: 'AMR EDU',
            description:
              'AI based web app that gets the PDF order sheet from educational institutions with Apple devices. Helps automate feeding data to SAP manually — the PDF is scanned through OCR, corrections can be made in the app, and the data is sent back to the ML models which eventually feed to SAP. Built with React and TypeScript; Formik used to create and validate form data.',
          },
        ],
      },
      {
        client: 'Teachers Insurance and Annuity Association (TIAA)',
        role: 'Full Stack Developer (Contractor - Deloitte)',
        projects: [
          {
            title: 'Mr Carnegie LLM App',
            description:
              'AI based chat application to get information about various financial instruments. Users can upload documents and ask the app to analyse and summarise them, and select various LLM models to get accurate results. Day to day tasks involve connecting with stakeholders to gather requirements and estimate story points, coordinating with prompt engineering, data science and DevOps teams, and demoing progress to the client. Built with Next.js, React, DynamoDB, AWS EC2, Node.js, OpenSearch, LLM, Langchain, TailwindCSS, JIRA.',
          },
        ],
      },
      {
        client: 'Apple Inc',
        role: 'Senior Consultant (Contractor - Deloitte)',
        projects: [
          {
            title: 'Apple Pay Analytics (iReporter)',
            description:
              'iReporter is a Business Intelligence and Reporting tool that provides intuitive business insights into Apple Pay products. Built and maintained the iReporter web app, part of Apple Pay Analytics, used by stakeholders across the globe to monitor payment data of various Apple Pay services and give sellers a holistic view of Apple Pay usage. Built with Reactjs, Redux, Saga, Recharts and echarts.',
          },
        ],
      },
    ],
  },
  {
    company: 'L&T Infotech, Mumbai',
    role: 'Software Engineering Specialist',
    dates: 'April 2017 — July 2022',
    intro:
      'Worked on several projects across different domains and clients, and held experience in project management and SCRUM (Agile Development Method), handling and leading a team of 10-15 people.',
    engagements: [
      {
        client: 'Otis Elevators',
        role: 'Campus View',
        projects: [
          {
            title: 'Campus View',
            description:
              "Built tools to monitor elevator health across different regions (NAA, EMEA, APAC) using IIoT. Customers can monitor elevator health in realtime and fix issues remotely, largely saving the cost of sending mechanics on site. Used React/Redux for frontend across many different backend APIs and teams in this complex IIoT system, plus AppInsights for frontend analytics. Hosted on Azure — App Service, Function Apps, Web Apps, mobile apps, IIoT data streaming, data analytics, real-time services, CosmosDB, etc.",
          },
        ],
      },
      {
        client: 'Catalent Pharma Solutions',
        role: 'Shipment Portal',
        projects: [
          {
            title: 'Shipment Portal',
            description:
              'First project — developed a shipment portal for internal users to track different batches of medicine shipment across regions, including clinical and non-clinical shipment categories. As a pharma company, strict standards were followed with a Computer System Validation (CSV) cycle after every sprint. Built with Angular 5 for frontend, ASP.NET as middle layer, and JDE as backend.',
          },
        ],
      },
      {
        client: 'HSB, MunichRe',
        role: 'Underwriter Portal',
        projects: [
          {
            title: 'Underwriter Portal',
            description:
              "Second project for a reinsurance company — a portal for underwriters to track their client's risk profile. Built with AEM as backend, and HTML, jQuery, LESS as frontend.",
          },
        ],
      },
      {
        client: 'Citi Bank',
        role: 'Treasury Monitoring Portal',
        projects: [
          {
            title: 'Treasury Monitoring Portal',
            description:
              'Developed a portal for monitoring treasury related instruments using Angular 5, Java and Spring Boot.',
          },
        ],
      },
      {
        client: 'FOX Studios',
        role: 'Viewership Analytics',
        projects: [
          {
            title: 'Viewership Analytics',
            description:
              'Built graphical analytics tools to monitor viewership across different regions and categories using React/Redux, D3.js, AWS and SQL.',
          },
        ],
      },
    ],
    stack:
      'Overall held experience working on Reactjs, Redux, Angular 2+, Python (Flask), Azure, VSTS, HTML/CSS, JavaScript, LESS, SASS, etc., as per project requirements.',
  },
  {
    company: 'Fintech Blue / Turtlemint, Mumbai',
    role: 'Sr. UI Developer',
    dates: 'March 2016 — April 2017',
    intro:
      'Turtlemint is an e-commerce platform for buying health insurance — customers can choose between different insurers and the benefits they provide. Responsible for building UI/UX features for the web application using HTML/CSS, JavaScript, AngularJS, Bootstrap, LESS preprocessor, npm, bower, etc.',
  },
  {
    company: 'Spree IT Solutions / Yallaspree.com, Hyderabad',
    role: 'Sr. UI Developer',
    dates: 'Oct 2015 — Feb 2016',
    intro:
      'Yallaspree is an e-commerce platform where one can find discounted products from known brands based on suggestions from friends who recently shopped nearby. Worked on setting up the front-end with SCSS, AngularJS, HTML, PHP.',
  },
  {
    company: 'Hipaapedia Services / Toovia.com (Ensuant Inc, USA), Navi Mumbai',
    role: 'Software Engineer',
    dates: 'August 2014 — September 2015',
    intro:
      'Toovia is an e-commerce startup focused on selling luxury products in fashion, designer clothing and accessories. Worked on a proprietary frontend framework built by senior developers using HTML templating, AJAX calls and JSON as the data-exchange method, developing frontend widgets and design upgrades per the UX team.',
  },
  {
    company: 'Arkloop Solutions, Navi Mumbai',
    role: 'Web Developer',
    dates: 'November 2013 — August 2014',
    intro: 'Worked on building websites using HTML/CSS, jQuery, JavaScript, PHP/MySQL.',
  },
  {
    company: 'Calor Amplifications, Navi Mumbai',
    role: 'Web Developer',
    dates: 'Feb 2012 — August 2013',
    intro: 'Started as a fresher. Worked on HTML/CSS, JavaScript, etc.',
  },
]

export const projects = [
  {
    title: 'E-Life Ecommerce App',
    place: 'Pesto Tech',
    tag: 'Project | Github',
    description:
      'Worked on building the app using Reactjs, Redux/Saga, MaterialUI, MongoDB, Back4App, Parse Function APIs, Netlify, Cypress.',
    stack: ['React', 'Redux-Saga', 'Material UI', 'MongoDB', 'Back4App', 'Netlify', 'Cypress'],
  },
]

export const skillGroups = [
  {
    heading: 'Working in React/Redux for more than 8 years',
    items: [],
  },
  {
    heading: 'Project Management, Agile, SCRUM, Team Leading.',
    items: [],
  },
  {
    heading: 'React, Redux, Javascript, JQuery',
    items: ['React', 'Redux', 'Javascript', 'JQuery'],
  },
  {
    heading: 'Azure, AWS, Docker',
    items: ['Azure', 'AWS', 'Docker'],
  },
  {
    heading: 'HTML/CSS, LESS, SASS',
    items: ['HTML/CSS', 'LESS', 'SASS'],
  },
  {
    heading: 'Git, Python, Open Source contributions',
    items: ['Git', 'Python', 'Open Source'],
  },
  {
    heading: 'Agentic AI Workflows, LangChain, LangGraph',
    items: ['Agentic AI Workflows', 'LangChain', 'LangGraph'],
  },
]

export const skillMarquee = [
  'React',
  'Redux',
  'Javascript',
  'JQuery',
  'Azure',
  'AWS',
  'Docker',
  'HTML/CSS',
  'LESS',
  'SASS',
  'Git',
  'Python',
  'Agile',
  'SCRUM',
  'Agentic AI Workflows',
  'LangChain',
  'LangGraph',
]

export const interests = [
  'Solution Architecture',
  'Project Management',
  'Product Management',
  'Data Engineering',
]

export type Client = {
  name: string
  featured?: boolean
  note?: string
  logo: string
  ratio: number
  via?: { name: string; logo: string; ratio: number }
}

export const clients: Client[] = [
  {
    name: 'Apple',
    featured: true,
    note:
      'Longest-running engagement — three-plus years building EFFA, Space Planner, AMR EDU and Apple Pay Analytics (iReporter).',
    logo: appleLogo,
    ratio: 1,
    via: { name: 'Deloitte', logo: deloitteLogo, ratio: 892.3999515 / 170.50693801843317 },
  },
  { name: 'TIAA', logo: tiaaLogo, ratio: 153.334 / 52.158 },
  { name: 'Citi Bank', logo: citiLogo, ratio: 56 / 33 },
  { name: 'Otis Elevators', logo: otisLogo, ratio: 75.668789 / 24.765166 },
  { name: 'Catalent Pharma Solutions', logo: catalentLogo, ratio: 288.77717186 / 64.61445286 },
  { name: 'HSB / MunichRe', logo: munichreLogo, ratio: 150.87927394 / 36.39605294 },
  { name: 'FOX Studios', logo: foxLogo, ratio: 1 },
]
