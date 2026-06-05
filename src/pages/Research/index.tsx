import { useState } from 'react';
import { ChevronRight, FlaskConical, BookOpen, Award, ExternalLink, Mail, Phone, TrendingUp, Globe, Microscope, Cpu, Leaf, Scale } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'centres' | 'publications' | 'funding' | 'phd';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'centres', label: 'Research Centres' },
  { id: 'publications', label: 'Publications' },
  { id: 'funding', label: 'Grants & Funding' },
  { id: 'phd', label: 'PhD Admissions' },
];

const researchStats = [
  { value: '3,200+', label: 'Research Publications', sub: 'In peer-reviewed journals' },
  { value: '₹48 Cr', label: 'Research Funding', sub: 'Active grants (2024–25)' },
  { value: '1,100+', label: 'PhD Scholars', sub: 'Currently enrolled' },
  { value: '62', label: 'Research Centres', sub: 'Across all disciplines' },
];

const focusAreas = [
  {
    icon: Microscope,
    title: 'Life Sciences & Biotechnology',
    desc: 'Cutting-edge research in drug discovery, genomics, marine biology, and agricultural biotechnology with DST, DBT, and ICMR funding.',
    tags: ['Drug Discovery', 'Genomics', 'Marine Biology', 'Agri-Biotech'],
  },
  {
    icon: Cpu,
    title: 'AI, Data Science & Computing',
    desc: 'Research in machine learning, NLP, computer vision, cybersecurity, and IoT applications in healthcare, agriculture, and smart cities.',
    tags: ['Machine Learning', 'NLP', 'IoT', 'Cybersecurity'],
  },
  {
    icon: FlaskConical,
    title: 'Chemistry & Pharmaceutical Sciences',
    desc: 'Novel synthesis, formulation science, nanomedicine, and marine natural products research. Multiple patents filed and licensed.',
    tags: ['Nanomedicine', 'Drug Formulation', 'Natural Products', 'Patents'],
  },
  {
    icon: Leaf,
    title: 'Environmental & Agricultural Sciences',
    desc: 'Sustainable agriculture, water resource management, coastal ecosystem restoration, and climate-resilient crop development.',
    tags: ['Sustainable Agriculture', 'Water Resources', 'Coastal Ecology', 'Climate'],
  },
  {
    icon: TrendingUp,
    title: 'Economics & Social Sciences',
    desc: 'Applied research in rural development, microfinance, public policy, gender studies, and emerging economies in South Asia.',
    tags: ['Rural Development', 'Microfinance', 'Public Policy', 'Gender Studies'],
  },
  {
    icon: Scale,
    title: 'Law & Governance',
    desc: 'Research on constitutional law, cyber law, human rights, intellectual property, and environmental law with national policy impact.',
    tags: ['Constitutional Law', 'Cyber Law', 'Human Rights', 'IPR'],
  },
  {
    icon: Globe,
    title: 'Languages, Literature & Culture',
    desc: 'Telugu language and literature, Sanskrit texts, digital humanities, comparative literature, and oral history archiving.',
    tags: ['Telugu Studies', 'Sanskrit', 'Digital Humanities', 'Oral History'],
  },
  {
    icon: BookOpen,
    title: 'Education & Pedagogy',
    desc: 'Innovative teaching methodologies, e-learning, inclusive education, curriculum design, and teacher training effectiveness.',
    tags: ['e-Learning', 'Inclusive Education', 'Curriculum', 'Teacher Training'],
  },
];

const centres = [
  {
    name: 'Centre for AI & Data Science',
    dept: 'College of Engineering & Technology',
    established: '2026',
    focus: 'Artificial intelligence, machine learning, big data analytics, and intelligent systems for societal applications.',
    funding: 'AICTE, MeitY, Industry',
    faculty: 14,
    scholars: 48,
  },
  {
    name: 'Centre for Marine Biology & Aquaculture',
    dept: 'College of Science',
    established: '1998',
    focus: 'Marine biodiversity, coastal ecosystem management, aquaculture technology, and marine natural products.',
    funding: 'DST, DBT, CMFRI',
    faculty: 11,
    scholars: 36,
  },
  {
    name: 'Centre for Pharmaceutical Research',
    dept: 'College of Pharmaceutical Sciences',
    established: '2003',
    focus: 'Drug discovery, novel formulations, nanomedicine, herbal drug research, and clinical pharmacy.',
    funding: 'DST-SERB, CSIR, Industry',
    faculty: 18,
    scholars: 62,
  },
  {
    name: 'Centre for Environmental Studies',
    dept: 'College of Science',
    established: '2001',
    focus: 'Environmental impact assessment, pollution monitoring, water quality, climate change adaptation.',
    funding: 'MoEF, DST, NRDC',
    faculty: 9,
    scholars: 28,
  },
  {
    name: 'Centre for Telugu Language & Culture',
    dept: 'College of Arts',
    established: '1985',
    focus: 'Telugu literary history, manuscript digitisation, linguistic studies, and cultural heritage documentation.',
    funding: 'UGC, Sahitya Akademi, AP Govt',
    faculty: 12,
    scholars: 41,
  },
  {
    name: 'Centre for Advanced Mathematics',
    dept: 'College of Science',
    established: '1992',
    focus: 'Pure and applied mathematics, graph theory, cryptography, fluid dynamics, and computational mathematics.',
    funding: 'NBHM, DST, UGC',
    faculty: 10,
    scholars: 34,
  },
  {
    name: 'Centre for Rural Development Studies',
    dept: 'College of Arts & Social Sciences',
    established: '1997',
    focus: 'Rural economy, microfinance, SHG networks, agricultural extension, and panchayati raj governance.',
    funding: 'NABARD, UGC, NIRD',
    faculty: 8,
    scholars: 22,
  },
  {
    name: 'Centre for Biotechnology',
    dept: 'College of Science',
    established: '2000',
    focus: 'Plant biotechnology, molecular biology, bioinformatics, and genomics for crop improvement and disease resistance.',
    funding: 'DBT, ICAR, DST',
    faculty: 13,
    scholars: 55,
  },
];

const publications = [
  {
    title: 'Mangrove Restoration Using Drone-Seeding Technology in Krishna Delta Ecosystems',
    authors: 'Rao, P.V.N., Sharma, K., & Devi, L.',
    journal: 'Nature Sustainability',
    year: '2026',
    impact: '27.6',
    doi: '#',
    dept: 'Environmental Sciences',
  },
  {
    title: 'Novel Anti-Cancer Compounds from Marine Sponges of Bay of Bengal: Synthesis and Bioactivity',
    authors: 'Reddy, B.S., Kumar, A., & Naidu, V.R.',
    journal: 'Journal of Medicinal Chemistry',
    year: '2025',
    impact: '7.9',
    doi: '#',
    dept: 'Pharmaceutical Sciences',
  },
  {
    title: 'Deep Learning Approaches for Early Detection of Diabetic Retinopathy in Rural Populations',
    authors: 'Prasad, R.K., Lakshmi, M., & Sai, C.',
    journal: 'IEEE Transactions on Medical Imaging',
    year: '2025',
    impact: '10.7',
    doi: '#',
    dept: 'Computer Science & AI',
  },
  {
    title: 'Microfinance and Women Empowerment: Evidence from Self-Help Groups in Andhra Pradesh',
    authors: 'Rao, S.N. & Babu, P.R.',
    journal: 'World Development',
    year: '2025',
    impact: '5.4',
    doi: '#',
    dept: 'Economics',
  },
  {
    title: 'Constitutional Validity of Data Protection Legislation: A Comparative Study of India, EU and USA',
    authors: 'Murthy, V.S. & Reddy, P.',
    journal: 'Oxford Journal of Legal Studies',
    year: '2025',
    impact: '3.8',
    doi: '#',
    dept: 'Law',
  },
  {
    title: 'Climate-Resilient Rice Varieties Through CRISPR-Based Gene Editing: Field Trials in Coastal AP',
    authors: 'Devi, S.K., Rao, G.V., & Kumar, M.',
    journal: 'Plant Cell',
    year: '2024',
    impact: '8.1',
    doi: '#',
    dept: 'Biotechnology',
  },
  {
    title: 'Graph-Theoretic Approaches to Network Vulnerability Analysis in Critical Infrastructure',
    authors: 'Narasimha, P. & Srinivas, T.',
    journal: 'Discrete Mathematics',
    year: '2024',
    impact: '1.5',
    doi: '#',
    dept: 'Mathematics',
  },
  {
    title: 'Nanoparticle Drug Delivery Systems for Targeted Chemotherapy: In Vivo Efficacy Studies',
    authors: 'Babu, K.R., Sharma, N., & Reddy, S.',
    journal: 'Advanced Drug Delivery Reviews',
    year: '2024',
    impact: '17.6',
    doi: '#',
    dept: 'Pharmaceutical Sciences',
  },
];

const grants = [
  {
    title: 'AI-Assisted Early Warning System for Coastal Flood Management',
    agency: 'DST – Science & Engineering Research Board',
    amount: '₹3.8 Crore',
    duration: '2024–2027',
    pi: 'Prof. R.K. Prasad, Dept. of CS',
    status: 'Active',
  },
  {
    title: 'Novel Drug Discovery from Marine Sources for Anti-TB Therapy',
    agency: 'Department of Biotechnology (DBT)',
    amount: '₹2.5 Crore',
    duration: '2023–2026',
    pi: 'Prof. B.S. Reddy, Dept. of Pharmacy',
    status: 'Active',
  },
  {
    title: 'CRISPR Engineering of Drought-Resistant Crops in Andhra Pradesh',
    agency: 'ICAR – Indian Council of Agricultural Research',
    amount: '₹1.9 Crore',
    duration: '2024–2027',
    pi: 'Dr. S.K. Devi, Dept. of Biotechnology',
    status: 'Active',
  },
  {
    title: 'Centre of Excellence in Telugu Digital Humanities',
    agency: 'UGC – University Grants Commission',
    amount: '₹1.2 Crore',
    duration: '2023–2025',
    pi: 'Prof. K.V. Rao, Dept. of Telugu',
    status: 'Active',
  },
  {
    title: 'Microfinance Impact Assessment in Post-COVID Rural Andhra',
    agency: 'NABARD – National Bank for Agriculture and Rural Development',
    amount: '₹85 Lakh',
    duration: '2024–2026',
    pi: 'Dr. S.N. Rao, Dept. of Economics',
    status: 'Active',
  },
  {
    title: 'Smart Grid Optimisation Using Hybrid Renewable Energy Models',
    agency: 'Ministry of New & Renewable Energy (MNRE)',
    amount: '₹2.1 Crore',
    duration: '2022–2025',
    pi: 'Prof. T. Srinivasa, Dept. of EEE',
    status: 'Concluding',
  },
  {
    title: 'Water Quality Monitoring in Krishna River Basin Using IoT Sensors',
    agency: 'Ministry of Jal Shakti',
    amount: '₹1.4 Crore',
    duration: '2023–2026',
    pi: 'Dr. L. Naidu, Dept. of Environmental Sciences',
    status: 'Active',
  },
  {
    title: 'Cybersecurity Frameworks for Indian BFSI Sector Post-Digital India',
    agency: 'MeitY – Ministry of Electronics & IT',
    amount: '₹90 Lakh',
    duration: '2024–2026',
    pi: 'Prof. P. Murthy, Dept. of CS',
    status: 'Active',
  },
];

const phdDepts = [
  { dept: 'Computer Science & AI', seats: 20, mode: 'Full-time / Part-time', specialisations: 'AI, ML, Cybersecurity, Networks, Data Science' },
  { dept: 'Pharmaceutical Sciences', seats: 18, mode: 'Full-time', specialisations: 'Drug Discovery, Pharmacology, Formulation, Nanomedicine' },
  { dept: 'Biotechnology', seats: 16, mode: 'Full-time', specialisations: 'Genomics, CRISPR, Plant Biotech, Bioinformatics' },
  { dept: 'Chemistry', seats: 14, mode: 'Full-time / Part-time', specialisations: 'Organic, Inorganic, Analytical, Physical Chemistry' },
  { dept: 'Economics', seats: 12, mode: 'Full-time / Part-time', specialisations: 'Rural Economics, Econometrics, Finance, Development' },
  { dept: 'Mathematics', seats: 12, mode: 'Full-time', specialisations: 'Graph Theory, Cryptography, Fluid Dynamics, Number Theory' },
  { dept: 'Environmental Sciences', seats: 10, mode: 'Full-time', specialisations: 'Ecology, Water Resources, Climate, Pollution' },
  { dept: 'Telugu & Linguistics', seats: 10, mode: 'Full-time / Part-time', specialisations: 'Literature, Language, Manuscript Studies, Folklore' },
  { dept: 'Law', seats: 8, mode: 'Part-time', specialisations: 'Constitutional, Cyber, IPR, Environmental, Human Rights' },
  { dept: 'Commerce & Management', seats: 10, mode: 'Full-time / Part-time', specialisations: 'Finance, HRM, Marketing, Entrepreneurship' },
];

export default function Research() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section id="research-header" className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold/70 uppercase tracking-widest mb-3">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-gold">Research</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Research &amp; Innovation</h1>
          <p className="mt-2 text-gray-300 text-sm max-w-xl">
            Driving discovery across disciplines — from marine biology to artificial intelligence, environmental science to law.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <section id="research-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {researchStats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-sm p-6 text-center hover:shadow-md hover:border-gold/30 transition-all">
                <div className="text-3xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Research at ANU</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Acharya Nagarjuna University has built a vibrant research ecosystem spanning natural sciences,
                technology, social sciences, law, and humanities. With 62 dedicated research centres and over
                1,100 enrolled PhD scholars, ANU is one of the most research-intensive universities in South India.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our researchers collaborate with national institutions like IITs, ICAR, CSIR, and ICMR, as well as
                international universities in the USA, UK, Japan, Germany, and Australia. This global network
                amplifies the reach and impact of our work.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                In 2024–25, ANU researchers published over 600 papers in peer-reviewed journals with a combined
                impact factor exceeding 1,200. Active research grants total over ₹48 crore from agencies including
                DST, DBT, UGC, ICAR, MeitY, and industry partners.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-navy mb-4">Research Highlights 2024–25</h2>
              {[
                { label: 'Peer-reviewed Journal Publications', value: '620+', color: 'bg-navy' },
                { label: 'Conference Papers', value: '380+', color: 'bg-gold' },
                { label: 'Patents Filed', value: '28', color: 'bg-purple-600' },
                { label: 'Patents Granted', value: '11', color: 'bg-green-600' },
                { label: 'PhD Degrees Awarded', value: '186', color: 'bg-blue-600' },
                { label: 'International Collaborations', value: '34 universities', color: 'bg-pink-600' },
                { label: 'Consultancy Projects', value: '42', color: 'bg-orange-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-white border border-gray-200 rounded-sm px-5 py-3 hover:border-gold/30 transition-colors">
                  <div className={cn('w-2 h-8 rounded-full flex-shrink-0', item.color)} />
                  <span className="text-sm text-gray-600 flex-1">{item.label}</span>
                  <span className="text-sm font-bold text-navy">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6">Research Focus Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map(({ icon: Icon, title, desc, tags }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-sm p-5 hover:shadow-md hover:border-gold/30 transition-all group">
                  <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-3 group-hover:bg-navy group-hover:text-white transition-colors">
                    <Icon size={18} className="text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-2 leading-snug group-hover:text-gold transition-colors">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CENTRES TAB */}
      {activeTab === 'centres' && (
        <section id="research-centres" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-navy mb-1">Research Centres &amp; Institutes</h2>
              <p className="text-sm text-gray-500">Showing 8 of 62 active research centres. Contact the Research Division for a full list.</p>
            </div>
          </div>
          <div className="grid gap-5">
            {centres.map((c) => (
              <div key={c.name} className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:border-gold/30 transition-all">
                <div className="flex">
                  <div className="w-1.5 bg-gold flex-shrink-0" />
                  <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-navy mb-0.5">{c.name}</h3>
                        <p className="text-xs text-gray-400">{c.dept} · Est. {c.established}</p>
                      </div>
                      <div className="flex gap-4 flex-shrink-0 text-center">
                        <div className="bg-navy/5 rounded-sm px-4 py-2">
                          <div className="text-lg font-bold text-navy">{c.faculty}</div>
                          <div className="text-[10px] text-gray-400 uppercase tracking-widest">Faculty</div>
                        </div>
                        <div className="bg-gold/10 rounded-sm px-4 py-2">
                          <div className="text-lg font-bold text-gold">{c.scholars}</div>
                          <div className="text-[10px] text-gray-400 uppercase tracking-widest">Scholars</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{c.focus}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Award size={12} className="text-gold" />
                      <span><span className="font-semibold text-gray-600">Funding:</span> {c.funding}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PUBLICATIONS TAB */}
      {activeTab === 'publications' && (
        <section id="research-publications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-navy mb-1">Selected Publications</h2>
              <p className="text-sm text-gray-500">Recent high-impact research from ANU faculty and scholars.</p>
            </div>
          </div>
          <div className="grid gap-4 mb-8">
            {publications.map((pub, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 hover:shadow-sm hover:border-gold/40 transition-all group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-navy leading-snug flex-1 group-hover:text-gold transition-colors">
                        {pub.title}
                      </h4>
                      <a href={pub.doi} className="flex-shrink-0 flex items-center gap-1 text-xs text-gray-400 hover:text-gold transition-colors">
                        <ExternalLink size={12} />
                        DOI
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 italic">{pub.authors}</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-navy font-semibold">
                        <BookOpen size={11} />
                        {pub.journal}
                      </span>
                      <span className="text-gray-400">{pub.year}</span>
                      <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded-sm font-semibold">
                        IF: {pub.impact}
                      </span>
                      <span className="bg-navy/5 text-navy px-2 py-0.5 rounded-sm">
                        {pub.dept}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy text-white rounded-sm p-6 text-center">
            <p className="text-sm text-gray-300 mb-3">
              For the full publications database, visit the ANU Research Repository or contact the Research Division.
            </p>
            <a href="mailto:research@nagarjunauniversity.ac.in" className="inline-flex items-center gap-2 text-xs font-semibold text-gold border border-gold/30 px-4 py-2 rounded-sm hover:bg-gold/10 transition-colors">
              <Mail size={13} />
              research@nagarjunauniversity.ac.in
            </a>
          </div>
        </section>
      )}

      {/* FUNDING TAB */}
      {activeTab === 'funding' && (
        <section id="research-funding" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-navy mb-1">Research Grants &amp; Funding</h2>
            <p className="text-sm text-gray-500">Currently active and recently concluded externally-funded projects.</p>
          </div>

          {/* Summary band */}
          <div className="bg-navy text-white rounded-sm p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '₹48 Cr', label: 'Total Active Funding' },
              { value: '38', label: 'Active Projects' },
              { value: '15+', label: 'Funding Agencies' },
              { value: '₹8.2 Cr', label: 'New Grants 2024–25' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gold mb-1">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {grants.map((g, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 hover:shadow-sm hover:border-gold/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={cn(
                        'text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm',
                        g.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                      )}>
                        {g.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-navy mb-1 leading-snug">{g.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">PI: {g.pi}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Award size={11} className="text-gold" />
                      {g.agency}
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-4 sm:gap-2 flex-shrink-0 text-right">
                    <div>
                      <div className="text-base font-bold text-navy">{g.amount}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest">Grant Amount</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-600">{g.duration}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest">Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PhD TAB */}
      {activeTab === 'phd' && (
        <section id="research-phd" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Departments Table */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-navy mb-6">PhD Programme — 2026–27</h2>
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest">Department</th>
                      <th className="px-5 py-3 text-center text-xs font-bold uppercase tracking-widest">Seats</th>
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest hidden sm:table-cell">Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {phdDepts.map((d, i) => (
                      <tr key={d.dept} className={cn('hover:bg-gold/5 transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}>
                        <td className="px-5 py-3">
                          <div className="font-semibold text-navy text-sm">{d.dept}</div>
                          <div className="text-xs text-gray-400 mt-0.5 hidden sm:block">{d.specialisations}</div>
                        </td>
                        <td className="px-5 py-3 text-center font-bold text-navy">{d.seats}</td>
                        <td className="px-5 py-3 text-xs text-gray-500 hidden sm:table-cell">{d.mode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400">
                * Seats are indicative. Final allotment is based on ANURET scores, interview, and research proposal evaluation. PhD programmes are available in 48 departments total.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Eligibility */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Eligibility</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    'Master\'s degree in relevant discipline with min. 55% marks (50% for SC/ST)',
                    'UGC-NET / CSIR-NET / GATE / SET qualified candidates get direct interview',
                    'All others must qualify ANURET (ANU Research Entrance Test)',
                    'Working professionals may apply for Part-time PhD with employer NOC',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <ChevronRight size={12} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Selection Process</h3>
                <ol className="space-y-3 text-xs text-gray-600">
                  {[
                    'Online application submission',
                    'ANURET written test (if applicable)',
                    'Research proposal submission',
                    'Interview with Doctoral Committee',
                    'Allotment of supervisor',
                    'Provisional enrollment',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Key Dates */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Key Dates 2026–27</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { event: 'Applications Open', date: '01 May 2026' },
                    { event: 'Last Date to Apply', date: '10 Jun 2026' },
                    { event: 'ANURET Exam', date: '22 Jun 2026' },
                    { event: 'Results', date: '05 Jul 2026' },
                    { event: 'Interviews', date: '14–18 Jul 2026' },
                    { event: 'Enrollment Begins', date: '01 Aug 2026' },
                  ].map((item) => (
                    <div key={item.event} className="flex justify-between">
                      <span className="text-gray-500">{item.event}</span>
                      <span className="font-semibold text-navy">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-navy text-white rounded-sm p-5">
                <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Research Division</h3>
                <a href="mailto:research@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold transition-colors mb-2">
                  <Mail size={12} />
                  research@nagarjunauniversity.ac.in
                </a>
                <a href="tel:+918632346010" className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold transition-colors">
                  <Phone size={12} />
                  +91 863 234 6010
                </a>
                <p className="text-xs text-gray-500 mt-3">Mon–Sat, 10am–5pm</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
