import { useMemo, useState } from 'react';
import { Link } from '../../components/PortalLink';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Clock3, Search, SlidersHorizontal, WalletCards, X } from 'lucide-react';
import { programs, programLevels, type Program, type ProgramLevel } from '../../data/programs';

const levelStyles: Record<ProgramLevel, string> = {
  UG: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10',
  PG: 'bg-blue-50 text-blue-700 ring-blue-600/10',
  PhD: 'bg-amber-50 text-amber-700 ring-amber-600/10',
};

const formatFee = (amount: number) => {
  if (amount >= 100000) {
    return `${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 1)}L`;
  }

  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(amount);
};

const fallbackSpecializations: Record<string, string[]> = {
  cse: ['AI', 'Cyber Security', 'Cloud Computing', 'Data Science'],
  ece: ['VLSI', 'Embedded Systems', 'IoT', 'Signal Processing'],
  civil: ['Structures', 'Smart Cities', 'Sustainable Design'],
  mechanical: ['CAD', 'Automation', 'Manufacturing'],
  robotics: ['Industrial Automation', 'Robotics', 'Control Systems'],
  pharmacy: ['Pharmaceutics', 'Drug Delivery', 'Quality Systems'],
  pharmd: ['Clinical Pharmacy', 'Patient Care', 'Pharmacotherapy'],
  biotech: ['Genetics', 'Bioinformatics', 'Diagnostics'],
  chemistry: ['Organic Synthesis', 'Materials', 'Analytics'],
  mba: ['Finance', 'HR Analytics', 'International Trade', 'Agribusiness'],
  commerce: ['Finance', 'Auditing', 'Taxation', 'FinTech'],
  buddhist: ['Philosophy', 'Pali/Sanskrit', 'Archaeology'],
  journalism: ['Digital Media', 'Reporting', 'Communication'],
};

const fallbackCareers: Record<string, string[]> = {
  cse: ['Software Engineer', 'AI Engineer', 'Cloud Engineer', 'Cyber Security Analyst'],
  ece: ['VLSI Engineer', 'Embedded Engineer', 'Network Engineer', 'IoT Engineer'],
  civil: ['Site Engineer', 'Structural Analyst', 'Planning Engineer'],
  mechanical: ['Design Engineer', 'Production Engineer', 'CAD Engineer'],
  robotics: ['Robotics Engineer', 'Automation Engineer', 'Controls Engineer'],
  pharmacy: ['Pharmacist', 'QA Analyst', 'Formulation Associate', 'Regulatory Associate'],
  pharmd: ['Clinical Pharmacist', 'Drug Safety Associate', 'Hospital Pharmacist'],
  biotech: ['Lab Associate', 'Bioinformatics Analyst', 'Research Assistant'],
  chemistry: ['Chemist', 'Quality Analyst', 'Process Associate'],
  mba: ['Business Analyst', 'Marketing Associate', 'HR Associate', 'Operations Analyst'],
  commerce: ['Accounts Executive', 'Audit Associate', 'Tax Analyst'],
  buddhist: ['Research Assistant', 'Heritage Coordinator', 'Academic Associate'],
  journalism: ['Reporter', 'Content Producer', 'Communication Associate'],
};

function getProgramCluster(program: Program) {
  const text = `${program.id} ${program.name} ${program.department} ${program.faculty}`.toLowerCase();

  if (text.includes('computer') || text.includes('software') || text.includes('ai')) return 'cse';
  if (text.includes('electronics') || text.includes('vlsi') || text.includes('wireless')) return 'ece';
  if (text.includes('civil')) return 'civil';
  if (text.includes('mechanical')) return 'mechanical';
  if (text.includes('robotics')) return 'robotics';
  if (text.includes('pharm.d') || text.includes('pharmd') || text.includes('clinical')) return 'pharmd';
  if (text.includes('pharmacy') || text.includes('pharmaceutical') || text.includes('m.pharmacy')) return 'pharmacy';
  if (text.includes('biotech') || text.includes('cellular')) return 'biotech';
  if (text.includes('chemistry') || text.includes('synthesis') || text.includes('nanotechnology')) return 'chemistry';
  if (text.includes('mba') || text.includes('business')) return 'mba';
  if (text.includes('commerce') || text.includes('m.com') || text.includes('econometrics')) return 'commerce';
  if (text.includes('buddhist') || text.includes('philosophy')) return 'buddhist';
  if (text.includes('journalism') || text.includes('communication')) return 'journalism';

  return 'commerce';
}

function getEligibilityItems(program: Program) {
  const text = program.eligibility.toLowerCase();

  if (program.level === 'UG') {
    if (text.includes('mpc')) return ['10+2 (MPC)', 'AP EAPCET / JEE Main'];
    if (text.includes('bipc')) return ['10+2 (BiPC or MPC)', 'EAPCET / Merit Counselling'];
    if (text.includes('biology')) return ['10+2 with Biology', 'Merit Counselling'];
    return ['10+2 or Equivalent', 'University Admission Norms'];
  }

  if (program.level === 'PG') {
    if (text.includes('icet') || text.includes('cat') || text.includes('mat')) return ['Any Bachelor Degree', 'AP ICET / CAT / MAT'];
    if (text.includes('b.com')) return ['B.Com Degree', 'Academic Merit'];
    if (text.includes('b.pharmacy')) return ['B.Pharmacy Degree', 'University Admission Norms'];
    if (text.includes('chemistry')) return ['B.Sc with Chemistry', 'University Admission Norms'];
    if (text.includes('pgcet')) return ['Bachelor Degree', 'AP PGCET'];
    return ['Relevant Bachelor Degree', 'Entrance / Merit Based'];
  }

  return ['Relevant PG Degree', 'Research Entrance / Interview'];
}

function getProgramPresentation(program: Program) {
  const cluster = getProgramCluster(program);

  return {
    specializations: fallbackSpecializations[cluster],
    eligibilityItems: getEligibilityItems(program),
    careers: fallbackCareers[cluster],
  };
}

function ProgramCard({ program }: { program: Program }) {
  const { specializations, eligibilityItems, careers } = getProgramPresentation(program);

  return (
    <article
      id={program.id}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white p-5 shadow-[0_1px_2px_rgba(18,52,41,0.04),0_12px_36px_rgba(18,52,41,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_18px_48px_rgba(18,52,41,0.12)] focus-within:border-gold"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className={`inline-flex h-7 items-center rounded-sm px-2.5 text-[11px] font-bold uppercase ring-1 ${levelStyles[program.level]}`}>
          {program.level}
        </span>
        <span className="truncate text-xs font-medium text-gray-500">{program.faculty.replace('Faculty of ', '')}</span>
      </div>

      <h3 className="min-h-[3.5rem] text-[1.35rem] font-bold leading-snug text-navy md:text-[1.45rem]">
        {program.name}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Specializations">
        {specializations.map((specialization) => (
          <span key={specialization} className="rounded-sm bg-navy/5 px-2.5 py-1 text-xs font-semibold text-charcoal ring-1 ring-navy/10">
            {specialization}
          </span>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-sm bg-gray-50 px-3 py-3 text-sm font-semibold text-charcoal ring-1 ring-gray-100">
          <Clock3 size={16} className="text-gold" aria-hidden="true" />
          <span>{typeof program.durationYears === 'number' ? `${program.durationYears} Years` : program.durationYears}</span>
        </div>
        <div className="flex items-center gap-2 rounded-sm bg-gray-50 px-3 py-3 text-sm font-semibold text-charcoal ring-1 ring-gray-100">
          <WalletCards size={16} className="text-gold" aria-hidden="true" />
          <span>Rs {formatFee(program.tuitionPerYearINR)} / Year</span>
        </div>
      </div>

      <div className="my-5 h-px bg-gray-100" />

      <div>
        <h4 className="text-xs font-bold uppercase text-navy">Eligibility</h4>
        <ul className="mt-3 grid gap-2">
          {eligibilityItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-5 h-px bg-gray-100" />

      <div className="flex-1">
        <h4 className="text-xs font-bold uppercase text-navy">Career Paths</h4>
        <div className="mt-3 flex flex-wrap gap-2" aria-label="Career paths">
          {careers.map((career) => (
            <span key={career} className="rounded-sm bg-gold/10 px-2.5 py-1 text-xs font-semibold text-charcoal ring-1 ring-gold/20">
              {career}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/programs#${program.id}`}
        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-navy px-4 text-sm font-bold text-white transition-all duration-300 hover:bg-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 group-hover:gap-3"
        aria-label={`Explore ${program.name}`}
      >
        Explore Program
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function Programs() {
  const [query, setQuery] = useState('');
  const [activeLevel, setActiveLevel] = useState<'All' | ProgramLevel>('All');

  const levelCounts = useMemo(() => {
    return programs.reduce(
      (acc, program) => {
        acc.All += 1;
        acc[program.level] += 1;
        return acc;
      },
      { All: 0, UG: 0, PG: 0, PhD: 0 } as Record<'All' | ProgramLevel, number>
    );
  }, []);

  const filteredPrograms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return programs.filter((program) => {
      const matchesLevel = activeLevel === 'All' || program.level === activeLevel;
      const searchableText = [
        program.name,
        program.level,
        program.faculty,
        program.department,
        program.description,
        program.eligibility,
        getProgramPresentation(program).specializations.join(' '),
        getProgramPresentation(program).eligibilityItems.join(' '),
        getProgramPresentation(program).careers.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return matchesLevel && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeLevel, query]);

  const activeSummary = activeLevel === 'All' ? 'all academic levels' : `${activeLevel} programs`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section id="breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-navy font-medium">Academics</span>
            <ChevronRight size={14} />
            <span className="text-navy font-medium">Programs Offered</span>
          </nav>
        </div>
      </section>

      <section id="hero" className="bg-gradient-to-br from-navy via-navy to-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-6rem] right-[-4rem] w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[-5rem] w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-14 relative z-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Academics</p>
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Programs Offered</h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Explore undergraduate, postgraduate and doctoral programs across engineering, pharmacy, natural sciences, management, humanities and Buddhist studies.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-8 text-sm">
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{programs.length}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">Total Programs</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{levelCounts.UG}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">UG Programs</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{levelCounts.PG}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">PG Programs</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-gold block">{levelCounts.PhD}</span>
              <span className="text-gray-400 uppercase tracking-wide text-xs">PhD Programs</span>
            </div>
          </div>
        </div>
      </section>

      <section id="program-finder" className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-4 md:p-5 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by course, department, faculty, eligibility or career path"
                  className="w-full h-12 rounded-sm border border-gray-200 bg-gray-50 pl-11 pr-11 text-sm text-charcoal outline-none transition-colors focus:border-gold focus:bg-white"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {programLevels.map((level) => (
                  <button
                    key={level.label}
                    type="button"
                    onClick={() => setActiveLevel(level.label)}
                    className={`h-11 px-4 rounded-sm border text-sm font-semibold transition-all ${
                      activeLevel === level.label
                        ? 'border-gold bg-gold text-white shadow-sm'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {level.name} <span className="text-xs opacity-75">({levelCounts[level.label]})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy border-l-4 border-gold pl-4">Find Your Program</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Showing {filteredPrograms.length} program{filteredPrograms.length === 1 ? '' : 's'} across {activeSummary}.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-sm px-3 py-2 w-max">
              <SlidersHorizontal size={15} className="text-gold" />
              Search updates instantly
            </div>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredPrograms.map((program) => (
                <div key={program.id}>
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-sm p-10 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <BookOpen size={26} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">No programs found</h3>
              <p className="text-gray-500 mb-5">Try a different keyword or switch the academic level filter.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveLevel('All');
                }}
                className="inline-flex items-center justify-center bg-navy text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-navy-dark transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
