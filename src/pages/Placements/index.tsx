import { useState } from 'react';
import { ChevronRight, TrendingUp, Building2, Users, Award, Briefcase, Mail, Phone, Star, Quote } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'recruiters' | 'statistics' | 'testimonials' | 'contact';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'recruiters', label: 'Top Recruiters' },
  { id: 'statistics', label: 'Year-wise Stats' },
  { id: 'testimonials', label: 'Student Stories' },
  { id: 'contact', label: 'Contact & Process' },
];

const stats = [
  { value: '94%', label: 'Placement Rate 2025', sub: 'Eligible students placed' },
  { value: '₹18 LPA', label: 'Highest Package', sub: 'Academic Year 2024–25' },
  { value: '₹6.2 LPA', label: 'Average Package', sub: 'Across all disciplines' },
  { value: '200+', label: 'Recruiting Companies', sub: 'Active in 2024–25' },
];

const topRecruiters = [
  { name: 'TCS', sector: 'IT & Services', roles: 'Software Engineer, Business Analyst', packages: 'Up to ₹7 LPA' },
  { name: 'Infosys', sector: 'IT & Services', roles: 'Systems Engineer, Associate', packages: 'Up to ₹6.5 LPA' },
  { name: 'Wipro', sector: 'IT & Services', roles: 'Project Engineer, Analyst', packages: 'Up to ₹6 LPA' },
  { name: 'HCL Technologies', sector: 'IT & Services', roles: 'Graduate Engineer Trainee', packages: 'Up to ₹5.5 LPA' },
  { name: 'Cognizant', sector: 'IT & Services', roles: 'Programmer Analyst', packages: 'Up to ₹5 LPA' },
  { name: 'Dr. Reddy\'s Laboratories', sector: 'Pharma & Healthcare', roles: 'Research Scientist, QA Engineer', packages: 'Up to ₹8 LPA' },
  { name: 'Aurobindo Pharma', sector: 'Pharma & Healthcare', roles: 'Production Chemist, R&D Associate', packages: 'Up to ₹7 LPA' },
  { name: 'Sun Pharmaceutical', sector: 'Pharma & Healthcare', roles: 'Analyst, Production Officer', packages: 'Up to ₹6.5 LPA' },
  { name: 'Deloitte', sector: 'Finance & Consulting', roles: 'Business Analyst, Tax Consultant', packages: 'Up to ₹10 LPA' },
  { name: 'KPMG', sector: 'Finance & Consulting', roles: 'Audit Associate, Risk Analyst', packages: 'Up to ₹9 LPA' },
  { name: 'HDFC Bank', sector: 'Banking & Finance', roles: 'Management Trainee, Relationship Manager', packages: 'Up to ₹7 LPA' },
  { name: 'ICICI Bank', sector: 'Banking & Finance', roles: 'Probationary Officer, Analyst', packages: 'Up to ₹6.5 LPA' },
  { name: 'Larsen & Toubro', sector: 'Engineering & Manufacturing', roles: 'Graduate Engineer Trainee', packages: 'Up to ₹9 LPA' },
  { name: 'BHEL', sector: 'Engineering & Manufacturing', roles: 'Engineer Trainee, Designer', packages: 'Up to ₹8 LPA' },
  { name: 'Amazon', sector: 'E-Commerce & Logistics', roles: 'Operations Manager, Data Analyst', packages: 'Up to ₹12 LPA' },
  { name: 'Flipkart', sector: 'E-Commerce & Logistics', roles: 'Supply Chain Analyst, Developer', packages: 'Up to ₹10 LPA' },
  { name: 'ONGC', sector: 'Energy & Core Sector', roles: 'Graduate Trainee, Field Engineer', packages: 'Up to ₹11 LPA' },
  { name: 'NTPC', sector: 'Energy & Core Sector', roles: 'Executive Trainee, Engineer', packages: 'Up to ₹10 LPA' },
];

const sectorColors: Record<string, string> = {
  'IT & Services': 'bg-blue-50 text-blue-700 border-blue-100',
  'Pharma & Healthcare': 'bg-green-50 text-green-700 border-green-100',
  'Finance & Consulting': 'bg-purple-50 text-purple-700 border-purple-100',
  'Banking & Finance': 'bg-yellow-50 text-yellow-700 border-yellow-100',
  'Engineering & Manufacturing': 'bg-orange-50 text-orange-700 border-orange-100',
  'E-Commerce & Logistics': 'bg-pink-50 text-pink-700 border-pink-100',
  'Energy & Core Sector': 'bg-red-50 text-red-700 border-red-100',
};

const yearStats = [
  { year: '2024–25', students: 1840, placed: 1730, highest: '₹18 LPA', average: '₹6.2 LPA', companies: 210 },
  { year: '2023–24', students: 1760, placed: 1620, highest: '₹15 LPA', average: '₹5.8 LPA', companies: 190 },
  { year: '2022–23', students: 1680, placed: 1490, highest: '₹14 LPA', average: '₹5.4 LPA', companies: 175 },
  { year: '2021–22', students: 1540, placed: 1310, highest: '₹12 LPA', average: '₹5.0 LPA', companies: 150 },
  { year: '2020–21', students: 1420, placed: 1180, highest: '₹10 LPA', average: '₹4.6 LPA', companies: 130 },
  { year: '2019–20', students: 1380, placed: 1110, highest: '₹9 LPA', average: '₹4.2 LPA', companies: 115 },
];

const testimonials = [
  {
    name: 'Ravi Kumar Reddy',
    batch: 'B.Tech CSE, 2025',
    company: 'Amazon',
    package: '₹14 LPA',
    quote: 'The placement cell at ANU was incredibly supportive throughout the process. The mock interviews, aptitude training, and resume workshops gave me the confidence I needed to crack the Amazon interview. I am grateful for the guidance of our TPO.',
    rating: 5,
  },
  {
    name: 'Priyanka Sharma',
    batch: 'M.Pharm, 2025',
    company: 'Dr. Reddy\'s Laboratories',
    package: '₹8 LPA',
    quote: 'ANU\'s strong industry connections in the pharma sector opened doors I did not expect. The placement team arranged a pre-placement talk with Dr. Reddy\'s which helped me understand the role and prepare targeted questions.',
    rating: 5,
  },
  {
    name: 'Sai Charan Babu',
    batch: 'MBA Finance, 2024',
    company: 'Deloitte',
    package: '₹10 LPA',
    quote: 'The case study workshops and finance-specific interview preparation sessions made all the difference. The faculty mentoring programme connected me with alumni at Deloitte who gave first-hand advice.',
    rating: 5,
  },
  {
    name: 'Mounika Devi',
    batch: 'B.Tech ECE, 2024',
    company: 'HCL Technologies',
    package: '₹5.5 LPA',
    quote: 'I come from a small town and was initially not confident about campus placements. The cell\'s communication skills workshop and group discussion training helped me immensely. Today I work as a Project Engineer at HCL.',
    rating: 5,
  },
  {
    name: 'Venkat Rao Naidu',
    batch: 'B.Com, 2024',
    company: 'ICICI Bank',
    package: '₹6.5 LPA',
    quote: 'ANU\'s reputation in the banking sector is strong. The placement team organized BFSI-specific preparation sessions which are rarely available at other universities. It made a real difference to my placement outcome.',
    rating: 4,
  },
  {
    name: 'Lakshmi Priya',
    batch: 'M.Sc Biotechnology, 2025',
    company: 'Sun Pharmaceutical',
    package: '₹6.5 LPA',
    quote: 'The research exposure at ANU was directly valued by Sun Pharma during my interview. Having published a paper during my Masters gave me a strong edge. The placement team also helped me tailor my profile accordingly.',
    rating: 5,
  },
];

const sectors = ['All', ...Array.from(new Set(topRecruiters.map((r) => r.sector)))];

export default function Placements() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [activeSector, setActiveSector] = useState('All');

  const filteredRecruiters =
    activeSector === 'All' ? topRecruiters : topRecruiters.filter((r) => r.sector === activeSector);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section id="placements-header" className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold/70 uppercase tracking-widest mb-3">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-gold">Placements</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Placements &amp; Careers</h1>
          <p className="mt-2 text-gray-300 text-sm max-w-xl">
            ANU's Training & Placement Cell connects talented graduates with leading organisations across India and abroad.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className=" top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
       ṭ         onClick={() => setActiveTab(tab.id)}
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
        <section id="placements-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-sm p-6 text-center hover:shadow-md hover:border-gold/30 transition-all">
                <div className="text-3xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Two-col: About Cell + Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Training &amp; Placement Cell</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The Training and Placement Cell (TPC) at Acharya Nagarjuna University has been the bridge between
                academic learning and industry careers for over two decades. With a dedicated team of placement
                officers, industry mentors, and career counsellors, the cell ensures every eligible student has
                access to meaningful employment opportunities.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The TPC works year-round — conducting aptitude training, group discussion workshops, mock technical
                and HR interviews, resume writing clinics, and industry interaction sessions. Special focus is given
                to students from rural backgrounds and first-generation graduates.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                In 2024–25, over 210 companies visited the campus, and more than 94% of eligible students were
                successfully placed — one of the highest rates in the region.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy mb-4">What We Offer</h2>
              {[
                { icon: TrendingUp, title: 'Aptitude & Soft Skills Training', desc: 'Year-round structured training in quantitative aptitude, verbal reasoning, logical ability, and communication skills.' },
                { icon: Users, title: 'Mock Interviews & GD Sessions', desc: 'Regular mock technical interviews and group discussions conducted by industry professionals and alumni.' },
                { icon: Briefcase, title: 'Campus Recruitment Drives', desc: 'On-campus and off-campus placement drives with 200+ companies across IT, pharma, banking, engineering and more.' },
                { icon: Building2, title: 'Industry Interface', desc: 'Dedicated industry relations team that fosters long-term partnerships, internship programmes, and pre-placement offers.' },
                { icon: Award, title: 'Higher Studies Guidance', desc: 'Counselling and preparation support for GRE, GMAT, GATE, CAT, UPSC, and other competitive examinations.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-sm hover:border-gold/30 transition-colors">
                  <div className="flex-shrink-0 w-9 h-9 bg-navy/5 rounded-sm flex items-center justify-center">
                    <Icon size={16} className="text-navy" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-0.5">{title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector breakdown */}
          <div className="bg-navy text-white rounded-sm p-8">
            <h3 className="text-lg font-bold mb-6">Placements by Sector — 2024–25</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { sector: 'IT & Services', pct: 42, count: '726 students' },
                { sector: 'Pharma & Healthcare', pct: 18, count: '311 students' },
                { sector: 'Banking & Finance', pct: 14, count: '242 students' },
                { sector: 'Engineering & Mfg', pct: 12, count: '208 students' },
                { sector: 'E-Commerce & Logistics', pct: 6, count: '104 students' },
                { sector: 'Finance & Consulting', pct: 5, count: '86 students' },
                { sector: 'Energy & Core', pct: 2, count: '35 students' },
                { sector: 'Others', pct: 1, count: '18 students' },
              ].map((s) => (
                <div key={s.sector} className="bg-white/10 rounded-sm p-4">
                  <div className="text-2xl font-bold text-gold mb-1">{s.pct}%</div>
                  <div className="text-xs font-semibold text-white mb-1">{s.sector}</div>
                  <div className="text-[11px] text-gray-400">{s.count}</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RECRUITERS TAB */}
      {activeTab === 'recruiters' && (
        <section id="placements-recruiters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSector(s)}
                className={cn(
                  'px-3 py-1.5 text-xs font-semibold rounded-sm border transition-colors',
                  activeSector === s
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
                )}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecruiters.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-gray-200 rounded-sm p-5 hover:shadow-md hover:border-gold/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center">
                    <Building2 size={18} className="text-navy" />
                  </div>
                  <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm border', sectorColors[r.sector] ?? 'bg-gray-50 text-gray-600 border-gray-100')}>
                    {r.sector}
                  </span>
                </div>
                <h4 className="text-base font-bold text-navy mb-1 group-hover:text-gold transition-colors">{r.name}</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">{r.roles}</p>
                <div className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-sm inline-block">
                  {r.packages}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            200+ companies recruit from ANU annually across engineering, sciences, management, law, and humanities.
          </p>
        </section>
      )}

      {/* STATISTICS TAB */}
      {activeTab === 'statistics' && (
        <section id="placements-stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Year-wise Placement Statistics</h2>
          <div className="bg-white border border-gray-200 rounded-sm overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Year</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Eligible</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Placed</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Rate</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Highest Pkg</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Avg Pkg</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest">Companies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {yearStats.map((row, i) => {
                  const rate = Math.round((row.placed / row.students) * 100);
                  return (
                    <tr key={row.year} className={cn('hover:bg-gold/5 transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}>
                      <td className="px-6 py-4 font-bold text-navy">{row.year}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.students.toLocaleString()}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.placed.toLocaleString()}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn('font-bold', rate >= 90 ? 'text-green-600' : rate >= 80 ? 'text-yellow-600' : 'text-red-500')}>
                          {rate}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-navy">{row.highest}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.average}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.companies}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Trend visual */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Students Placed', values: yearStats.map((y) => ({ year: y.year.split('–')[0], val: y.placed })), color: 'bg-navy' },
              { label: 'Average Package Growth', values: yearStats.map((y) => ({ year: y.year.split('–')[0], val: parseFloat(y.average.replace('₹', '').replace(' LPA', '')) })), color: 'bg-gold' },
              { label: 'Recruiting Companies', values: yearStats.map((y) => ({ year: y.year.split('–')[0], val: y.companies })), color: 'bg-green-600' },
            ].map(({ label, values, color }) => {
              const max = Math.max(...values.map((v) => v.val));
              return (
                <div key={label} className="bg-white border border-gray-200 rounded-sm p-5">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">{label}</h4>
                  <div className="space-y-2">
                    {[...values].reverse().map(({ year, val }) => (
                      <div key={year} className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 w-12 flex-shrink-0">{year}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={cn('h-full rounded-full', color)}
                            style={{ width: `${(val / max) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-navy w-10 text-right flex-shrink-0">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* TESTIMONIALS TAB */}
      {activeTab === 'testimonials' && (
        <section id="placements-testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-navy mb-1">Student Success Stories</h2>
            <p className="text-sm text-gray-500">Hear from students who launched their careers from ANU's campus.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:border-gold/30 transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-navy">{t.name}</h4>
                    <p className="text-xs text-gray-400">{t.batch}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-bold text-navy">{t.company}</div>
                    <div className="text-xs text-green-600 font-semibold">{t.package}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < t.rating ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-200'}
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote size={20} className="text-gold/20 absolute -top-1 -left-1" />
                  <p className="text-sm text-gray-600 leading-relaxed pl-4 italic">{t.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT TAB */}
      {activeTab === 'contact' && (
        <section id="placements-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Process */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-6">Recruitment Process</h2>
              <div className="space-y-0">
                {[
                  { step: '01', title: 'Company Registration', desc: 'Companies register with the TPC by submitting a Job Notification Form (JNF) detailing roles, eligibility criteria, and package details.' },
                  { step: '02', title: 'Student Shortlisting', desc: 'Eligible students are shortlisted based on CGPA, backlogs, and other criteria specified by the recruiting company.' },
                  { step: '03', title: 'Pre-Placement Talk', desc: 'Company representatives conduct a pre-placement talk, presenting their organisation, culture, and growth opportunities.' },
                  { step: '04', title: 'Selection Process', desc: 'Written tests, group discussions, technical rounds, and HR interviews are conducted as per company requirements on campus.' },
                  { step: '05', title: 'Offer & Joining', desc: 'Selected students receive formal offer letters. TPC ensures a smooth transition from selection to joining formalities.' },
                ].map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                        {item.step}
                      </div>
                      {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
                    </div>
                    <div className={cn('pb-6', i === arr.length - 1 ? '' : '')}>
                      <h4 className="text-sm font-semibold text-navy mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="bg-navy text-white rounded-sm p-6">
                <h3 className="text-base font-bold text-gold mb-4 uppercase tracking-wider">Training &amp; Placement Cell</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Head, Placement Cell</p>
                    <p className="font-semibold">Prof. Dr. B. Srinivasa Rao</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Placement Officer</p>
                    <p className="font-semibold">Mr. K. Ramakrishna</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <a href="mailto:placements@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-xs">
                      <Mail size={13} />
                      placements@nagarjunauniversity.ac.in
                    </a>
                    <a href="tel:+918632346050" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-xs">
                      <Phone size={13} />
                      +91 863 234 6050
                    </a>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                    Training & Placement Cell, Admin Block, ANU Campus, Nagarjuna Nagar, Guntur — 522510
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-sm p-6">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">For Recruiting Companies</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  To schedule a campus recruitment drive or register your company with the TPC, please write to us
                  with your Job Notification Form. We typically respond within 48 working hours.
                </p>
                <a
                  href="mailto:placements@nagarjunauniversity.ac.in"
                  className="inline-flex items-center gap-2 bg-navy text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-navy/90 transition-colors"
                >
                  <Mail size={13} />
                  Send JNF / Enquiry
                </a>
              </div>

              <div className="bg-gold/5 border border-gold/20 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy mb-2">Office Hours</h3>
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-navy">9:30 AM – 5:30 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-navy">9:30 AM – 1:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday & Holidays</span><span className="text-gray-400">Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
