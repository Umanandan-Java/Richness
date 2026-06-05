import { useState } from 'react';
import { BookOpen, Clock, Wifi, Monitor, Search, ChevronRight, Phone, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'collections' | 'eresources' | 'services' | 'contact';
const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'collections', label: 'Collections' },
  { id: 'eresources', label: 'E-Resources' },
  { id: 'services', label: 'Services & Rules' },
  { id: 'contact', label: 'Contact & Hours' },
];

const stats = [
  { label: 'Books', value: '2,50,000+' },
  { label: 'Journals', value: '1,200+' },
  { label: 'E-Books', value: '50,000+' },
  { label: 'Seating Capacity', value: '800' },
];

const collections = [
  { category: 'Engineering & Technology', books: '42,000+', journals: '180' },
  { category: 'Sciences (Pure & Applied)', books: '38,000+', journals: '220' },
  { category: 'Arts, Humanities & Social Sciences', books: '45,000+', journals: '150' },
  { category: 'Commerce & Management', books: '28,000+', journals: '130' },
  { category: 'Law', books: '22,000+', journals: '90' },
  { category: 'Pharmacy & Medicine', books: '18,000+', journals: '110' },
  { category: 'Agriculture', books: '15,000+', journals: '80' },
  { category: 'Reference & General', books: '12,000+', journals: '60' },
  { category: 'Telugu & Sanskrit', books: '14,000+', journals: '40' },
  { category: 'Theses & Dissertations', books: '8,500+', journals: '—' },
];

const eResources = [
  { name: 'JSTOR', type: 'Academic Journals', desc: 'Access to 12 million academic articles across 75 disciplines.', href: '#' },
  { name: 'ScienceDirect', type: 'Research Database', desc: 'Full-text access to Elsevier journals and book chapters.', href: '#' },
  { name: 'NDLI', type: 'National Digital Library', desc: 'IIT-Kharagpur platform with millions of free learning resources.', href: '#' },
  { name: 'Shodhganga', type: 'Ph.D. Theses', desc: 'Repository of Indian electronic theses and dissertations.', href: '#' },
  { name: 'e-PG Pathshala', type: 'UGC e-Learning', desc: 'High-quality PG content developed under UGC-MHRD initiative.', href: '#' },
  { name: 'Delnet', type: 'Library Network', desc: 'Resource sharing and inter-library loan facility.', href: '#' },
];

const services = [
  {
    heading: 'Membership & Borrowing',
    points: [
      'All enrolled students and faculty are eligible for library membership.',
      'Students (UG): 4 books for 14 days. Students (PG/Ph.D): 6 books for 21 days.',
      'Faculty: 10 books for 30 days.',
      'Books can be renewed once if not reserved by another member.',
    ],
  },
  {
    heading: 'Reading Rooms',
    points: [
      'General Reading Room: Open to all — no borrowing required.',
      'Research Scholars\' Reading Room: Exclusive for Ph.D. students.',
      'Digital Resource Centre: 100 computers with internet access.',
      'Group Discussion Rooms: Available on prior booking.',
    ],
  },
  {
    heading: 'Rules & Conduct',
    points: [
      'Maintain strict silence in all reading areas.',
      'Mobile phones must be kept on silent mode; no calls inside.',
      'Personal bags must be deposited at the bag counter.',
      'Damage or loss of library material will attract replacement charges.',
      'Library cards are non-transferable.',
    ],
  },
  {
    heading: 'Special Services',
    points: [
      'Inter-Library Loan (ILL) through DELNET network.',
      'Document Delivery Service for journal articles.',
      'Current Awareness Service (CAS) — alerts on new arrivals.',
      'Bibliographic assistance for research scholars.',
    ],
  },
];

export default function Library() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section id="hero" className="bg-navy text-white pt-16 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <BookOpen size={14} />
            <span>Campus Life</span>
            <ChevronRight size={13} />
            <span>Library</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-3">Central Library</h1>
          <p className="text-gray-300 text-base max-w-xl">
            One of the largest university libraries in Andhra Pradesh — a knowledge hub with over 2.5 lakh books, digital resources, and research support services.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-gold">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
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
          <div className="space-y-10">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-4">About the Library</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Central Library of Acharya Nagarjuna University is a comprehensive academic resource centre serving students, faculty, and researchers across all disciplines. Established along with the university in 1976, the library has grown into one of the most well-stocked university libraries in Andhra Pradesh.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The library houses over 2,50,000 books, subscribes to 1,200+ national and international journals, and provides access to 50,000+ e-books and digital databases. The spacious building accommodates 800 readers simultaneously across multiple reading halls, research rooms, and a digital resource centre.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gray-800 transition-colors">
                    <Search size={14} /> Search Catalogue (OPAC)
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 border border-navy text-navy px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gray-50 transition-colors">
                    <Download size={14} /> E-Resources Portal
                  </a>
                </div>
              </div>

              {/* Quick Timings Card */}
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                <div className="bg-navy px-5 py-3 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  <h3 className="text-sm font-bold text-gold uppercase tracking-wider">Library Hours</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { day: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
                    { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                    { day: 'Exam Season', time: '7:00 AM – 11:00 PM' },
                    { day: 'Public Holidays', time: 'Closed' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center px-5 py-3">
                      <span className="text-sm text-gray-600">{row.day}</span>
                      <span className="text-sm font-semibold text-navy">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Facilities highlights */}
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6">Facilities at a Glance</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: BookOpen, label: 'General Stacks', desc: 'Open-shelf access to all collections' },
                  { icon: Monitor, label: 'Digital Centre', desc: '100 computers with internet' },
                  { icon: Wifi, label: 'Wi-Fi Zone', desc: 'Campus-wide connectivity' },
                  { icon: Search, label: 'OPAC Terminals', desc: 'Online catalogue search' },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-5 text-center hover:border-gold hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-sm bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mx-auto mb-3 transition-colors">
                      <f.icon size={22} className="text-navy group-hover:text-gold transition-colors" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-semibold text-navy text-sm mb-1">{f.label}</h4>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Collections */}
        {activeTab === 'collections' && (
          <div>
            <h2 className="font-serif text-3xl text-navy mb-2">Library Collections</h2>
            <p className="text-gray-500 text-sm mb-8">Subject-wise breakdown of books and subscribed journals.</p>
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-navy text-white text-xs font-bold uppercase tracking-wider">
                <div className="px-5 py-3 col-span-1">Subject Area</div>
                <div className="px-5 py-3 text-center">Books</div>
                <div className="px-5 py-3 text-center">Journals</div>
              </div>
              {collections.map((row, i) => (
                <div key={i} className={cn('grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}>
                  <div className="px-5 py-3.5 text-sm text-gray-800 font-medium">{row.category}</div>
                  <div className="px-5 py-3.5 text-sm text-center font-semibold text-navy">{row.books}</div>
                  <div className="px-5 py-3.5 text-sm text-center text-gray-600">{row.journals}</div>
                </div>
              ))}
              <div className="grid grid-cols-3 bg-gold/10 border-t-2 border-gold/30">
                <div className="px-5 py-3 text-sm font-bold text-navy">Total</div>
                <div className="px-5 py-3 text-sm font-bold text-center text-navy">2,50,000+</div>
                <div className="px-5 py-3 text-sm font-bold text-center text-navy">1,200+</div>
              </div>
            </div>
          </div>
        )}

        {/* E-Resources */}
        {activeTab === 'eresources' && (
          <div>
            <h2 className="font-serif text-3xl text-navy mb-2">Digital & E-Resources</h2>
            <p className="text-gray-500 text-sm mb-8">Access these resources from anywhere on campus using your student/faculty credentials.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {eResources.map((r, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-sm p-5 hover:border-gold hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-navy text-base">{r.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{r.type}</span>
                    </div>
                    <a href={r.href} className="text-gray-300 group-hover:text-gold transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                  <a href={r.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors mt-4">
                    Access Resource <ChevronRight size={12} />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-sm p-5 text-sm text-blue-800">
              <strong>Note:</strong> E-resources are accessible on-campus through the university network. Off-campus access requires VPN credentials — contact the library for assistance.
            </div>
          </div>
        )}

        {/* Services & Rules */}
        {activeTab === 'services' && (
          <div className="max-w-3xl space-y-6">
            <h2 className="font-serif text-3xl text-navy mb-2">Services & Rules</h2>
            <p className="text-gray-500 text-sm mb-6">All library members are expected to follow these guidelines to ensure a productive environment for everyone.</p>
            {services.map((section, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-navy px-5 py-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{section.heading}</h3>
                </div>
                <ul className="divide-y divide-gray-50">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 px-5 py-3 text-sm text-gray-700">
                      <ChevronRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Contact & Hours */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl space-y-6">
            <h2 className="font-serif text-3xl text-navy mb-6">Contact the Library</h2>
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-navy px-5 py-3">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider">Librarian</h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="font-semibold text-navy">Dr. V. Satyanarayana</p>
                <p className="text-sm text-gray-500">University Librarian, ANU Central Library</p>
                <div className="space-y-2 pt-2">
                  <a href="tel:+918632346300" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" /> +91-863-234-6300
                  </a>
                  <a href="mailto:library@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" /> library@nagarjunauniversity.ac.in
                  </a>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Central Library Building, ANU Campus, Nagarjuna Nagar – 522 510</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-gold px-5 py-3 flex items-center gap-2">
                <Clock size={14} className="text-white" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Library Hours</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                  { day: 'During Examinations', time: '7:00 AM – 11:00 PM' },
                  { day: 'Public Holidays', time: 'Closed' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center px-5 py-3">
                    <span className="text-sm text-gray-600">{row.day}</span>
                    <span className="text-sm font-semibold text-navy">{row.time}</span>
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
