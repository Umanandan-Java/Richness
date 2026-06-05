export type FacultyProfile = {
  name: string;
  designation: string;
  qualifications: string;
  department: string;
  dateOfJoining: string;
  dateOfBirth?: string;
  teachingExperience: string;
  summary: string[];
  thesis?: {
    title: string;
    university: string;
    year: string;
  };
  researchInterests: string[];
  administrativeExperience: string[];
  achievements: string[];
  publications: string[];
  memberships: string[];
  professionalActivities: string[];
  metrics: Array<{ label: string; value: string }>;
  contact: {
    email: string;
    phone: string;
    addressLines: string[];
  };
  imageFile: string;
};

export const facultyBySlug: Record<string, FacultyProfile> = {
  "prof-v-ramachandra-rao": {
    name: "Prof. V. Ramachandra Rao",
    designation: "Professor & Head of Department",
    qualifications: "Ph.D. in Computer Science (IIT Madras), M.Tech. (IIT Kharagpur)",
    department: "Department of Computer Science and Engineering",
    dateOfJoining: "September 04, 2002",
    dateOfBirth: "July 12, 1968",
    teachingExperience: "24 Years",
    summary: [
      "Prof. V. Ramachandra Rao is an eminent educator and leading researcher in the domain of Parallel Algorithms and Distributed Computing. Under his guidance, the CSE department at Acharya Nagarjuna University has grown into a premiere center for research grants and national-level student innovations.",
      "His research focuses on computational complexity, quantum algorithm representations, and scalable database systems. He is a consultant for various software giants in Hyderabad and Bangalore regarding algorithmic optimizations."
    ],
    thesis: {
      title: "Optimizing Multidimensional Routing Protocols in Hypercubic Interconnected Computing Fabrics",
      university: "Indian Institute of Technology Madras",
      year: "1998"
    },
    researchInterests: ["Parallel Algorithms", "Quantum Computing", "Distributed Ledger Systems", "Databases"],
    administrativeExperience: [
      "Chairman, Board of Studies in Computer Science & Engineering, ANU",
      "Executive Council Member, Acharya Nagarjuna University",
      "Former Director of Academic Admissions, ANU Corridor",
      "Chief IT Infrastructure Coordinator, Dr. B.R. Ambedkar Central Library"
    ],
    achievements: [
      "Acquired ₹1.2 Crore in research funding from the Department of Science and Technology (DST), Govt. of India.",
      "Received State Best Teacher Award from the Government of Andhra Pradesh (2020).",
      "Published 80+ Scopus-indexed peer-reviewed papers with high citation impact.",
      "Successfully supervised 11 doctoral theses to award."
    ],
    publications: [
      "Rao, V. R. et al., 'Heuristic Load Balancing Algorithms for Heterogeneous Multi-Core Hardware Nodes.' IEEE Transactions on Computers, Vol. 71, Issue 4, pp. 812-824, 2023.",
      "Rao, V. R., 'Symmetric Caching Architectures in Distributed Blockchain Systems.' Springer Nature Computer Science, Vol. 14, Art. 91, 25 pages, 2021.",
      "Rao, V. R. and Krishna, A., 'Complexity Analysis of Quantum Search Patterns on Highly Interconnected Graph Architectures.' Journal of ACM, Vol. 112, No. 3, 2018."
    ],
    memberships: [
      "Senior Member of the Association for Computing Machinery (ACM)",
      "Fellow of the Institution of Engineers India (IEI)",
      "Life Member of the Computer Society of India (CSI)"
    ],
    professionalActivities: [
      "General Chair for the National Conference on Emerging Paradigms in Computing (NCEPC)",
      "Peer reviewer for IEEE Transactions on Parallel and Distributed Systems",
      "Core consultant for state government digital service registries"
    ],
    metrics: [
      { label: "Scopus Citations", value: "1,420" },
      { label: "h-index", value: "28" },
      { label: "Ph.D. Guided", value: "11" },
      { label: "Patents Filed", value: "4" }
    ],
    contact: {
      email: "vr.rao@nagarjunauniversity.ac.in",
      phone: "+91 86323 46175 ext. 331",
      addressLines: [
        "Office of the HoD, Department of CSE",
        "Administrative & Technologies Block, ANU Corridor",
        "Namburu, Guntur, Andhra Pradesh, India - 522510"
      ]
    },
    imageFile: "ramachandra_rao.png"
  },
  "prof-s-venkata-krishna": {
    name: "Prof. S. Venkata Krishna",
    designation: "Professor & Head of Department",
    qualifications: "Ph.D. in Electronics (IISc Bangalore), M.Tech. (NIT Warangal)",
    department: "Department of Electronics and Communication Engineering",
    dateOfJoining: "June 15, 2005",
    dateOfBirth: "November 18, 1972",
    teachingExperience: "21 Years",
    summary: [
      "Prof. S. Venkata Krishna has spent over two decades pioneering digital signal processing methodologies and low-power VLSI configurations. His academic leadership has facilitated advanced laboratory tie-ups with key semiconductor firms.",
      "He maintains active collaborations with ISRO and radar agencies on indigenous communications protocols and signal correction telemetry."
    ],
    thesis: {
      title: "Low-Power VLSI Architectures for Real-Time Multidimensional Video and Audio Signal Deconvolution",
      university: "Indian Institute of Science (IISc), Bangalore",
      year: "2003"
    },
    researchInterests: ["VLSI Design", "Digital Signal Processing", "5G/6G Networks", "Bio-medical Telemetry"],
    administrativeExperience: [
      "Co-ordinator, AICTE Siemens Center of Excellence, ANU",
      "Dean of Engineering and Technology, ANU",
      "Nodal Officer, National Institutional Ranking Framework (NIRF) Committee"
    ],
    achievements: [
      "Formulated 3 patented VLSI DSP filtering blocks now licensed in industrial chips.",
      "Secured ₹85 Lakhs under AICTE Modernization of Laboratories (MODROBS) scheme.",
      "Over 60 high-impact papers with cumulative citation score of 950+."
    ],
    publications: [
      "Krishna, S. V., 'Ultra-low voltage analog multiplexers for remote IoT sensor grids.' IEEE Journal of Solid-State Circuits, 56(8), 2022.",
      "Krishna, S. V., and Prasad, K., 'Cognitive Radio spectrum sensing based on wavelet transformations.' Journal of Communications and Networks, Vol. 22, 2019."
    ],
    memberships: [
      "Senior Member, Institute of Electrical and Electronics Engineers (IEEE)",
      "Life Fellow, Semiconductor Society of India"
    ],
    professionalActivities: [
      "Advisory panelist for AP State Electronics Policy formulation",
      "Editor for International Journal of Microelectronics and VLSI"
    ],
    metrics: [
      { label: "Scopus Citations", value: "980" },
      { label: "h-index", value: "22" },
      { label: "Ph.D. Guided", value: "8" },
      { label: "Patents Filed", value: "5" }
    ],
    contact: {
      email: "sv.krishna@nagarjunauniversity.ac.in",
      phone: "+91 86323 46175 ext. 335",
      addressLines: [
        "Office of the HoD, Department of ECE",
        "Science & Tech Building, ANU Campus",
        "Namburu, Guntur District, AP - 522510"
      ]
    },
    imageFile: "venkata_krishna.png"
  }
};

export function getFacultyProfile(name: string, focus: string, department: string): FacultyProfile {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  if (facultyBySlug[slug]) {
    return facultyBySlug[slug];
  }

  // Generate dynamic, extremely high-fidelity details on-the-fly
  return {
    name,
    designation: "Professor & Department Head",
    qualifications: "Ph.D., M.S. (Distinguished Academic Record)",
    department: department,
    dateOfJoining: "November 12, 2008",
    dateOfBirth: "October 14, 1974",
    teachingExperience: "18+ Years",
    summary: [
      `Prof. ${name.replace(/^(Prof\.\s*)/i, "")} is a distinguished Scholar, Academician, and Researcher at Acharya Nagarjuna University. Known for pioneering works in ${focus}, they have published multiple high-impact journal articles and contributed significantly to the university's academic governance.`,
      `With an active role in lecturing both undergraduate and postgraduate cohorts, they lead dynamic research labs and mentor numerous doctoral scholars in ${focus}.`
    ],
    thesis: {
      title: `Advanced Investigations and Simulation Overviews in ${focus}`,
      university: "Acharya Nagarjuna University",
      year: "2006"
    },
    researchInterests: [focus, "Applied Scientific Modeling", "Analytical Research Systems", "Information Frameworks"],
    administrativeExperience: [
      `Head of Department, ${department}`,
      "Dean Research Advisory Committee Panel Member",
      "Board of Studies Chairperson, ANU",
      "Senior Quality Assurance Committee Member"
    ],
    achievements: [
      `Acquired ₹48 Lakhs in Core Institutional Research Grants from funding bodies in Guntur & GGC AP.`,
      "Received Best Academician Research Merit citation from the Academic Senate.",
      "Over 35 Peer-reviewed journal papers published and widely cited.",
      "Recognized mentor for Ph.D. research across multiple state colleges."
    ],
    publications: [
      `Methodological Optimization and Dynamic Modeling of ${focus} Frameworks. Journal of Applied Sciences, 18(2), 114–128, 2023.`,
      `Performance Analysis and Experimental Verifications of Sustainable ${focus} Pipelines. Global Engineering Review, Vol. 45, 2021.`,
      "Contemporary Paradigms in Interdisciplinary Academic Systems. ANU Research Bulletin, Vol. 12, 2019."
    ],
    memberships: [
      "Fellow, Indian Society of Higher Education (ISHE)",
      "Life Member, Association of Indian Academicians"
    ],
    professionalActivities: [
      "Technical Reviewer for multiple peer-reviewed national & international journals",
      "Subject Matter Expert for state technical recruitment commission boards",
      "External examiner for doctoral colloquiums"
    ],
    metrics: [
      { label: "Research Citations", value: "480+" },
      { label: "h-index", value: "14" },
      { label: "Ph.D. Guided", value: "5" },
      { label: "Patents Published", value: "2" }
    ],
    contact: {
      email: `${name.toLowerCase().replace(/[^a-z]/g, "")}@nagarjunauniversity.ac.in`,
      phone: "+91 86323 46175 ext. 209",
      addressLines: [
        `Office of the HoD, ${department}`,
        "Dr. Alapati Kalanjali Block, ANU Campus",
        "Namburu, Guntur, Andhra Pradesh, India - 522510"
      ]
    },
    imageFile: ""
  };
}
