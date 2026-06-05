import { Mail, Phone, MapPin, Users, BookOpen, FlaskConical, GraduationCap, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from '../../components/PortalLink';

const department = {
  name: 'Department of Computer Science & Engineering',
  college: 'College of Engineering & Technology',
  tagline: 'Innovating Tomorrow through Technology Today',
  established: '1998',
  about: `The Department of Computer Science & Engineering at Acharya Nagarjuna University has been at the forefront of technological education and research for over two decades. With state-of-the-art infrastructure, world-class faculty, and industry partnerships, we nurture innovators, researchers, and leaders who shape the future of computing.

Our curriculum blends theoretical foundations with hands-on experience, preparing students for careers in software development, data science, artificial intelligence, cybersecurity, and emerging technologies. We pride ourselves on our research contributions, with faculty and students publishing regularly in premier international journals and conferences.`,
  
  programs: [
    { level: 'B.Tech', name: 'Computer Science & Engineering', duration: '4 Years', intake: '60 Students' },
    { level: 'M.Tech', name: 'Computer Science & Engineering', duration: '2 Years', intake: '18 Students' },
    { level: 'Ph.D', name: 'Research in Computer Science', duration: 'Variable', intake: '10-12 Scholars/Year' },
  ],

  researchAreas: [
    'Machine Learning & Deep Learning',
    'Data Mining & Big Data Analytics',
    'Cloud Computing & Distributed Systems',
    'Internet of Things (IoT)',
    'Cyber Security & Cryptography',
    'Natural Language Processing',
    'Computer Vision & Image Processing',
    'Software Engineering & DevOps',
  ],

  labs: [
    'Advanced Computing Laboratory',
    'AI & Machine Learning Research Lab',
    'Cyber Security & Network Lab',
    'Cloud Computing Lab',
    'IoT & Embedded Systems Lab',
  ],

  hod: {
    name: 'Prof. Dr. K. Srinivasa Rao',
    email: 'hod.cse@anu.ac.in',
    phone: '+91-863-234-0001',
  },

  contact: {
    address: 'CSE Block, Main Campus, Acharya Nagarjuna University, Nagarjuna Nagar, Guntur – 522 510, Andhra Pradesh',
    email: 'cse@anu.ac.in',
    phone: '+91-863-234-0000',
  },
};

const facultyList = [
  {
    id: 'ksrao',
    name: 'Prof. Dr. K. Srinivasa Rao',
    designation: 'Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Machine Learning', 'Data Mining', 'Cloud Computing'],
    experience: '22+ Years',
    publications: '84',
  },
  {
    id: 'rmurthy',
    name: 'Prof. Dr. R. Murthy',
    designation: 'Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Cyber Security', 'Cryptography', 'Network Security'],
    experience: '20+ Years',
    publications: '72',
  },
  {
    id: 'pradhan',
    name: 'Dr. P. Radhan Kumar',
    designation: 'Associate Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Natural Language Processing', 'Deep Learning'],
    experience: '15+ Years',
    publications: '56',
  },
  {
    id: 'slakshmi',
    name: 'Dr. S. Lakshmi Devi',
    designation: 'Associate Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Computer Vision', 'Image Processing', 'AI'],
    experience: '14+ Years',
    publications: '48',
  },
  {
    id: 'vkumar',
    name: 'Dr. V. Kumar',
    designation: 'Associate Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['IoT', 'Embedded Systems', 'Edge Computing'],
    experience: '13+ Years',
    publications: '42',
  },
  {
    id: 'avenkat',
    name: 'Dr. A. Venkata Ramana',
    designation: 'Assistant Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Big Data Analytics', 'Distributed Systems'],
    experience: '10+ Years',
    publications: '35',
  },
  {
    id: 'psalini',
    name: 'Dr. P. Salini',
    designation: 'Assistant Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Software Engineering', 'DevOps', 'Agile'],
    experience: '9+ Years',
    publications: '28',
  },
  {
    id: 'rnaresh',
    name: 'Mr. R. Naresh',
    designation: 'Assistant Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Web Technologies', 'Mobile Computing'],
    experience: '8+ Years',
    publications: '22',
  },
  {
    id: 'kdivya',
    name: 'Ms. K. Divya',
    designation: 'Assistant Professor',
    photo: 'https://cdn.wegic.ai/assets/onepage/agent/images/1779174705046_0.jpg?imageMogr2/format/webp',
    interests: ['Database Management', 'Data Warehousing'],
    experience: '7+ Years',
    publications: '18',
  },
];

const designations = ['All', 'Professor', 'Associate Professor', 'Assistant Professor'];

const tabs = ['About', 'Faculty', 'Programs', 'Research & Labs', 'Contact'];

export default function Department() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('About');

  const filteredFaculty = activeFilter === 'All' 
    ? facultyList 
    : facultyList.filter(f => f.designation === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <section id="breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="hover:text-navy transition-colors cursor-pointer">{department.college}</span>
            <ChevronRight size={14} />
            <span className="text-navy font-medium">{department.name}</span>
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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">{department.college}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{department.name}</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6 italic">{department.tagline}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-gold" />
              <span>Established {department.established}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-gold" />
              <span>{facultyList.length} Faculty Members</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-gold" />
              <span>{department.programs.length} Programs</span>
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
        <div className="max-w-7xl mx-auto">

          {/* About Tab */}
          {activeTab === 'About' && (
            <section id="about" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">About the Department</h2>
              <div className="max-w-4xl">
                {department.about.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </section>
          )}

          {/* Faculty Tab */}
          {activeTab === 'Faculty' && (
            <section id="faculty" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Our Faculty</h2>
              <p className="text-gray-500 mb-6">Meet our distinguished faculty members shaping the future of technology</p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                {designations.map(designation => {
                  const count = designation === 'All' ? facultyList.length : facultyList.filter(f => f.designation === designation).length;
                  return (
                    <button
                      key={designation}
                      onClick={() => setActiveFilter(designation)}
                      className={`px-5 py-2.5 rounded-sm font-semibold text-sm transition-all ${
                        activeFilter === designation
                          ? 'bg-gold text-white shadow-md'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-gold hover:text-gold'
                      }`}
                    >
                      {designation} <span className="text-xs opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Faculty Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredFaculty.map(faculty => (
                  <Link
                    key={faculty.id}
                    to={`/faculty/${faculty.id}`}
                    className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-gold transition-all duration-300 group flex items-center gap-4 p-4"
                  >
                    {/* Small Photo */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden bg-gray-100">
                      <img
                        src={faculty.photo}
                        alt={faculty.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-tight mb-0.5 truncate">{faculty.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{faculty.designation}</p>
                      <div className="flex flex-wrap gap-1">
                        {faculty.interests.slice(0, 2).map((interest, i) => (
                          <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-sm font-medium">
                            {interest}
                          </span>
                        ))}
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
                {department.programs.map((program, i) => (
                  <div key={i} className="border border-gray-200 rounded-sm p-6 hover:border-gold hover:shadow-lg transition-all bg-white">
                    <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mb-4">
                      <GraduationCap size={24} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">{program.level}</h3>
                    <p className="text-gray-700 font-medium mb-3">{program.name}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>Duration: {program.duration}</p>
                      <p>Intake: {program.intake}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Research & Labs Tab */}
          {activeTab === 'Research & Labs' && (
            <section id="research" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 border-l-4 border-gold pl-4">Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {department.researchAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-4 rounded-sm">
                      <FlaskConical size={16} className="text-gold flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 border-l-4 border-gold pl-4">Laboratory Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {department.labs.map((lab, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-sm">
                      <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-navy">{i + 1}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Contact Tab */}
          {activeTab === 'Contact' && (
            <section id="contact" className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Contact Us</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-sm p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-4">Head of Department</h3>
                  <p className="font-semibold text-gray-700 mb-3">{department.hod.name}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <a href={`mailto:${department.hod.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Mail size={14} /> {department.hod.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {department.hod.phone}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-sm p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-4">Department Office</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5" /> {department.contact.address}
                    </p>
                    <a href={`mailto:${department.contact.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Mail size={14} /> {department.contact.email}
                    </a>
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {department.contact.phone}
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
