import { useState } from 'react';
import { ChevronRight, Globe, FileText, Award, Users, Mail, Phone, MapPin, CheckCircle, Clock, Building2, BookOpen, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'admissions' | 'scholarships' | 'campus-life' | 'contact';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Why ANU' },
  { id: 'admissions', label: 'Admissions & Visa' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'campus-life', label: 'Life at ANU' },
  { id: 'contact', label: 'Contact & Support' },
];

const stats = [
  { value: '40+', label: 'Countries Represented', sub: 'Students on campus' },
  { value: '850+', label: 'International Students', sub: 'Currently enrolled' },
  { value: '34', label: 'Partner Universities', sub: 'Across 18 countries' },
  { value: '100%', label: 'English Instruction', sub: 'All programmes' },
];

const programs = [
  { level: 'Undergraduate', duration: '3–4 Years', examples: 'B.Sc., B.Com., B.A., B.Tech., B.Pharm., LLB', intake: 'July & January' },
  { level: 'Postgraduate', duration: '2 Years', examples: 'M.Sc., MBA, M.Tech., M.Pharm., LLM, M.A.', intake: 'July & January' },
  { level: 'PhD / Research', duration: '3–5 Years', examples: 'All departments — Sciences, Humanities, Law, Engineering', intake: 'July & January' },
  { level: 'Short Programmes', duration: '1–6 Months', examples: 'Language & Culture, Research Internships, Summer Schools', intake: 'Flexible' },
];

const visaSteps = [
  { step: '01', title: 'Receive Offer Letter', desc: 'Apply to ANU and receive a conditional or unconditional offer letter from the International Relations Office.' },
  { step: '02', title: 'Apply for Student Visa (X-1)', desc: 'Submit your visa application to the Indian Embassy or High Commission in your country with the offer letter, financial proof, and health documents.' },
  { step: '03', title: 'FRRO Registration', desc: 'Within 14 days of arrival in India, register with the Foreigners Regional Registration Office (FRRO). ANU\'s IRO will assist you.' },
  { step: '04', title: 'Campus Arrival & Orientation', desc: 'Attend the International Student Orientation programme held every July and January before classes begin.' },
  { step: '05', title: 'Enrolment', desc: 'Complete academic enrolment, collect your student ID, and get access to all campus services.' },
];

const scholarships = [
  {
    name: 'ANU International Merit Scholarship',
    coverage: 'Full tuition fee waiver',
    eligibility: 'Top 5% academic rank in home country + academic excellence',
    seats: '25 per year',
    deadline: '31 March 2026',
    type: 'Merit',
  },
  {
    name: 'ICCR Scholarship',
    coverage: 'Full tuition + accommodation + stipend',
    eligibility: 'Nominated by Government of India via Indian Embassies',
    seats: 'As per ICCR quota',
    deadline: 'Varies by country',
    type: 'Government',
  },
  {
    name: 'SAARC Student Fellowship',
    coverage: '50% tuition fee waiver',
    eligibility: 'Students from SAARC nations — Bangladesh, Nepal, Sri Lanka, Bhutan, Pakistan, Maldives, Afghanistan',
    seats: '40 per year',
    deadline: '30 April 2026',
    type: 'Regional',
  },
  {
    name: 'ANU Research Excellence Award',
    coverage: 'Full tuition + monthly stipend ₹18,000',
    eligibility: 'PhD applicants with strong research publications or funded projects',
    seats: '15 per year',
    deadline: '15 May 2026',
    type: 'Research',
  },
  {
    name: 'ANU Need-Based Grant',
    coverage: '25–75% tuition fee waiver',
    eligibility: 'Demonstrated financial need with satisfactory academic performance',
    seats: 'Rolling basis',
    deadline: 'Open throughout the year',
    type: 'Need-Based',
  },
];

const typeColors: Record<string, string> = {
  Merit: 'bg-gold/10 text-yellow-700 border-yellow-200',
  Government: 'bg-blue-50 text-blue-700 border-blue-100',
  Regional: 'bg-green-50 text-green-700 border-green-100',
  Research: 'bg-purple-50 text-purple-700 border-purple-100',
  'Need-Based': 'bg-orange-50 text-orange-700 border-orange-100',
};

const lifeHighlights = [
  {
    icon: Building2,
    title: 'International Hostel',
    desc: 'Dedicated hostel block for international students with furnished rooms, 24/7 security, common lounge, high-speed Wi-Fi, and multicultural dining options.',
  },
  {
    icon: Users,
    title: 'International Student Association',
    desc: 'Student-run association that organises cultural exchange events, festivals, country-specific celebrations, buddy programmes, and city tours.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    desc: 'On-campus health centre with English-speaking doctors, mental health counselling, health insurance tie-ups, and emergency medical support.',
  },
  {
    icon: Globe,
    title: 'Cultural Integration',
    desc: 'Telugu language classes, Indian culture workshops, local homestay weekends, and guided visits to Amaravathi, Nagarjunasagar, and Vijayawada.',
  },
  {
    icon: BookOpen,
    title: 'Academic Support',
    desc: 'Dedicated academic advisors for international students, English writing lab, peer tutoring, and credit transfer assistance.',
  },
  {
    icon: MapPin,
    title: 'Location Advantage',
    desc: 'Located in Guntur, Andhra Pradesh — a safe, affordable mid-sized city with excellent connectivity to Vijayawada (30km) and Hyderabad (270km).',
  },
];

const countries = [
  'Nepal', 'Sri Lanka', 'Bangladesh', 'Bhutan', 'Maldives', 'Afghanistan',
  'Myanmar', 'Indonesia', 'Malaysia', 'Vietnam', 'Kenya', 'Nigeria',
  'Ethiopia', 'Tanzania', 'Uganda', 'Sudan', 'Iran', 'Iraq',
  'Yemen', 'Jordan', 'Mauritius', 'Zimbabwe', 'Zambia', 'Ghana',
];

export default function International() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section id="international-header" className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold/70 uppercase tracking-widest mb-3">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-gold">International Students</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">International Students</h1>
          <p className="mt-2 text-gray-300 text-sm max-w-xl">
            Join a diverse community of students from 40+ countries at one of South India's most respected universities.
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

      {/* WHY ANU TAB */}
      {activeTab === 'overview' && (
        <section id="international-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-sm p-6 text-center hover:shadow-md hover:border-gold/30 transition-all">
                <div className="text-3xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Why ANU */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Why Choose ANU?</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Acharya Nagarjuna University, celebrating its Golden Jubilee in 2026, offers international students
                a rare combination: world-class academics, affordable living costs, a safe and welcoming campus,
                and the richness of India's ancient culture — all in one place.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                With NAAC A+ accreditation and recognition by the UGC, ANU degrees are accepted globally. The
                university has active MoUs with 34 partner universities across 18 countries for credit transfer,
                joint degrees, and exchange programmes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our dedicated International Relations Office (IRO) guides students through every step — from
                admission and visa to accommodation, FRRO registration, and academic integration.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { title: 'NAAC A+ Accredited', desc: 'Highest accreditation grade — degrees recognised globally' },
                { title: 'Affordable Tuition', desc: 'Among the most cost-effective quality universities in India' },
                { title: 'Safe Campus', desc: '24/7 security, CCTV, dedicated international hostel with warden' },
                { title: 'English Medium', desc: 'All programmes taught entirely in English' },
                { title: 'Diverse Community', desc: 'Students from 40+ countries create a truly global campus' },
                { title: 'FRRO Assistance', desc: 'IRO handles all visa extension and registration paperwork' },
                { title: 'Scholarship Opportunities', desc: 'Multiple merit, need-based, and government scholarships' },
                { title: 'Career Support', desc: 'Placement cell supports international students in Indian & global job market' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-3 bg-white border border-gray-200 rounded-sm hover:border-gold/30 transition-colors">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-navy">{item.title}</span>
                    <span className="text-xs text-gray-500"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="bg-navy text-white rounded-sm p-8">
            <h3 className="text-lg font-bold mb-2">Students from Across the World</h3>
            <p className="text-sm text-gray-400 mb-6">We currently have students from these countries and more:</p>
            <div className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <span key={c} className="text-xs bg-white/10 text-gray-300 px-3 py-1.5 rounded-sm border border-white/10 hover:bg-gold/20 hover:text-white transition-colors">
                  {c}
                </span>
              ))}
              <span className="text-xs bg-gold/20 text-gold px-3 py-1.5 rounded-sm border border-gold/30 font-semibold">
                + 16 more countries
              </span>
            </div>
          </div>
        </section>
      )}

      {/* ADMISSIONS & VISA TAB */}
      {activeTab === 'admissions' && (
        <section id="international-admissions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Programmes */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-5">Available Programmes</h2>
                <div className="grid gap-3">
                  {programs.map((p) => (
                    <div key={p.level} className="bg-white border border-gray-200 rounded-sm p-5 hover:border-gold/30 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm font-bold text-navy">{p.level}</h4>
                        <div className="flex gap-2">
                          <span className="text-[10px] bg-navy/5 text-navy px-2 py-1 rounded-sm font-semibold">{p.duration}</span>
                          <span className="text-[10px] bg-gold/10 text-yellow-700 px-2 py-1 rounded-sm font-semibold">Intake: {p.intake}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">{p.examples}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Process */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-5">Visa &amp; Arrival Process</h2>
                <div className="space-y-0">
                  {visaSteps.map((item, i, arr) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 my-1 min-h-[1.5rem]" />}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-sm font-semibold text-navy mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Eligibility */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Eligibility</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    'Completed 10+2 (or equivalent) for UG programmes',
                    'Bachelor\'s degree for PG programmes',
                    'Master\'s degree for PhD programmes',
                    'English proficiency — IELTS 5.5+ or equivalent (or medium of instruction certificate)',
                    'Valid passport with minimum 2 years validity',
                    'Medical fitness certificate',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <ChevronRight size={12} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Documents Required</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {[
                    'Academic transcripts (attested/apostilled)',
                    'Passport copy (all pages)',
                    'Passport-size photographs (6)',
                    'English proficiency certificate',
                    'Medical fitness certificate',
                    'Financial proof (bank statement)',
                    'Recommendation letters (2)',
                    'Statement of Purpose (PhD only)',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <FileText size={11} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Dates */}
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
                  <Clock size={13} className="inline mr-1 text-gold" />
                  Key Dates 2026–27
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    { event: 'July Intake — Apply by', date: '31 Mar 2026' },
                    { event: 'Offer Letters Issued', date: '30 Apr 2026' },
                    { event: 'July Orientation', date: '01 Jul 2026' },
                    { event: 'Jan Intake — Apply by', date: '30 Sep 2026' },
                    { event: 'Jan Orientation', date: '02 Jan 2027' },
                  ].map((item) => (
                    <div key={item.event} className="flex justify-between">
                      <span className="text-gray-500">{item.event}</span>
                      <span className="font-semibold text-navy">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:international@nagarjunauniversity.ac.in"
                className="block w-full text-center bg-navy text-white text-sm font-semibold py-3 rounded-sm hover:bg-navy/90 transition-colors"
              >
                Apply Now / Enquire
              </a>
            </div>
          </div>
        </section>
      )}

      {/* SCHOLARSHIPS TAB */}
      {activeTab === 'scholarships' && (
        <section id="international-scholarships" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-navy mb-1">Scholarships for International Students</h2>
            <p className="text-sm text-gray-500">ANU and Government of India offer multiple scholarship avenues to make education accessible.</p>
          </div>
          <div className="grid gap-5">
            {scholarships.map((s) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:border-gold/30 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-navy/5 rounded-sm flex items-center justify-center">
                      <Award size={16} className="text-navy" />
                    </div>
                    <h3 className="text-base font-bold text-navy">{s.name}</h3>
                  </div>
                  <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm border', typeColors[s.type])}>
                    {s.type}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Coverage</p>
                    <p className="font-semibold text-green-700">{s.coverage}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Seats</p>
                    <p className="font-semibold text-navy">{s.seats}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Deadline</p>
                    <p className="font-semibold text-navy">{s.deadline}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Eligibility</p>
                    <p className="text-gray-600 leading-relaxed">{s.eligibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gold/5 border border-gold/20 rounded-sm p-5 text-sm text-gray-600">
            <span className="font-semibold text-navy">Note: </span>
            ICCR scholarships are applied through the Indian Embassy in your country, not directly through ANU.
            For all other scholarships, contact the International Relations Office with your application documents.
          </div>
        </section>
      )}

      {/* LIFE AT ANU TAB */}
      {activeTab === 'campus-life' && (
        <section id="international-life" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-navy mb-1">Life at ANU as an International Student</h2>
            <p className="text-sm text-gray-500">Everything you need to feel at home — from day one.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {lifeHighlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                  <Icon size={18} className="text-navy group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-navy mb-2">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Cost of Living */}
          <div className="bg-navy text-white rounded-sm p-8">
            <h3 className="text-lg font-bold mb-6">Estimated Monthly Cost of Living</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { item: 'Hostel (International Block)', cost: '₹4,500 – ₹7,000', note: 'Per month, furnished room' },
                { item: 'Meals (Canteen / Mess)', cost: '₹2,500 – ₹4,000', note: 'Three meals daily' },
                { item: 'Transport (local)', cost: '₹500 – ₹1,000', note: 'Bus, auto within Guntur' },
                { item: 'Books & Stationery', cost: '₹500 – ₹1,500', note: 'Varies by programme' },
                { item: 'Personal & Miscellaneous', cost: '₹2,000 – ₹3,500', note: 'Mobile, laundry, leisure' },
                { item: 'Health Insurance', cost: '₹1,200 – ₹2,000', note: 'Annual plan / monthly est.' },
              ].map((item) => (
                <div key={item.item} className="bg-white/10 rounded-sm p-4">
                  <p className="text-xs text-gray-400 mb-1">{item.item}</p>
                  <p className="text-base font-bold text-gold mb-0.5">{item.cost}</p>
                  <p className="text-[10px] text-gray-500">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5">
              * Total estimated monthly expenses: <span className="text-white font-semibold">₹11,200 – ₹19,000</span> (~USD 135–230), making ANU one of the most affordable quality university campuses in India.
            </p>
          </div>
        </section>
      )}

      {/* CONTACT TAB */}
      {activeTab === 'contact' && (
        <section id="international-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* IRO Info */}
            <div className="space-y-5">
              <div className="bg-navy text-white rounded-sm p-6">
                <h3 className="text-base font-bold text-gold mb-4 uppercase tracking-wider">International Relations Office</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Director</p>
                    <p className="font-semibold">Prof. Dr. S. Vijaya Lakshmi</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">International Admissions Officer</p>
                    <p className="font-semibold">Mr. D. Ravi Shankar</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <a href="mailto:international@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-xs">
                      <Mail size={13} />
                      international@nagarjunauniversity.ac.in
                    </a>
                    <a href="tel:+918632346020" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-xs">
                      <Phone size={13} />
                      +91 863 234 6020
                    </a>
                    <div className="flex items-start gap-2 text-gray-400 text-xs">
                      <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                      International Relations Office, Admin Block, Room 108, ANU Campus, Nagarjuna Nagar, Guntur — 522510, Andhra Pradesh, India
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                    <p>Mon–Fri: 9:30 AM – 5:30 PM IST</p>
                    <p className="mt-0.5">Sat: 10:00 AM – 1:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">Partner Universities</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  ANU has active MoUs with 34 universities for student exchange, joint degrees, and research collaboration. Key partners include institutions in the USA, UK, Germany, Japan, Australia, and South East Asia.
                </p>
                <a href="mailto:international@nagarjunauniversity.ac.in" className="text-xs font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1">
                  Request partnership list <ChevronRight size={12} />
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'Are all programmes available to international students?',
                    a: 'Most programmes are open to international students. A few programmes in law and education have residency requirements as per Indian government regulations. Contact the IRO for clarification.',
                  },
                  {
                    q: 'Can I work part-time while studying in India?',
                    a: 'Indian student visa (X-1) does not permit paid employment outside the campus. On-campus research assistantships and stipends for PhD scholars are permissible.',
                  },
                  {
                    q: 'Is there an entrance exam for admission?',
                    a: 'UG and PG admissions are primarily merit-based on previous academic records. PhD applicants must appear for ANURET unless they hold UGC-NET, CSIR-NET, or GATE qualifications.',
                  },
                  {
                    q: 'Is food available for different dietary needs?',
                    a: 'Yes. The international hostel canteen offers vegetarian, non-vegetarian, halal, and vegan meal options. Several eateries near campus also cater to diverse dietary preferences.',
                  },
                  {
                    q: 'Can my degree be recognised in my home country?',
                    a: 'ANU is UGC-recognised and NAAC A+ accredited. Degrees are accepted by universities and employers globally. We recommend verifying equivalency with your home country\'s education authority.',
                  },
                  {
                    q: 'Will the IRO help with FRRO registration?',
                    a: 'Absolutely. The IRO provides full assistance with FRRO online registration, documents, and in-person appointments. We also support visa extensions during your study period.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 hover:border-gold/30 transition-colors">
                    <h4 className="text-sm font-semibold text-navy mb-2 flex items-start gap-2">
                      <span className="flex-shrink-0 text-gold font-bold">Q.</span>
                      {faq.q}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed pl-5">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
