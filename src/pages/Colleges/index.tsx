import { Users, ChevronRight, Building2 } from 'lucide-react';
import { Link } from '../../components/PortalLink';

const colleges = [
  {
    id: 'cet',
    name: 'College of Engineering & Technology',
    shortName: 'Engineering & Technology',
    established: '1992',
    departments: 8,
    faculty: 120,
    programs: ['B.Tech', 'M.Tech', 'Ph.D'],
    description: 'Premier engineering education with state-of-the-art labs, NBA-accredited programs and strong industry linkages.',
    color: 'bg-blue-700',
  },
  {
    id: 'cas',
    name: 'College of Arts & Science',
    shortName: 'Arts & Science',
    established: '1976',
    departments: 14,
    faculty: 180,
    programs: ['B.A.', 'B.Sc.', 'M.A.', 'M.Sc.', 'Ph.D'],
    description: 'A vibrant hub of humanities, sciences and social sciences nurturing critical thinking and creative expression.',
    color: 'bg-green-700',
  },
  {
    id: 'law',
    name: 'School of Law',
    shortName: 'Law',
    established: '1983',
    departments: 4,
    faculty: 45,
    programs: ['B.A. LL.B.', 'B.Com. LL.B.', 'LL.M.', 'Ph.D'],
    description: 'Training legal professionals with a strong foundation in constitutional law, corporate law and human rights.',
    color: 'bg-red-700',
  },
  {
    id: 'commerce',
    name: 'College of Commerce & Business Management',
    shortName: 'Commerce & Management',
    established: '1980',
    departments: 5,
    faculty: 60,
    programs: ['B.Com.', 'BBA', 'M.Com.', 'MBA', 'Ph.D'],
    description: 'Grooming future business leaders through a blend of commerce fundamentals and modern management practices.',
    color: 'bg-purple-700',
  },
  {
    id: 'pharmacy',
    name: 'College of Pharmaceutical Sciences',
    shortName: 'Pharmaceutical Sciences',
    established: '1988',
    departments: 4,
    faculty: 50,
    programs: ['B.Pharm.', 'M.Pharm.', 'Pharm.D', 'Ph.D'],
    description: 'A nationally recognized pharmacy college with advanced research facilities and industry partnerships.',
    color: 'bg-teal-700',
  },
  {
    id: 'education',
    name: 'College of Education',
    shortName: 'Education',
    established: '1985',
    departments: 3,
    faculty: 35,
    programs: ['B.Ed.', 'M.Ed.', 'Ph.D'],
    description: 'Shaping future educators with innovative pedagogical approaches and inclusive teaching practices.',
    color: 'bg-orange-700',
  },
  {
    id: 'agriculture',
    name: 'College of Agriculture',
    shortName: 'Agriculture',
    established: '1995',
    departments: 6,
    faculty: 55,
    programs: ['B.Sc. (Ag)', 'M.Sc. (Ag)', 'Ph.D'],
    description: 'Advancing agricultural sciences with focus on sustainable farming, crop science and rural development.',
    color: 'bg-lime-700',
  },
  {
    id: 'socialwork',
    name: 'School of Social Work',
    shortName: 'Social Work',
    established: '1990',
    departments: 2,
    faculty: 20,
    programs: ['B.S.W.', 'M.S.W.', 'Ph.D'],
    description: 'Empowering social change agents committed to community development, welfare and human rights.',
    color: 'bg-pink-700',
  },
];

const quickLinks = [
  { label: 'Programs Offered', href: '/courses' },
  { label: 'Examination & Results', href: '#' },
  { label: 'Syllabus & Curriculum', href: '#' },
  { label: 'Research', href: '#research' },
];

export default function Colleges() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <section
  id="breadcrumb"
  className="
    sticky
    top-32
    z-40
    bg-white/95
    backdrop-blur-md
    border-b
    border-gray-200
    shadow-sm
  "
>
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link
  to="/academics"
  className="text-gray-600 hover:text-navy transition-colors"
>
  Academics
</Link>
            <ChevronRight size={14} />
<span
  aria-current="page"
  className="font-semibold text-gold"
>
  Colleges
</span>          </nav>
        </div>
      </section>

      {/* Hero Banner */}
      <section id="hero" className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-14 relative z-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Acharya Nagarjuna University</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Colleges & Schools</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our {colleges.length} constituent colleges and schools offering world-class education across disciplines.
          </p>

          {/* Summary Stats */}
          <div className="flex flex-wrap gap-8 mt-8 text-sm">
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{colleges.length}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">Colleges & Schools</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{colleges.reduce((a, c) => a + c.departments, 0)}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">Departments</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{colleges.reduce((a, c) => a + c.faculty, 0)}+</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">Faculty Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="colleges-list" className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">

            {/* Colleges Grid */}
            <div className="min-w-0">
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4 mb-8">Our Colleges & Schools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {colleges.map((college) => (
                  <Link
                    key={college.id}
                    to={`/college/${college.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-lg"
                  >
                    {/* Color Bar */}
                    <div className={`${college.color} h-1.5 w-full`}></div>

                    <div className="flex flex-1 p-5">
                      <div className="flex w-full items-start gap-4">
                        <div className={`${college.color} w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Building2 size={18} className="text-white" />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <h3 className="font-serif font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-1">
                            {college.name}
                          </h3>
                          <p className="text-gray-500 text-xs mb-3">Est. {college.established}</p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{college.description}</p>

                          {/* Programs */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {college.programs.map((p, i) => (
                              <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm font-medium">
                                {p}
                              </span>
                            ))}
                          </div>

                          {/* Meta */}
                          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Building2 size={11} /> {college.departments} Depts
                            </span>
                            <span className="flex items-center gap-1">
                              <Users size={11} /> {college.faculty} Faculty
                            </span>
                            <span className="flex items-center gap-1 ml-auto text-gold font-semibold group-hover:translate-x-1 transition-transform">
                              Explore <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Quick Links */}
            <aside className="space-y-4 lg:sticky lg:top-[var(--cur-page-sticky-top)]">
              <div className="bg-white border border-gray-200 rounded-sm p-5">
                <h3 className="font-serif font-bold text-navy mb-4 border-l-4 border-gold pl-3">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors py-1">
                          <ChevronRight size={12} className="text-gold" /> {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors py-1">
                          <ChevronRight size={12} className="text-gold" /> {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-sm p-5 text-white">
                <h3 className="font-serif font-bold mb-2">Admissions 2026–27</h3>
                <p className="text-gray-300 text-sm mb-4">Applications are now open for all undergraduate and postgraduate programs.</p>
                <a href="#admissions" className="block text-center bg-gold text-white text-sm font-semibold px-4 py-2.5 rounded-sm hover:bg-amber-500 transition-colors">
                  Apply Now
                </a>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
