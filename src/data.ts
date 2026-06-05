/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Faculty, ResearchPublication, UniversityLeader, TimelineEvent, CampusFacility } from "./types";
import libraryImg from "./assets/images/anu_library_1779356737786.png";
import researchComplexImg from "./assets/images/anu_research_complex_1779356756899.png";
import viceChancellorImg from "./assets/proggangadharsirvc.png";
import rectorImg from "./assets/rector.png";
import registrarImg from "./assets/registrar.png";
export const LEADERSHIP: UniversityLeader[] = [
  
  {
    role: "Vice-Chancellor",
    name: "Prof. K. Gangadhara Rao",
    quote: "Pioneering research, digital transformation, and professional readiness to empower world-class leaders.",
    message: "Acharya Nagarjuna University is named after the colossal Buddhist thinker whose scientific treatises on relativity and emptiness inspired civilizations. Today, we carry that torch into modern artificial intelligence, deep biochemistry, and pharmaceutical leadership. We offer our students a borderless learning paradigm with 100% internship support and international exposure.",
    photoUrl: viceChancellorImg
  },
  {
    role: "Rector",
    name: "Sri S. Abdul Nazeer",
    quote: "Ensuring an academic environment where ancient wisdom meets contemporary scientific global challenges.",
    message: "As the Governor of Andhra Pradesh and Chancellor of Acharya Nagarjuna University, it is my privilege to invite scholars to an institution which stands as a lighthouse of knowledge in the region. Our mission is to foster character, innovation, and social responsibility alongside academic excellence.",
    photoUrl: rectorImg
  },
  {
    role: "Registrar",
    name: "Sri S. Abdul Nazeer",
    quote: "Ensuring an academic environment where ancient wisdom meets contemporary scientific global challenges.",
    message: "As the Governor of Andhra Pradesh and Chancellor of Acharya Nagarjuna University, it is my privilege to invite scholars to an institution which stands as a lighthouse of knowledge in the region. Our mission is to foster character, innovation, and social responsibility alongside academic excellence.",
    photoUrl: registrarImg
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1976",
    title: "The Inception of a Legacy",
    description: "The foundation stone of the university was laid by the then President of India, Shri Fakhruddin Ali Ahmed, on the national highway near Namburu, establishing a gateway to qualitative higher studies.",
    tag: "Milestone"
  },
  {
    year: "1985",
    title: "Empowerment and Autonomous Growth",
    description: "Granted complete academic autonomy for key faculties, allowing bespoke curriculum designs that matched Indian and global industry standards.",
    tag: "Expansion"
  },
  {
    year: "1993",
    title: "Named in Honor of Acharya Nagarjuna",
    description: "The Guntur post-graduate centre was formally christened 'Acharya Nagarjuna University' as an homage to the legendary 2nd-century Mahayana philosopher who presided over the ancient university of Sriparvata.",
    tag: "Prestige"
  },
  {
    year: "2008",
    title: "International Students Hub",
    description: "Inauguration of the International Student Cell, attracting scholars from 25+ countries across Africa, South-East Asia, and the Middle East.",
    tag: "Global"
  },
  {
    year: "2018",
    title: "NAAC Grade 'A' Accreditation",
    description: "Validated by the National Assessment and Accreditation Council with an elite Grade 'A' rating, recognizing unparalleled research output and state-of-the-art campus infrastructure.",
    tag: "Excellence"
  },
  {
    year: "2024",
    title: "Centre for Advanced AI & Nanotech",
    description: "Inauguration of a landmark research wing housed with multi-million dollar imaging setups and modern GPU servers to drive collaborative research with Silicon Valley partners.",
    tag: "Innovation"
  },
  {
    year: "2026",
    title: "Global Sustainability & Impact Milestone",
    description: "Ranked in the top echelon globally under Times Higher Education Impact parameters, spearheading green campus energy and local community health drives.",
    tag: "Today"
  }
];

export const FACULTIES: Faculty[] = [
  {
    id: "engg_tech",
    name: "Faculty of Engineering & Technology",
    icon: "Cpu",
    description: "Nurturing innovative builders, systems architects, and technical visionaries through project-based learning and Silicon Valley industrial partnerships.",
    dean: "Prof. Dr. P. Siddaiah",
    deanQuote: "We prepare engineers to solve humanity's bottleneck challenges through code, hardware, and design thinking.",
    departments: [
      {
        id: "cse",
        name: "Dept. of Computer Science & Engineering",
        description: "Specialized streams in Artificial Intelligence, Cyber Security, and Cloud Architecture with high-performance computing labs.",
        degrees: ["B.Tech CSE", "M.Tech Software Eng.", "Ph.D. in AI"],
        eligibility: "Intermediate/12th Grade with Physics, Chemistry & Mathematics (MPC) and state ranking in AP EAPCET / JEE Main.",
        durationYears: 4,
        tuitionPerYearINR: 120000,
        careerPath: ["Senior AI Architect", "Full Stack Lead", "Systems Engineer", "Security Consultant"]
      },
      {
        id: "ece",
        name: "Dept. of Electronics & Comm. Engineering",
        description: "Focusing on RF Communication, VLSI designs, drone electronics, and next-generation signal processing paradigms.",
        degrees: ["B.Tech ECE", "M.Tech VLSI", "Ph.D. in Wireless Networks"],
        eligibility: "Intermediate/12th Grade with MPC and qualifying rank in AP EAPCET.",
        durationYears: 4,
        tuitionPerYearINR: 110000,
        careerPath: ["VLSI Designer", "Embedded Hardware Lead", "Network Architect", "IoT Engineer"]
      },
      {
        id: "civil_mech",
        name: "Dept. of Civil & Mechanical Systems",
        description: "Green housing systems, structural integrity tests, aerospace flows, and robotic automation systems.",
        degrees: ["B.Tech Civil", "B.Tech Mechanical", "M.Tech Industrial Robotics"],
        eligibility: "Intermediate/12th Grade with MPC stream and counseling.",
        durationYears: 4,
        tuitionPerYearINR: 95000,
        careerPath: ["Smart City Planner", "Aerospace Computational Lead", "CAD Systems Supervisor"]
      }
    ]
  },
  {
    id: "pharm_sci",
    name: "Faculty of Pharmaceutical Sciences",
    icon: "Pill",
    description: "One of India's premier Pharmacy wings, consistently ranked high in NIRF, collaborating with top pharmaceutical corporations in Hyderabad and globally.",
    dean: "Prof. Dr. A. Prameela Rani",
    deanQuote: "From diagnostic discovery to clinical pharmacology, our researchers define the frontiers of safe medicine.",
    departments: [
      {
        id: "bpharm",
        name: "Pharmaceutical Sciences & Chemistry",
        description: "Intense core in pharmacy chemistry, pharmacognosy, industrial drug systems, and molecular biology modeling.",
        degrees: ["B.Pharmacy", "M.Pharmacy (Pharmaceutics)", "M.Pharmacy (Analysis)"],
        eligibility: "Intermediate/12th Grade (BiPC or MPC stream) and qualifying rank in EAPCET.",
        durationYears: 4,
        tuitionPerYearINR: 140000,
        careerPath: ["R&D Drug Scientist", "Quality Control Lead", "Clinical Assayer", "Regulatory Affairs Specialist"]
      },
      {
        id: "pharmd",
        name: "Clinical Pharmacotherapy (Doctorate)",
        description: "Elite six-year post-intermediate course with deep clinical rotations inside government medical colleges and hospital systems.",
        degrees: ["Pharm.D (Doctor of Pharmacy)", "Pharm.D Post Baccalaureate"],
        eligibility: "12th Grade with Biology (BiPC) and merit scoring in counselor panels.",
        durationYears: 6,
        tuitionPerYearINR: 180000,
        careerPath: ["Clinical Pharmacist", "Medical Science Liaison", "Health Economics Advisory", "Critical Care Specialist"]
      }
    ]
  },
  {
    id: "nat_sci",
    name: "Faculty of Natural Sciences",
    icon: "Dna",
    description: "Decoding nature's blueprints. Highly respected research in genetic editing, plant cell biotechnology, quantum physics, and eco-conservation.",
    dean: "Prof. Dr. G. Rosaiah",
    deanQuote: "Understanding the molecular and quantum dynamics of our universe is the key to local agricultural resilience and global medicine.",
    departments: [
      {
        id: "biotech",
        name: "Dept. of Biotechnology & Genetics",
        description: "Working on drought-resistant local crop strains, bio-plastics, and gene sequencing diagnostics.",
        degrees: ["B.Sc Biotech", "M.Sc Biotechnology", "Ph.D. in Cellular Biology"],
        eligibility: "Intermediate/12th with Biology/Biotech. Admission based on postgraduate national exams and merit index.",
        durationYears: 2,
        tuitionPerYearINR: 45000,
        careerPath: ["Biotech Product Engineer", "Immunology Researcher", "Bioinformatics Specialist"]
      },
      {
        id: "chem_phys",
        name: "Dept. of Chemistry & Material Sciences",
        description: "Investigating organic compound synthesis, premium solar polymer crystals, and nanoparticle catalysts.",
        degrees: ["M.Sc Chemistry", "M.Sc Organic Synthesis", "Ph.D. in Nanotechnology"],
        eligibility: "Bachelor's Degree in Science with Chemistry core.",
        durationYears: 2,
        tuitionPerYearINR: 40000,
        careerPath: ["Polymer Materials Specialist", "Forensic Chemist", "Process Development Lead"]
      }
    ]
  },
  {
    id: "comm_mgmt",
    name: "Faculty of Commerce & Management",
    icon: "Briefcase",
    description: "Training corporate captains, financial strategists, and innovative technology founders through case-studies and incubation programs.",
    dean: "Prof. Dr. R. Siva Rama Prasad",
    deanQuote: "Ethical management combined with strong analytical skills forms the core of ANU business leadership.",
    departments: [
      {
        id: "mba",
        name: "Dept. of Business Administration",
        description: "Accredited syllabus with pathways in Digital Finance, HR Analytics, International Trade, and Agribusiness.",
        degrees: ["MBA (General)", "MBA Travel & Hospitality", "Executive MBA"],
        eligibility: "Graduation degree with qualifying AP ICET rank or CAT/MAT percentiles.",
        durationYears: 2,
        tuitionPerYearINR: 90000,
        careerPath: ["Management Consultant", "Product Strategist", "Investment Analyst", "HR Operations Partner"]
      },
      {
        id: "commerce",
        name: "Dept. of Advanced Commerce & Auditing",
        description: "Integrating fintech platforms, corporate law compliance, and systemic tax governance frameworks.",
        degrees: ["M.Com", "M.Com Finance", "Ph.D. in Econometrics"],
        eligibility: "B.Com graduate with academic merit index.",
        durationYears: 2,
        tuitionPerYearINR: 35000,
        careerPath: ["Certified Auditor", "Financial Comptroller", "Tax Consultant"]
      }
    ]
  },
  {
    id: "humanities_soc",
    name: "Faculty of Humanities & Buddhist Studies",
    icon: "Compass",
    description: "Drawing connection directly to Acharya Nagarjuna's philosophy. Exploring historical linguistics, sociology, Buddhist archaeology and modern journalism.",
    dean: "Prof. Dr. M. L. Kantha Rao",
    deanQuote: "We cultivate deep empathy and global critical awareness by examining historic traditions and contemporary media.",
    departments: [
      {
        id: "buddhist",
        name: "Centre for Buddhist Studies & Philosophy",
        description: "Focusing on Madhyamaka philosophy, Pali/Sanskrit translation, and Buddhist monument archaeology of the Krishna valley.",
        degrees: ["M.A. Buddhist Studies", "Ph.D. in ancient Philosophy"],
        eligibility: "Any undergraduate degree with deep interest in historical philology.",
        durationYears: 2,
        tuitionPerYearINR: 20000,
        careerPath: ["Academic Researcher", "Archaeological Advisor", "Cultural Program Lead"]
      },
      {
        id: "journalism",
        name: "Dept. of Journalism & Mass Communication",
        description: "Housed with digital audio recording suites and print mock layouts to train ethical media leaders.",
        degrees: ["M.A. Journalism", "Ph.D. in Mass Communication"],
        eligibility: "Undergraduate degree. Admission via AP PGCET.",
        durationYears: 2,
        tuitionPerYearINR: 30000,
        careerPath: ["Journalist", "Digital Content Lead", "Corporate Communication Manager"]
      }
    ]
  }
];

export const PUBLICATIONS: ResearchPublication[] = [
  {
    id: "pub_01",
    title: "Synthesis of Green Polymer Nanoparticles for Target-Specific Anti-Cancer Drug Delivery",
    authors: "Rao, K. G., & Lakshmi, P. S.",
    journal: "International Journal of Nanomedicine & Bio-delivery",
    year: 2025,
    tags: ["Nanotechnology", "Pharmaceuticals", "Cancer Research"],
    departmentId: "bpharm",
    significance: "Identified a stable bio-compatible vector derived from local flora that safely encapsulates and deposits custom therapeutic agents with 94% accuracy."
  },
  {
    id: "pub_02",
    title: "Relativity Conceptures in Madhyamaka Philosophy: Comparing Nagarjuna with Quantum Non-Locality",
    authors: "Srinivasa Sastri, A., & Chang, H.",
    journal: "Journal of East-West Philosophical Inquiry",
    year: 2024,
    tags: ["Philosophy", "Buddhist Studies", "Quantum Theory"],
    departmentId: "buddhist",
    significance: "Established a clear formal mapping between the 'Shunyata' emptiness of Nagarjuna's 2nd-century treatises and current quantum entanglement frameworks."
  },
  {
    id: "pub_03",
    title: "Drought Resilience Modeling in Krishna-Godavari Delta Rice Strains using Deep Neural Genomes",
    authors: "Rosaiah, G., & Prasad, V. L.",
    journal: "IEEE Biotechnology & Precision Agriculture Letters",
    year: 2025,
    tags: ["Biotechnology", "AI", "Agriculture"],
    departmentId: "biotech",
    significance: "Pioneered a Transformer-based model predicting plant DNA adaptations to sudden drought, saving critical crop yields for farmers in coastal Andhra Pradesh."
  },
  {
    id: "pub_04",
    title: "Low-Power VLSI Architecture for Real-Time Edge Processing in Smart Drone Nodes",
    authors: "Siddaiah, P., & Anand, M. K.",
    journal: "IEEE Transactions on Circuits and Systems",
    year: 2025,
    tags: ["Engineering", "VLSI", "Edge AI", "Electronics"],
    departmentId: "ece",
    significance: "Created a customized silicon flow reducing battery dissipation by 41% on embedded agricultural scouting drones."
  },
 
];

export const FACILITIES: CampusFacility[] = [
  {
    id: "library",
    name: "Dr. B.R. Ambedkar Central Library",
    category: "Academic",
    description: "An architectural marvel housing over 2,50,000 physical volumes, elite subscription to IEEE/Elsevier databases, private academic reading cabins, and a dedicated digital learning hub with seating for over 1,500 scholars.",
    imageUrl: libraryImg,
    features: ["RFID Self Check-in", "24/7 Scholars Reading Room", "Digital Audio Archives", "Rare Manuscripts Vault"]
  },
  {
    id: "research_labs",
    name: "Advanced Central Instrumentation Laboratory (CIL)",
    category: "Academic",
    description: "Providing world-class investigative tools including scanning electron microscopes (SEM), high-pressure liquid chromatography (HPLC), and advanced DNA sequencer suites supporting multi-disciplinary research initiatives.",
    imageUrl: researchComplexImg,
    features: ["Scanning Electron Microscope", "Nuclear Magnetic Resonance (NMR)", "99.9% Clean Room Protocol", "Global Patent Support Cell"]
  },
  {
    id: "sports_complex",
    name: "Dr. Y.S.R. Sports Arena & Olympic Track",
    category: "Athletics",
    description: "Widely regarded as Andhra Pradesh's premier sports facility, including an 8-lane IAAF-standard synthetic track, indoor badminton complex, Olympic swimming pool, and custom-outfitted physiological rehabilitation chambers.",
    imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800",
    features: ["8-lane Synthetic Athletic Track", "Indoor Air-Conditioned Arena", "Olympic Sized Swimming Pool", "Expert Sports Medicine Care"]
  },
  {
    id: "yoga_centre",
    name: "Acharya Nagarjuna International Yoga & Wellness Centre",
    category: "Culture",
    description: "Dedicated to holistic physical and mental healthcare. Conducting daily classical yoga classes, mindfulness workshops, and holistic psychological support under trained specialists.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    features: ["Scenic Lotus Pond Lounge", "Daily Vedic Hatha Yoga", "Mindfulness and Anti-Stress Retreats", "Holistic Psychotherapy Units"]
  },
  {
    id: "residential_hostel",
    name: "Elite International Students & Research Hostels",
    category: "Residential",
    description: "Premium safe lodging for domestic scholars and international students coming from 15+ nations. Equipped with fully air-conditioned rooms, multi-cuisine cafeterias, private high-speed fiber wi-fi, and strict 3-tier security.",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    features: ["All Single-Occupancy AC Suites", "Multi-continental Dining Halls", "Common Gymnasium and Study Lounges", "Dedicated 1 Gbps Fiber connection"]
  }
];
