import React, { useState } from 'react';
import { ChevronRight, Award, Users, MapPin, Calendar, Mail, Phone, Globe, Star, Briefcase, BookOpen } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'notable' | 'chapters' | 'events' | 'register';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'notable', label: 'Notable Alumni' },
  { id: 'chapters', label: 'Alumni Chapters' },
  { id: 'events', label: 'Events & Reunions' },
  { id: 'register', label: 'Join Alumni Network' },
];

const stats = [
  { value: '2,40,000+', label: 'Alumni Worldwide', sub: 'Across 5 decades' },
  { value: '48', label: 'Countries', sub: 'Global alumni presence' },
  { value: '22', label: 'Alumni Chapters', sub: 'Across India & abroad' },
  { value: '1976', label: 'First Batch', sub: '50 years of graduates' },
];

const notableAlumni = [
  {
    name: 'Justice K. Suresh Kumar',
    batch: 'LLB, 1985',
    role: 'Judge, Andhra Pradesh High Court',
    sector: 'Law & Judiciary',
    achievement: 'Appointed to the AP High Court Bench in 2015. Known for landmark judgements on environmental law and tribal land rights.',
  },
  {
    name: 'Dr. Padma Rao',
    batch: 'M.Sc Biochemistry, 1990',
    role: 'Senior Scientist, NIH, USA',
    sector: 'Research & Science',
    achievement: 'Lead researcher at the National Institutes of Health, USA. Published 80+ papers on molecular oncology. Recipient of the NIH Director\'s Award.',
  },
  {
    name: 'Sri Venkata Ramana Reddy',
    batch: 'B.Com, 1988',
    role: 'Chairman & MD, Ramana Group of Industries',
    sector: 'Industry & Business',
    achievement: 'Built a ₹3,200 crore conglomerate spanning agro-processing, real estate, and renewable energy across Andhra Pradesh and Telangana.',
  },
  {
    name: 'Dr. Aruna Kumari Nanduri',
    batch: 'M.Pharm, 1997',
    role: 'VP – R&D, Sun Pharmaceutical Industries',
    sector: 'Pharma & Healthcare',
    achievement: 'Led the development of 14 generic drug formulations approved by USFDA. Holds 9 international patents in drug delivery systems.',
  },
  {
    name: 'Prof. Srinivasa Murthy',
    batch: 'M.Sc Mathematics, 1982',
    role: 'Professor, IIT Madras',
    sector: 'Academia',
    achievement: 'Internationally recognised for contributions to graph theory and combinatorics. Elected Fellow of the Indian Academy of Sciences in 2018.',
  },
  {
    name: 'Sri Ravi Prakash',
    batch: 'B.A. Journalism, 1993',
    role: 'Founder & CEO, TV9 Network',
    sector: 'Media & Communications',
    achievement: 'Founded one of India\'s most-watched regional news networks. Pioneer of Telugu journalism and digital media expansion in South India.',
  },
  {
    name: 'Dr. Lakshmi Prasanna Reddy',
    batch: 'MBBS (Affiliated), 1995',
    role: 'Director, AIIMS Mangalagiri',
    sector: 'Medicine & Health',
    achievement: 'Distinguished cardiologist and hospital administrator. Led the development of the All India Institute of Medical Sciences, Mangalagiri campus.',
  },
  {
    name: 'Sri Narayana Rao Gunturu',
    batch: 'B.Tech Civil, 1991',
    role: 'Additional Secretary, Ministry of Railways',
    sector: 'Civil Services (IAS)',
    achievement: 'IAS officer of the 1994 batch. Served in key infrastructure portfolios and contributed to the Amaravathi capital city development project.',
  },
];

const sectorColors: Record<string, string> = {
  'Law & Judiciary': 'bg-red-50 text-red-700 border-red-100',
  'Research & Science': 'bg-purple-50 text-purple-700 border-purple-100',
  'Industry & Business': 'bg-yellow-50 text-yellow-700 border-yellow-100',
  'Pharma & Healthcare': 'bg-green-50 text-green-700 border-green-100',
  'Academia': 'bg-blue-50 text-blue-700 border-blue-100',
  'Media & Communications': 'bg-pink-50 text-pink-700 border-pink-100',
  'Medicine & Health': 'bg-teal-50 text-teal-700 border-teal-100',
  'Civil Services (IAS)': 'bg-orange-50 text-orange-700 border-orange-100',
};

const chapters = [
  { city: 'Guntur', members: 4800, coordinator: 'Sri K. Ravi Shankar', email: 'alumni.guntur@nagarjunauniversity.ac.in', active: true },
  { city: 'Vijayawada', members: 3900, coordinator: 'Dr. P. Suresh Babu', email: 'alumni.vijayawada@nagarjunauniversity.ac.in', active: true },
  { city: 'Hyderabad', members: 6200, coordinator: 'Sri N. Ramakrishna', email: 'alumni.hyderabad@nagarjunauniversity.ac.in', active: true },
  { city: 'Visakhapatnam', members: 2100, coordinator: 'Dr. L. Nagamani', email: 'alumni.vizag@nagarjunauniversity.ac.in', active: true },
  { city: 'Bengaluru', members: 3400, coordinator: 'Sri D. Srinivas Rao', email: 'alumni.bengaluru@nagarjunauniversity.ac.in', active: true },
  { city: 'Chennai', members: 1800, coordinator: 'Dr. S. Padmavathi', email: 'alumni.chennai@nagarjunauniversity.ac.in', active: true },
  { city: 'Mumbai', members: 2200, coordinator: 'Sri V. Venkatesh', email: 'alumni.mumbai@nagarjunauniversity.ac.in', active: true },
  { city: 'Delhi NCR', members: 1600, coordinator: 'Sri T. Prasad Rao', email: 'alumni.delhi@nagarjunauniversity.ac.in', active: true },
  { city: 'Pune', members: 1100, coordinator: 'Dr. B. Madhavi', email: 'alumni.pune@nagarjunauniversity.ac.in', active: true },
  { city: 'USA (North America)', members: 2800, coordinator: 'Dr. R. Chandrasekhar', email: 'alumni.usa@nagarjunauniversity.ac.in', active: true },
  { city: 'UAE & Gulf Region', members: 1900, coordinator: 'Sri M. Venugopala Rao', email: 'alumni.gulf@nagarjunauniversity.ac.in', active: true },
  { city: 'Australia', members: 640, coordinator: 'Dr. K. Sujatha', email: 'alumni.australia@nagarjunauniversity.ac.in', active: true },
];

const upcomingEvents = [
  {
    title: 'Golden Jubilee Alumni Grand Reunion 2026',
    date: '12 Jul 2026',
    venue: 'ANU Convention Hall, Nagarjuna Nagar',
    type: 'Reunion',
    desc: 'Flagship alumni event celebrating ANU\'s 50th anniversary. All batches invited. Cultural programme, felicitation of distinguished alumni, and networking dinner.',
    isHighlight: true,
  },
  {
    title: 'Silver Jubilee Reunion — Batch of 2001',
    date: '12 Jul 2026',
    venue: 'ANU Convention Hall',
    type: 'Batch Reunion',
    desc: 'Special reunion for the batch of 2001 celebrating 25 years since graduation.',
  },
  {
    title: 'Alumni Industry Connect — Pharma & Healthcare',
    date: '20 Jun 2026',
    venue: 'Hyderabad Chapter (Venue TBC)',
    type: 'Networking',
    desc: 'Sector-specific networking event for alumni in pharma, biotech, and healthcare. Guest speaker from Dr. Reddy\'s Laboratories.',
  },
  {
    title: 'ANU Alumni Mentorship Programme — Enrolment Open',
    date: 'Rolling — July 2026 cohort',
    venue: 'Online + Campus',
    type: 'Mentorship',
    desc: 'Alumni mentor current students in career guidance, industry transitions, and higher studies. Sign up to mentor one student for 6 months.',
  },
  {
    title: 'USA Chapter Annual Meet — North America',
    date: '05 Jul 2026',
    venue: 'Dallas, Texas (Venue TBC)',
    type: 'Chapter Meet',
    desc: 'Annual gathering of ANU alumni in North America. Networking, cultural programme, and update from the Vice-Chancellor.',
  },
];

const benefits = [
  { icon: Users, title: 'Alumni Network Access', desc: 'Connect with 2,40,000+ alumni across industries and countries via the ANU Alumni Portal.' },
  { icon: Briefcase, title: 'Career & Job Board', desc: 'Exclusive job postings, referrals, and career counselling from senior alumni in your field.' },
  { icon: BookOpen, title: 'Library & E-Resources', desc: 'Lifelong access to ANU Central Library and select e-journal databases for research and learning.' },
  { icon: Star, title: 'Distinguished Alumni Award', desc: 'Eligible for the annual Distinguished Alumni Award recognising outstanding contribution to society and profession.' },
  { icon: Globe, title: 'Chapter Membership', desc: 'Join your city or country chapter for local networking events, mentorship, and industry meets.' },
  { icon: Award, title: 'Discounts on Programmes', desc: 'Special tuition concession for alumni enrolling in certificate, PG, or executive education programmes at ANU.' },
];

type RegForm = { name: string; email: string; phone: string; batch: string; degree: string; dept: string; employer: string; city: string; };

export default function Alumni() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [form, setForm] = useState<RegForm>({ name: '', email: '', phone: '', batch: '', degree: '', dept: '', employer: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section id="alumni-header" className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold/70 uppercase tracking-widest mb-3">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-gold">Alumni</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Alumni Network</h1>
          <p className="mt-2 text-gray-300 text-sm max-w-xl">
            50 years, 2,40,000+ graduates, 48 countries — the ANU family spans the globe.
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

      {/* OVERVIEW */}
      {activeTab === 'overview' && (
        <section id="alumni-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

          {/* Intro + Benefits */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Once an ANU Graduate, Always an ANU Graduate</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The Acharya Nagarjuna University Alumni Association (ANUAA) is one of the largest alumni networks
                among universities in Andhra Pradesh. From the first graduating batch of 1976 to the Golden Jubilee
                batch of 2026, our alumni have gone on to shape industries, institutions, governments, and communities
                across India and the world.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our alumni serve as judges, scientists, IAS officers, doctors, entrepreneurs, professors, media
                leaders, and social workers. They are our greatest ambassadors — and our strongest bridge between
                the university and the world.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The ANUAA organises annual reunions, batch meets, mentorship programmes, industry connect events,
                and the prestigious Distinguished Alumni Awards every year. Join the network and give back to the
                institution that shaped you.
              </p>
              <button
                onClick={() => setActiveTab('register')}
                className="mt-6 inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-navy/90 transition-colors"
              >
                Register as Alumni <ChevronRight size={14} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Alumni Benefits</h2>
              <div className="space-y-3">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3 p-4 bg-white border border-gray-200 rounded-sm hover:border-gold/30 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-navy/5 rounded-sm flex items-center justify-center">
                      <Icon size={15} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-0.5">{title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Golden Jubilee banner */}
          <div className="bg-navy text-white rounded-sm p-8 text-center">
            <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Award size={14} />
              Golden Jubilee Special
            </div>
            <h3 className="text-2xl font-bold mb-2">Grand Alumni Reunion — July 12, 2026</h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto mb-5">
              All batches — from 1976 to 2026 — are invited to the landmark Golden Jubilee Alumni Reunion at ANU campus.
              Cultural programme, felicitation, campus tour, and networking dinner.
            </p>
            <button
              onClick={() => setActiveTab('events')}
              className="inline-flex items-center gap-2 bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-gold/90 transition-colors"
            >
              View Event Details <ChevronRight size={14} />
            </button>
          </div>
        </section>
      )}

      {/* NOTABLE ALUMNI */}
      {activeTab === 'notable' && (
        <section id="alumni-notable" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-navy mb-1">Distinguished Alumni</h2>
            <p className="text-sm text-gray-500">ANU graduates who have made their mark across sectors and borders.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {notableAlumni.map((a) => (
              <div key={a.name} className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:border-gold/30 transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {a.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-navy group-hover:text-gold transition-colors">{a.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{a.role}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[10px] bg-navy/5 text-navy px-2 py-0.5 rounded-sm font-semibold">{a.batch}</span>
                      <span className={cn('text-[10px] px-2 py-0.5 rounded-sm border font-bold uppercase tracking-widest', sectorColors[a.sector] ?? 'bg-gray-50 text-gray-600 border-gray-100')}>
                        {a.sector}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{a.achievement}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            Nominations for the Distinguished Alumni Award open every November. Contact{' '}
            <a href="mailto:alumni@nagarjunauniversity.ac.in" className="text-navy hover:text-gold transition-colors font-medium">alumni@nagarjunauniversity.ac.in</a>
          </p>
        </section>
      )}

      {/* CHAPTERS */}
      {activeTab === 'chapters' && (
        <section id="alumni-chapters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-navy mb-1">Alumni Chapters</h2>
            <p className="text-sm text-gray-500">Active chapters across India and internationally.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((c) => (
              <div key={c.city} className="bg-white border border-gray-200 rounded-sm p-5 hover:shadow-md hover:border-gold/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    <h4 className="text-sm font-bold text-navy">{c.city}</h4>
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest">Active</span>
                </div>
                <div className="text-2xl font-bold text-navy mb-0.5">{c.members.toLocaleString()}</div>
                <div className="text-xs text-gray-400 mb-3">registered members</div>
                <div className="border-t border-gray-100 pt-3 space-y-1">
                  <p className="text-xs text-gray-600"><span className="font-semibold text-navy">Coordinator:</span> {c.coordinator}</p>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors">
                    <Mail size={11} />
                    {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gold/5 border border-gold/20 rounded-sm p-5 text-sm text-gray-600">
            <span className="font-semibold text-navy">Want to start a chapter in your city? </span>
            Write to us at{' '}
            <a href="mailto:alumni@nagarjunauniversity.ac.in" className="text-navy hover:text-gold transition-colors font-medium underline">
              alumni@nagarjunauniversity.ac.in
            </a>{' '}
            with at least 25 registered ANU alumni in your area.
          </div>
        </section>
      )}

      {/* EVENTS */}
      {activeTab === 'events' && (
        <section id="alumni-events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-navy mb-1">Upcoming Events &amp; Reunions</h2>
            <p className="text-sm text-gray-500">Stay connected through chapter meets, batch reunions, and the flagship annual alumni day.</p>
          </div>
          <div className="grid gap-5">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className={cn(
                'bg-white border rounded-sm overflow-hidden hover:shadow-md transition-all',
                ev.isHighlight ? 'border-gold/40' : 'border-gray-200 hover:border-gold/30'
              )}>
                {ev.isHighlight && <div className="h-1 bg-gold w-full" />}
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      {ev.isHighlight && (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gold uppercase tracking-widest mb-2">
                          <Award size={11} /> Golden Jubilee Event
                        </div>
                      )}
                      <h3 className="text-base font-bold text-navy">{ev.title}</h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-navy/5 text-navy border border-navy/10 flex-shrink-0">
                      {ev.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{ev.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold" />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-gold" />
                      {ev.venue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* REGISTER */}
      {activeTab === 'register' && (
        <section id="alumni-register" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-navy mb-6">Register / Update Your Details</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={20} className="text-green-600" />
                  </div>
                  <h3 className="text-base font-bold text-green-800 mb-2">Welcome to the ANU Alumni Network!</h3>
                  <p className="text-sm text-green-700 mb-4">
                    Your details have been received. You'll get a confirmation email within 2 working days with your alumni portal login credentials.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', batch: '', degree: '', dept: '', employer: '', city: '' }); }}
                    className="text-xs font-semibold text-green-700 underline hover:no-underline"
                  >
                    Submit another entry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="As on degree certificate"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 or international"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Year of Passing *</label>
                      <input type="text" required value={form.batch} onChange={(e) => setForm({ ...form, batch: e.target.value })}
                        placeholder="e.g. 2005"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Degree / Programme *</label>
                      <input type="text" required value={form.degree} onChange={(e) => setForm({ ...form, degree: e.target.value })}
                        placeholder="e.g. M.Sc Chemistry"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Department / College *</label>
                      <input type="text" required value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })}
                        placeholder="e.g. College of Engineering"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Current Employer / Organisation</label>
                      <input type="text" value={form.employer} onChange={(e) => setForm({ ...form, employer: e.target.value })}
                        placeholder="Company or institution name"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Current City / Country</label>
                      <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Bengaluru / USA"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <button type="submit"
                    className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors">
                    <Users size={14} />
                    Join the Alumni Network
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-navy text-white rounded-sm p-5">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">Alumni Association Office</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-0.5">President, ANUAA</p>
                    <p className="font-semibold text-white">Sri K. Venkata Rao (Batch 1988)</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-0.5">Secretary</p>
                    <p className="font-semibold text-white">Dr. M. Srinivasa Murthy (Batch 1995)</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <a href="mailto:alumni@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                      <Mail size={12} /> alumni@nagarjunauniversity.ac.in
                    </a>
                    <a href="tel:+918632346030" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                      <Phone size={12} /> +91 863 234 6030
                    </a>
                    <div className="flex items-start gap-2 text-gray-400">
                      <MapPin size={12} className="flex-shrink-0 mt-0.5" />
                      Alumni Relations Office, Admin Block, ANU Campus, Nagarjuna Nagar, Guntur — 522510
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">Social Media</h3>
                <p className="text-xs text-gray-500 mb-3">Follow the ANU Alumni Association for updates, events, and stories.</p>
                <div className="space-y-2">
                  {[
                    { platform: 'Facebook', handle: 'ANUAlumniAssociation', href: 'https://facebook.com' },
                    { platform: 'LinkedIn', handle: 'ANU Alumni Network', href: 'https://linkedin.com' },
                    { platform: 'Instagram', handle: '@anu_alumni', href: 'https://instagram.com' },
                  ].map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-gold transition-colors">
                      <Globe size={12} className="text-gold" />
                      <span className="font-semibold">{s.platform}:</span> {s.handle}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
