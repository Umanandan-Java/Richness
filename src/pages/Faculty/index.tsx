import { Mail, Phone, MapPin, ExternalLink, BookOpen, Award, GraduationCap, FlaskConical, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from '../../components/PortalLink';

const faculty = {
  name: 'Prof. Dr. K. Srinivasa Rao',
  designation: 'Professor & Head of Department',
  department: 'Department of Computer Science & Engineering',
  college: 'College of Engineering & Technology',
  university: 'Acharya Nagarjuna University',
  photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
  email: 'ksrao@anu.ac.in',
  phone: '+91-863-234-0001',
  office: 'Room 302, CSE Block, Main Campus, Guntur – 522 510',
  profileLinks: [
    { label: 'Google Scholar', url: '#' },
    { label: 'ResearchGate', url: '#' },
    { label: 'ORCID', url: '#' },
  ],
  stats: [
    { label: 'Years of Experience', value: '22+' },
    { label: 'Publications', value: '84' },
    { label: 'PhD Scholars Guided', value: '12' },
    { label: 'Citations', value: '1,240' },
  ],
  about: `Prof. Dr. K. Srinivasa Rao is a distinguished academician and researcher with over 22 years of experience in teaching and research. He has made significant contributions to the fields of Machine Learning, Data Mining, and Cloud Computing. He has been instrumental in establishing the Centre for Advanced Computing Research at Acharya Nagarjuna University and has mentored numerous postgraduate and doctoral students who have gone on to distinguished careers in academia and industry.

His work has been recognized by several national and international bodies, and he has been invited as a keynote speaker at premier conferences across India, the United States, and Southeast Asia. He is a committed educator who believes in bridging theoretical knowledge with real-world applications.`,
  education: [
    { degree: 'Ph.D. in Computer Science', institution: 'Indian Institute of Technology, Hyderabad', year: '2002' },
    { degree: 'M.Tech. in Computer Science & Engineering', institution: 'Andhra University, Visakhapatnam', year: '1998' },
    { degree: 'B.Tech. in Computer Science & Engineering', institution: 'Acharya Nagarjuna University, Guntur', year: '1996' },
  ],
  researchInterests: [
    'Machine Learning & Deep Learning',
    'Data Mining & Big Data Analytics',
    'Cloud Computing & Edge Computing',
    'Natural Language Processing',
    'Internet of Things (IoT)',
    'Cyber Security',
  ],
  publications: [
    {
      title: 'An Efficient Deep Learning Framework for Intrusion Detection in IoT Networks',
      journal: 'IEEE Transactions on Network and Service Management',
      year: '2024',
      type: 'Journal',
    },
    {
      title: 'Federated Learning for Privacy-Preserving Healthcare Data Analysis',
      journal: 'Expert Systems with Applications, Elsevier',
      year: '2023',
      type: 'Journal',
    },
    {
      title: 'Scalable Cloud-Native Architecture for Real-Time Big Data Processing',
      journal: 'International Conference on Cloud Computing (ICCC), IEEE',
      year: '2023',
      type: 'Conference',
    },
    {
      title: 'A Survey on Transfer Learning Techniques for NLP Applications',
      journal: 'ACM Computing Surveys',
      year: '2022',
      type: 'Journal',
    },
    {
      title: 'Hybrid Optimization Algorithm for Feature Selection in High-Dimensional Data',
      journal: 'Applied Soft Computing, Elsevier',
      year: '2022',
      type: 'Journal',
    },
  ],
  courses: [
    { code: 'CS601', name: 'Machine Learning', level: 'M.Tech' },
    { code: 'CS401', name: 'Data Mining & Warehousing', level: 'B.Tech' },
    { code: 'CS701', name: 'Advanced Deep Learning', level: 'Ph.D' },
    { code: 'CS305', name: 'Cloud Computing', level: 'B.Tech' },
  ],
  awards: [
    { title: 'Best Researcher Award', body: 'Acharya Nagarjuna University', year: '2023' },
    { title: 'Outstanding Paper Award', body: 'IEEE International Conference on Data Science', year: '2022' },
    { title: 'Distinguished Educator Award', body: 'Andhra Pradesh State Council of Higher Education', year: '2020' },
    { title: 'SERB Early Career Research Award', body: 'Science & Engineering Research Board, Govt. of India', year: '2018' },
  ],
};

const tabs = ['About', 'Education', 'Research', 'Publications', 'Courses', 'Awards'];

export default function FacultyProfile() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <section id="breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="hover:text-navy transition-colors cursor-pointer">{faculty.college}</span>
            <ChevronRight size={14} />
            <span className="hover:text-navy transition-colors cursor-pointer">{faculty.department}</span>
            <ChevronRight size={14} />
            <span className="text-navy font-medium">{faculty.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section id="hero" className="bg-navy text-white">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-sm overflow-hidden border-4 border-gold/40">
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Identity */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">{faculty.college}</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">{faculty.name}</h1>
              <p className="text-gray-300 text-lg mb-1">{faculty.designation}</p>
              <p className="text-gray-400 text-sm mb-5">{faculty.department}</p>

              {/* Contact Row */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300 mb-5">
                <a href={`mailto:${faculty.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                  <Mail size={14} /> {faculty.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} /> {faculty.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {faculty.office}
                </span>
              </div>

              {/* Profile Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {faculty.profileLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-1.5 text-xs border border-gold/30 text-gold px-3 py-1.5 hover:bg-gold hover:text-white transition-colors rounded-sm"
                  >
                    <ExternalLink size={12} /> {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 md:gap-4">
              {faculty.stats.map(stat => (
                <div key={stat.label} className="text-center bg-white/5 border border-white/10 px-4 py-3 rounded-sm">
                  <p className="font-serif text-2xl font-bold text-gold">{stat.value}</p>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wide mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section id="tabs" className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
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
        <div className="max-w-4xl mx-auto">

          {/* About */}
          {activeTab === 'About' && (
            <section id="about" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">About</h2>
              {faculty.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
              ))}
            </section>
          )}

          {/* Education */}
          {activeTab === 'Education' && (
            <section id="education" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Education</h2>
              <div className="space-y-4">
                {faculty.education.map((edu, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-100 p-5 rounded-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center">
                      <GraduationCap size={20} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{edu.degree}</p>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      <p className="text-gold text-xs font-medium mt-1">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Research */}
          {activeTab === 'Research' && (
            <section id="research" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Research Interests</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {faculty.researchInterests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-sm">
                    <FlaskConical size={16} className="text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Publications */}
          {activeTab === 'Publications' && (
            <section id="publications" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Selected Publications</h2>
              <div className="space-y-4">
                {faculty.publications.map((pub, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-5 rounded-sm flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-navy/5 rounded-sm flex items-center justify-center">
                      <BookOpen size={16} className="text-navy" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-navy text-sm leading-snug mb-1">{pub.title}</p>
                      <p className="text-gray-500 text-xs">{pub.journal}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-gold text-xs font-semibold">{pub.year}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-sm ${pub.type === 'Journal' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}>
                          {pub.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Courses */}
          {activeTab === 'Courses' && (
            <section id="courses" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Courses Taught</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {faculty.courses.map((course, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-4 rounded-sm flex items-center gap-4">
                    <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded-sm font-mono whitespace-nowrap">{course.code}</span>
                    <div>
                      <p className="text-navy font-semibold text-sm">{course.name}</p>
                      <p className="text-gray-400 text-xs">{course.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards */}
          {activeTab === 'Awards' && (
            <section id="awards" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Awards & Recognition</h2>
              <div className="space-y-4">
                {faculty.awards.map((award, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-100 p-5 rounded-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center">
                      <Award size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{award.title}</p>
                      <p className="text-gray-500 text-sm">{award.body}</p>
                      <p className="text-gold text-xs font-semibold mt-1">{award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
