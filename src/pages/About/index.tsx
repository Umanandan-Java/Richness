import { useState } from 'react';
import { ChevronRight, Award, BookOpen, FlaskConical, Users, Mail, Phone, Quote } from 'lucide-react';
import { Link } from '../../components/PortalLink';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'history' | 'vision' | 'leadership' | 'administration';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'history', label: 'History & Legacy' },
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'leadership', label: 'VC\'s Message' },
  { id: 'administration', label: 'Administration' },
];

const milestones = [
  { year: '1976', title: 'University Established', desc: 'Acharya Nagarjuna University was founded by the Government of Andhra Pradesh, named after the great Buddhist philosopher Acharya Nagarjuna.' },
  { year: '1982', title: 'First PG Programmes', desc: 'Launch of postgraduate programmes in Sciences, Arts and Commerce, attracting students from across Andhra Pradesh.' },
  { year: '1990', title: 'Engineering College', desc: 'Establishment of the College of Engineering & Technology, marking ANU\'s entry into technical education.' },
  { year: '1998', title: 'Research Recognition', desc: 'UGC conferred the status of University with Potential for Excellence (UPE), recognising outstanding research output.' },
  { year: '2005', title: 'NAAC Accreditation', desc: 'First NAAC accreditation awarded, establishing ANU as one of the premier universities in South India.' },
  { year: '2012', title: 'International Collaborations', desc: 'MoUs signed with universities in the USA, UK, Australia and Japan for student exchange and joint research.' },
  { year: '2018', title: 'NAAC A+ Reaccreditation', desc: 'Reaccredited by NAAC with an A+ grade and a score of 3.26, the highest in the university\'s history.' },
  { year: '2026', title: 'Golden Jubilee', desc: 'Celebrating 50 years of academic excellence, research leadership and nation-building — 1976 to 2026.' },
];

const values = [
  { icon: BookOpen, title: 'Academic Excellence', desc: 'Unwavering commitment to the highest standards of teaching, learning and scholarship across all disciplines.' },
  { icon: FlaskConical, title: 'Research & Innovation', desc: 'Fostering a culture of inquiry, discovery and innovation that addresses real-world challenges.' },
  { icon: Users, title: 'Inclusivity', desc: 'Welcoming students from all backgrounds, communities and nations, ensuring equal opportunity for all.' },
  { icon: Award, title: 'Integrity', desc: 'Upholding ethical conduct, transparency and accountability in all academic and administrative functions.' },
];

const administration = [
  {
    role: 'Chancellor',
    name: 'His Excellency S. Abdul Nazeer',
    note: 'Governor of Andhra Pradesh',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'chancellor@nagarjunauniversity.ac.in',
  },
  {
    role: 'Vice-Chancellor',
    name: 'Prof. Dr. K. Subrahmanyam',
    note: 'Vice-Chancellor, Acharya Nagarjuna University',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'vc@nagarjunauniversity.ac.in',
  },
  {
    role: 'Registrar',
    name: 'Prof. Dr. P. Rajendra Prasad',
    note: 'Registrar, Acharya Nagarjuna University',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'registrar@nagarjunauniversity.ac.in',
  },
  {
    role: 'Controller of Examinations',
    name: 'Prof. Dr. V. Rama Devi',
    note: 'Controller of Examinations',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'coe@nagarjunauniversity.ac.in',
  },
  {
    role: 'Finance Officer',
    name: 'Sri. M. Srinivasa Rao',
    note: 'Finance Officer',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'finance@nagarjunauniversity.ac.in',
  },
  {
    role: 'Director, Academic Affairs',
    name: 'Prof. Dr. B. Nageswara Rao',
    note: 'Director, Academic Affairs',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    email: 'academics@nagarjunauniversity.ac.in',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section id="hero" className="bg-navy text-white pt-16 pb-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white -translate-x-32 translate-y-32" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            <span>Home</span>
            <ChevronRight size={13} />
            <span>About ANU</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              About Acharya<br />Nagarjuna University
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              A premier institution of higher learning in Andhra Pradesh, dedicated to excellence in education, research and service to society — since 1976.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { value: '50', label: 'Years of Excellence', suffix: '+' },
                { value: '20,000', label: 'Students', suffix: '+' },
                { value: '800', label: 'Faculty Members', suffix: '+' },
                { value: '70', label: 'Departments', suffix: '+' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-gold">{s.value}<span className="text-xl">{s.suffix}</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap',
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 hover:text-navy'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-16">

            {/* Intro */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">Est. 1976 · NAAC A+</span>
                <h2 className="font-serif text-4xl text-navy mb-6 leading-snug">
                  A University Built on the Legacy of a Philosopher
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Acharya Nagarjuna University is named after the great 2nd-century Buddhist philosopher and logician Acharya Nagarjuna, who was born and flourished in this very region of Andhra Pradesh. His philosophy of the "Middle Way" — seeking truth through reason, inquiry and compassion — forms the spiritual foundation of this institution.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Established in 1976 by the Government of Andhra Pradesh, the university has grown from a small institution into one of the most comprehensive universities in South India. Spread across 650 acres of serene campus in Nagarjuna Nagar, Guntur, ANU today serves over 20,000 students across 70+ departments and 8 colleges.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Accredited with NAAC A+ grade and a score of 3.26, the university is recognised by UGC, AICTE, BCI, PCI and other national regulatory bodies. ANU has been conferred the status of University with Potential for Excellence (UPE) by the UGC.
                </p>
                <Link to="/colleges" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
                  Explore Our Colleges <ChevronRight size={15} />
                </Link>
              </div>

              <div className="relative">
                <img
                  src="https://cdn.wegic.ai/assets/onepage/agent/images/1779004000666_0.jpg"
                  alt="ANU Campus"
                  className="w-full h-80 object-cover rounded-sm shadow-lg"
                  loading="lazy"
                />
                {/* Golden Jubilee badge */}
                <div className="absolute -bottom-5 -left-5 bg-gold text-white rounded-sm px-5 py-4 shadow-xl">
                  <p className="text-3xl font-bold leading-none">50</p>
                  <p className="text-xs font-bold uppercase tracking-wider mt-1">Years · 1976–2026</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">What We Stand For</span>
                <h2 className="font-serif text-3xl text-navy">Our Core Values</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {values.map((v, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-6 hover:border-gold hover:shadow-md transition-all group text-center">
                    <div className="w-12 h-12 rounded-sm bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                      <v.icon size={22} className="text-navy group-hover:text-gold transition-colors" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-semibold text-navy mb-2">{v.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-navy rounded-sm overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
                {[
                  { value: '650', suffix: ' acres', label: 'Campus Area' },
                  { value: '8', suffix: '', label: 'Colleges & Schools' },
                  { value: '2,50,000', suffix: '+', label: 'Library Books' },
                  { value: '3.26', suffix: '', label: 'NAAC Score' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center px-8 py-10">
                    <p className="text-4xl font-bold text-gold">{stat.value}<span className="text-2xl">{stat.suffix}</span></p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* History & Legacy */}
        {activeTab === 'history' && (
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">Five Decades of Excellence</span>
            <h2 className="font-serif text-4xl text-navy mb-4">History & Legacy</h2>
            <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
              From a modest beginning in 1976 to becoming one of South India's most respected universities — a journey shaped by vision, dedication and the pursuit of knowledge.
            </p>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-24 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-8 group">
                    {/* Year */}
                    <div className="w-20 flex-shrink-0 text-right pt-6 hidden sm:block">
                      <span className="text-sm font-bold text-gold">{m.year}</span>
                    </div>
                    {/* Dot */}
                    <div className="relative flex-shrink-0 hidden sm:flex items-start pt-7">
                      <div className={cn(
                        'w-3 h-3 rounded-full border-2 border-gold transition-colors',
                        i === milestones.length - 1 ? 'bg-gold' : 'bg-white group-hover:bg-gold'
                      )} />
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-10 sm:pl-4">
                      <span className="text-xs font-bold text-gold sm:hidden mb-1 block">{m.year}</span>
                      <div className="bg-white border border-gray-100 rounded-sm p-5 group-hover:border-gold group-hover:shadow-sm transition-all">
                        <h3 className="font-semibold text-navy mb-1">{m.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vision & Mission */}
        {activeTab === 'vision' && (
          <div className="max-w-4xl space-y-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-navy text-white rounded-sm p-8">
                <div className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center mb-5">
                  <Award size={20} className="text-gold" />
                </div>
                <h2 className="font-serif text-3xl font-bold mb-5">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  To be a globally recognised, research-intensive university that fosters intellectual growth, innovation, and social responsibility — creating graduates who are not only skilled professionals but also compassionate, ethical leaders committed to the betterment of society.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center mb-5">
                  <BookOpen size={20} className="text-gold" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-navy mb-5">Our Mission</h2>
                <ul className="space-y-3">
                  {[
                    'Provide high-quality, accessible education to students from all socio-economic backgrounds.',
                    'Advance knowledge through cutting-edge research and promote its application for societal benefit.',
                    'Cultivate critical thinking, creativity and a spirit of lifelong learning in every student.',
                    'Foster industry partnerships and international collaborations that enrich academic experience.',
                    'Uphold the values of integrity, inclusivity, and environmental responsibility in all endeavours.',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <ChevronRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Objectives */}
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Strategic Objectives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Academic Advancement', points: ['Continuous curriculum modernisation aligned with industry needs', 'Promoting interdisciplinary and experiential learning', 'Expanding online and distance education programmes'] },
                  { title: 'Research Excellence', points: ['Increasing funded research projects and patents', 'Establishing world-class research centres', 'Publishing high-impact research in indexed journals'] },
                  { title: 'Global Engagement', points: ['Expanding international student enrolment', 'Strengthening MoUs with global universities', 'Facilitating faculty and student exchange programmes'] },
                  { title: 'Community Impact', points: ['Driving rural development through extension activities', 'Supporting first-generation learners with scholarships', 'Engaging alumni for institutional development'] },
                ].map((obj, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-6">
                    <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      {obj.title}
                    </h3>
                    <ul className="space-y-2">
                      {obj.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VC's Message */}
        {activeTab === 'leadership' && (
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">A Word From</span>
            <h2 className="font-serif text-4xl text-navy mb-10">Vice-Chancellor's Message</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-10">
              {/* VC Photo & Details */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm sticky top-0">
                  <img
                    src="https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp"
                    alt="Vice-Chancellor"
                    className="w-full aspect-square object-cover object-top"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-navy">Prof. Dr. K. Subrahmanyam</h3>
                    <p className="text-sm text-gold font-semibold mt-0.5">Vice-Chancellor</p>
                    <p className="text-xs text-gray-500 mt-1">Acharya Nagarjuna University</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                      <a href="mailto:vc@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-xs text-gray-600 hover:text-gold transition-colors">
                        <Mail size={12} className="text-gold" /> vc@nagarjunauniversity.ac.in
                      </a>
                      <a href="tel:+918632346001" className="flex items-center gap-2 text-xs text-gray-600 hover:text-gold transition-colors">
                        <Phone size={12} className="text-gold" /> +91-863-234-6001
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-2 space-y-5">
                <div className="relative">
                  <Quote size={48} className="text-gold/20 absolute -top-2 -left-2" />
                  <p className="text-lg font-serif text-navy leading-relaxed pl-4 italic">
                    "Education is not merely the acquisition of knowledge — it is the transformation of the human spirit."
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>
                    Dear Students, Faculty, Staff and Well-wishers,
                  </p>
                  <p>
                    It is with immense pride and a deep sense of purpose that I welcome you to Acharya Nagarjuna University — an institution that has, for five decades, stood as a beacon of academic excellence, social commitment and intellectual vitality in Andhra Pradesh.
                  </p>
                  <p>
                    Named after the great philosopher-saint Acharya Nagarjuna, our university carries forward a legacy of rigorous inquiry, compassionate thought and transformative education. Nagarjuna's philosophy of the Middle Way — the pursuit of truth through reason, without extremes — continues to inspire our academic ethos every day.
                  </p>
                  <p>
                    In the past year, our university has made remarkable strides. Our research output has grown significantly, with faculty and students publishing in high-impact journals and filing patents. Our international collaborations have deepened, with new MoUs signed with partner universities across the globe. Our students continue to excel — in classrooms, laboratories, sports arenas and beyond.
                  </p>
                  <p>
                    As we celebrate our Golden Jubilee — 50 years of shaping minds and building futures — I invite every member of the ANU community to reflect on this proud legacy and look forward with renewed energy and ambition. The challenges of the 21st century demand graduates who are not just technically proficient, but curious, adaptable and ethically grounded.
                  </p>
                  <p>
                    That is precisely the kind of education we are committed to providing. The journey ahead is full of opportunity — and I have every confidence that together, we will make the next 50 years even more remarkable than the last.
                  </p>
                  <p className="font-medium text-navy">
                    With warm regards and best wishes,
                  </p>
                  <div>
                    <p className="font-bold text-navy font-serif text-lg">Prof. Dr. K. Subrahmanyam</p>
                    <p className="text-sm text-gold font-semibold">Vice-Chancellor, Acharya Nagarjuna University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chancellor's Message */}
            <div className="bg-navy text-white rounded-sm p-8 mt-12">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">Chancellor's Message</span>
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-1">
                  <img
                    src="https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp"
                    alt="Chancellor"
                    className="w-24 h-24 object-cover rounded-sm"
                    loading="lazy"
                  />
                  <h3 className="font-serif text-base font-bold mt-3">His Excellency</h3>
                  <h3 className="font-serif text-base font-bold">S. Abdul Nazeer</h3>
                  <p className="text-xs text-gold mt-1">Chancellor, ANU</p>
                  <p className="text-xs text-gray-400">Governor of Andhra Pradesh</p>
                </div>
                <div className="lg:col-span-3 space-y-4 text-gray-300 text-sm leading-relaxed">
                  <Quote size={32} className="text-gold/30" />
                  <p>
                    Acharya Nagarjuna University represents the finest traditions of Indian higher education — combining intellectual rigour with social purpose. I am heartened by the university's commitment to providing quality education to students from all walks of life.
                  </p>
                  <p>
                    As we mark 50 years of this great institution, I urge the university community to continue pursuing excellence, innovation and inclusivity with the same passion and dedication that has defined ANU through the decades. May this Golden Jubilee be a moment not just of celebration, but of renewed resolve to serve society through the power of knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Administration */}
        {activeTab === 'administration' && (
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">Leadership Team</span>
            <h2 className="font-serif text-4xl text-navy mb-4">University Administration</h2>
            <p className="text-gray-500 text-sm mb-10 max-w-xl">
              ANU is led by a distinguished team of academics and administrators committed to advancing the university's mission.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {administration.map((person, i) => (
                <div key={i} className={cn(
                  'bg-white border rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-gold transition-all group',
                  i === 0 && 'border-gold/40',
                  i !== 0 && 'border-gray-100'
                )}>
                  <div className="relative">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-52 object-cover object-top"
                      loading="lazy"
                    />
                    {i === 0 && (
                      <div className="absolute top-3 right-3 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                        Chancellor
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{person.role}</p>
                    <h3 className="font-serif text-base font-bold text-navy leading-snug">{person.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 mb-4">{person.note}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-gold transition-colors"
                    >
                      <Mail size={12} className="text-gold flex-shrink-0" />
                      {person.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Statutory Bodies */}
            <div className="mt-16">
              <h3 className="font-serif text-2xl text-navy mb-6">Statutory Bodies</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Academic Senate', desc: 'The highest academic body, responsible for academic policies, curriculum and examinations.' },
                  { title: 'Executive Council', desc: 'The principal executive body governing university administration and finance.' },
                  { title: 'Finance Committee', desc: 'Oversees the financial planning, budgeting and audit of the university.' },
                  { title: 'Board of Studies', desc: 'Subject-specific bodies that design and review curricula for each discipline.' },
                  { title: 'Planning Board', desc: 'Guides long-term strategic development and resource allocation.' },
                  { title: 'Selection Committee', desc: 'Responsible for faculty appointments and promotions across all departments.' },
                ].map((body, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-5 hover:border-gold transition-colors">
                    <h4 className="font-semibold text-navy mb-2 text-sm">{body.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{body.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
