import { Mail, Phone, MapPin, Users, BookOpen, FlaskConical, GraduationCap, ChevronRight, Building2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from '../../components/PortalLink';

const college = {
  name: 'College of Engineering & Technology',
  university: 'Acharya Nagarjuna University',
  tagline: 'Shaping Engineers, Building the Future',
  established: '1992',
  about: `The College of Engineering & Technology at Acharya Nagarjuna University is one of the most prestigious engineering institutions in Andhra Pradesh. Established in 1992, the college has consistently produced graduates who have made significant contributions to industry, research, and academia across the globe.

With a strong emphasis on academic rigor, hands-on learning, and industry collaboration, the college offers a dynamic environment where students develop into well-rounded engineers and innovators. Our faculty comprises experienced academics and industry professionals who bring both depth of knowledge and real-world perspective to the classroom.

The college is accredited by NAAC A+ and NBA, and our programs are recognized by UGC, AICTE, and other national regulatory bodies. We maintain active research collaborations with leading institutions in India and abroad, and our students regularly participate in national and international competitions, hackathons, and conferences.`,

  principal: {
    name: 'Prof. Dr. M. Venkata Krishnaiah',
    designation: 'Principal, College of Engineering & Technology',
    message: `Welcome to the College of Engineering & Technology at Acharya Nagarjuna University. Our college stands as a beacon of academic excellence and innovation. We are committed to nurturing engineers who are not only technically proficient but also ethically grounded and socially responsible. Our world-class faculty, state-of-the-art laboratories, and vibrant campus life create an environment where students thrive and realize their full potential.`,
    email: 'principal.cet@anu.ac.in',
    phone: '+91-863-234-1000',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
  },

  stats: [
    { label: 'Departments', value: '8' },
    { label: 'Faculty Members', value: '120+' },
    { label: 'Students Enrolled', value: '3,200+' },
    { label: 'Research Publications', value: '600+' },
  ],

  departments: [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      hod: 'Prof. Dr. K. Srinivasa Rao',
      faculty: 9,
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      icon: '💻',
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      hod: 'Prof. Dr. B. Ravi Kumar',
      faculty: 14,
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      icon: '📡',
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      hod: 'Prof. Dr. S. Narayana Murthy',
      faculty: 16,
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      icon: '⚙️',
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      hod: 'Prof. Dr. P. Lakshmi Prasad',
      faculty: 13,
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      icon: '🏗️',
    },
    {
      id: 'eee',
      name: 'Electrical & Electronics Engineering',
      hod: 'Prof. Dr. V. Subrahmanyam',
      faculty: 12,
      programs: ['B.Tech', 'M.Tech'],
      icon: '⚡',
    },
    {
      id: 'chem',
      name: 'Chemical Engineering',
      hod: 'Prof. Dr. A. Padma Rao',
      faculty: 10,
      programs: ['B.Tech', 'M.Tech'],
      icon: '🧪',
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      hod: 'Prof. Dr. K. Sujatha',
      faculty: 11,
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      icon: '🧬',
    },
    {
      id: 'it',
      name: 'Information Technology',
      hod: 'Prof. Dr. N. Rama Devi',
      faculty: 10,
      programs: ['B.Tech', 'M.Tech'],
      icon: '🖥️',
    },
  ],

  programs: [
    { level: 'B.Tech', count: 8, duration: '4 Years', description: 'Undergraduate engineering programs across 8 specializations, designed to build strong foundations in engineering principles and practice.' },
    { level: 'M.Tech', count: 8, duration: '2 Years', description: 'Postgraduate programs offering advanced specialization and research training, preparing graduates for industry leadership and academia.' },
    { level: 'Ph.D', count: 7, duration: 'Variable', description: 'Doctoral research programs across seven departments, fostering cutting-edge research contributions to engineering and technology.' },
  ],

  researchCentres: [
    { name: 'Centre for Advanced Computing Research', dept: 'CSE', focus: 'AI, ML, and Big Data' },
    { name: 'VLSI Design & Embedded Systems Centre', dept: 'ECE', focus: 'VLSI, IoT, Embedded Systems' },
    { name: 'Centre for Sustainable Infrastructure', dept: 'Civil', focus: 'Green buildings, Smart cities' },
    { name: 'Advanced Manufacturing Research Centre', dept: 'Mech', focus: 'Additive manufacturing, Robotics' },
    { name: 'Renewable Energy Research Lab', dept: 'EEE', focus: 'Solar, Wind, Smart grids' },
    { name: 'Biotechnology Innovation Centre', dept: 'Biotech', focus: 'Genomics, Drug Discovery' },
  ],

  accreditations: [
    { body: 'NAAC', grade: 'A+', detail: 'Score 3.26 · Dual Mode' },
    { body: 'NBA', grade: 'Accredited', detail: '8 Programs Accredited' },
    { body: 'AICTE', grade: 'Approved', detail: 'All Engineering Programs' },
    { body: 'UGC', grade: 'Recognized', detail: '2(f) & 12(B) Status' },
  ],

  contact: {
    address: 'College of Engineering & Technology, Acharya Nagarjuna University, Nagarjuna Nagar, Guntur – 522 510, Andhra Pradesh',
    email: 'cet@anu.ac.in',
    phone: '+91-863-234-1000',
    fax: '+91-863-234-1001',
  },
};

const tabs = ['About', 'Departments', 'Programs', 'Research', 'Accreditations', 'Contact'];

export default function College() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <section id="breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-navy font-medium">{college.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section id="hero" className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">{college.university}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{college.name}</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 italic">{college.tagline}</p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {college.stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-sm px-5 py-4 text-center">
                <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
<section id="tabs" className="bg-white border-b border-gray-200 z-30 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 hover:text-navy'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">

          {/* About Tab */}
          {activeTab === 'About' && (
            <section id="about" className="space-y-8">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">About the College</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* About Text */}
                <div className="lg:col-span-2 space-y-4">
                  {college.about.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Principal's Message */}
                <div className="bg-white border border-gray-200 rounded-sm p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-4 border-l-4 border-gold pl-3">Dean's Message</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={college.principal.photo}
                      alt={college.principal.name}
                      className="w-14 h-14 rounded-sm object-cover border-2 border-gold/30"
                    />
                    <div>
                      <p className="font-semibold text-navy text-sm">{college.principal.name}</p>
                      <p className="text-gray-500 text-xs">{college.principal.designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">"{college.principal.message}"</p>
                </div>
              </div>
            </section>
          )}

          {/* Departments Tab */}
          {activeTab === 'Departments' && (
            <section id="departments" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Departments</h2>
              <p className="text-gray-500">Click on a department to explore its faculty, programs and research</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.departments.map((dept) => (
                  <Link
                    key={dept.id}
                    to={`/department/${dept.id}`}
                    className="bg-white border border-gray-200 rounded-sm p-5 hover:border-gold hover:shadow-lg transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-navy/5 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Building2 size={22} className="text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-navy group-hover:text-gold transition-colors mb-1 leading-snug">
                        {dept.name}
                      </h3>
                      <p className="text-gray-500 text-xs mb-3">HOD: {dept.hod}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {dept.programs.map((p, i) => (
                            <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm font-medium">
                              {p}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Users size={12} />
                          <span>{dept.faculty} Faculty</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Programs Tab */}
          {activeTab === 'Programs' && (
            <section id="programs" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Programs Offered</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {college.programs.map((program, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-sm p-6 hover:border-gold hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mb-4">
                      <GraduationCap size={24} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy mb-1">{program.level}</h3>
                    <p className="text-gold text-sm font-semibold mb-3">{program.count} Specializations · {program.duration}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>

              {/* Programs by Department Table */}
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden mt-8">
                <div className="bg-navy px-6 py-3">
                  <h3 className="font-serif font-bold text-white">Programs by Department</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-6 py-3 font-semibold text-navy">Department</th>
                        <th className="text-center px-4 py-3 font-semibold text-navy">B.Tech</th>
                        <th className="text-center px-4 py-3 font-semibold text-navy">M.Tech</th>
                        <th className="text-center px-4 py-3 font-semibold text-navy">Ph.D</th>
                      </tr>
                    </thead>
                    <tbody>
                      {college.departments.map((dept, i) => (
                        <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                          <td className="px-6 py-3 font-medium text-gray-700">{dept.name}</td>
                          <td className="text-center px-4 py-3 text-green-600 font-bold">{dept.programs.includes('B.Tech') ? '✓' : '—'}</td>
                          <td className="text-center px-4 py-3 text-green-600 font-bold">{dept.programs.includes('M.Tech') ? '✓' : '—'}</td>
                          <td className="text-center px-4 py-3 text-green-600 font-bold">{dept.programs.includes('Ph.D') ? '✓' : '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Research Tab */}
          {activeTab === 'Research' && (
            <section id="research" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Research Centres & Labs</h2>
              <p className="text-gray-500">Our college houses world-class research centres driving innovation across engineering disciplines</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {college.researchCentres.map((centre, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 hover:border-gold hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center mb-4">
                      <FlaskConical size={20} className="text-gold" />
                    </div>
                    <h3 className="font-serif font-bold text-navy mb-1 leading-snug text-sm">{centre.name}</h3>
                    <p className="text-xs text-gold font-semibold mb-2">{centre.dept} Department</p>
                    <p className="text-xs text-gray-500">{centre.focus}</p>
                  </div>
                ))}
              </div>

              {/* Publications stat */}
              <div className="bg-navy rounded-sm p-8 text-center mt-6">
                <p className="font-serif text-5xl font-bold text-gold mb-2">600+</p>
                <p className="text-white text-lg">Research Publications in Peer-Reviewed Journals & Conferences</p>
                <p className="text-gray-400 text-sm mt-1">Published by College Faculty & Research Scholars</p>
              </div>
            </section>
          )}

          {/* Accreditations Tab */}
          {activeTab === 'Accreditations' && (
            <section id="accreditations" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Accreditations & Recognition</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {college.accreditations.map((acc, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-sm p-6 text-center hover:border-gold hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-navy rounded-sm flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif font-bold text-white text-lg">{acc.body}</span>
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-1">{acc.grade}</h3>
                    <p className="text-gray-500 text-xs">{acc.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Tab */}
          {activeTab === 'Contact' && (
            <section id="contact" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Contact Us</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Principal's Office */}
                <div className="bg-white border border-gray-200 rounded-sm p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-4">Dean's Office</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={college.principal.photo} alt={college.principal.name} className="w-12 h-12 rounded-sm object-cover" />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">{college.principal.name}</p>
                      <p className="text-gray-500 text-xs">{college.principal.designation}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <a href={`mailto:${college.principal.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Mail size={14} /> {college.principal.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {college.principal.phone}
                    </p>
                  </div>
                </div>

                {/* College Office */}
                <div className="bg-white border border-gray-200 rounded-sm p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-4">College Office</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gold" />
                      {college.contact.address}
                    </p>
                    <a href={`mailto:${college.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Mail size={14} className="text-gold" /> {college.contact.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-gold" /> {college.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <BookOpen size={14} className="text-gold" /> Fax: {college.contact.fax}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>

    </div>
  );
}
