import { useState } from 'react';
import { AlertTriangle, FileText, Download, Calendar, ChevronRight, Bell, Search, Filter } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Category = 'All' | 'Examinations' | 'Results' | 'Timetables' | 'Admissions' | 'Circulars';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: Exclude<Category, 'All'>;
  isNew?: boolean;
  isUrgent?: boolean;
  downloadUrl?: string;
  description?: string;
}

const urgentAlerts = [
  {
    id: 1,
    title: 'B.Tech IV Year (R20) Supplementary Examination Results — June 2026 Declared',
    date: '18 May 2026',
    type: 'result',
  },
  {
    id: 2,
    title: 'M.Tech I Semester Regular Examinations scheduled from 10 June 2026 — Hall Tickets available',
    date: '15 May 2026',
    type: 'exam',
  },
  {
    id: 3,
    title: 'Last date for submission of Examination Fee (without late fee) — 25 May 2026',
    date: '12 May 2026',
    type: 'deadline',
  },
];

const notices: Notice[] = [
  // Examinations
  {
    id: 101,
    title: 'B.Tech I-IV Year Regular & Supplementary Examinations — June/July 2026 Notification',
    date: '17 May 2026',
    category: 'Examinations',
    isNew: true,
    isUrgent: true,
    downloadUrl: '#',
    description: 'Examination fee payment schedule and important instructions for all B.Tech students.',
  },
  {
    id: 102,
    title: 'M.Sc. / M.Com / MA Regular Examinations June 2026 — Centre Allotment',
    date: '14 May 2026',
    category: 'Examinations',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 103,
    title: 'Ph.D. Entrance Test 2026 — Schedule and Guidelines',
    date: '10 May 2026',
    category: 'Examinations',
    downloadUrl: '#',
  },
  {
    id: 104,
    title: 'LL.B. III Year Final Examination — May 2026 Instructions',
    date: '08 May 2026',
    category: 'Examinations',
    downloadUrl: '#',
  },
  {
    id: 105,
    title: 'B.Pharmacy IV Year Supplementary Examinations — Notification',
    date: '02 May 2026',
    category: 'Examinations',
    downloadUrl: '#',
  },

  // Results
  {
    id: 201,
    title: 'B.Tech IV Year (R20) Supplementary Results — June 2026',
    date: '18 May 2026',
    category: 'Results',
    isNew: true,
    isUrgent: true,
    downloadUrl: '#',
    description: 'Results for B.Tech IV Year Supplementary Examinations held in April 2026.',
  },
  {
    id: 202,
    title: 'M.Tech I & II Semester Regular Results — April 2026',
    date: '12 May 2026',
    category: 'Results',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 203,
    title: 'M.A. / M.Sc. / M.Com II Semester Results — 2025-26',
    date: '06 May 2026',
    category: 'Results',
    downloadUrl: '#',
  },
  {
    id: 204,
    title: 'LL.M. I Year Annual Examination Results — 2025-26',
    date: '28 Apr 2026',
    category: 'Results',
    downloadUrl: '#',
  },
  {
    id: 205,
    title: 'B.Sc. III Year Final Examination Results — 2025-26',
    date: '20 Apr 2026',
    category: 'Results',
    downloadUrl: '#',
  },

  // Timetables
  {
    id: 301,
    title: 'B.Tech I-IV Year Examination Timetable — June/July 2026',
    date: '15 May 2026',
    category: 'Timetables',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 302,
    title: 'M.Tech I Semester Regular Examination Timetable — June 2026',
    date: '13 May 2026',
    category: 'Timetables',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 303,
    title: 'PG (Arts & Science) End Semester Examination Timetable — June 2026',
    date: '09 May 2026',
    category: 'Timetables',
    downloadUrl: '#',
  },
  {
    id: 304,
    title: 'B.Pharmacy III Year Examination Timetable — May 2026',
    date: '01 May 2026',
    category: 'Timetables',
    downloadUrl: '#',
  },

  // Admissions
  {
    id: 401,
    title: 'Admissions Open 2026-27 — B.Tech, M.Tech, MBA, MCA, M.Sc. and more',
    date: '01 May 2026',
    category: 'Admissions',
    isNew: true,
    downloadUrl: '#',
    description: 'Applications invited for all UG, PG and research programmes for the academic year 2026-27.',
  },
  {
    id: 402,
    title: 'Ph.D. Admissions 2026-27 — Notification for All Departments',
    date: '05 May 2026',
    category: 'Admissions',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 403,
    title: 'International Students Admissions 2026-27 — Application Portal Open',
    date: '28 Apr 2026',
    category: 'Admissions',
    downloadUrl: '#',
  },
  {
    id: 404,
    title: 'Spot Admissions for B.Sc. / B.Com / B.A. (Lateral Entry) — 2026-27',
    date: '20 Apr 2026',
    category: 'Admissions',
    downloadUrl: '#',
  },

  // Circulars
  {
    id: 501,
    title: 'Academic Calendar 2026-27 — Approved by Academic Senate',
    date: '10 May 2026',
    category: 'Circulars',
    isNew: true,
    downloadUrl: '#',
  },
  {
    id: 502,
    title: 'Anti-Ragging Committee — Undertaking Submission Deadline Extended to 31 May 2026',
    date: '08 May 2026',
    category: 'Circulars',
    isNew: true,
  },
  {
    id: 503,
    title: 'Revised Fee Structure for PG Programmes — 2026-27',
    date: '05 May 2026',
    category: 'Circulars',
    downloadUrl: '#',
  },
  {
    id: 504,
    title: 'University Sports Meet 2026 — Registration Guidelines for Colleges',
    date: '29 Apr 2026',
    category: 'Circulars',
  },
  {
    id: 505,
    title: 'Scholarship Application Portal Open — SC/ST/BC/EBC Categories',
    date: '22 Apr 2026',
    category: 'Circulars',
    downloadUrl: '#',
  },
];

const categories: Category[] = ['All', 'Examinations', 'Results', 'Timetables', 'Admissions', 'Circulars'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Examinations: 'bg-blue-50 text-blue-700 border-blue-200',
  Results: 'bg-green-50 text-green-700 border-green-200',
  Timetables: 'bg-purple-50 text-purple-700 border-purple-200',
  Admissions: 'bg-amber-50 text-amber-700 border-amber-200',
  Circulars: 'bg-gray-100 text-gray-700 border-gray-200',
};

const urgentTypeColors: Record<string, string> = {
  result: 'bg-green-600',
  exam: 'bg-blue-700',
  deadline: 'bg-red-600',
};

const urgentTypeLabels: Record<string, string> = {
  result: 'Result',
  exam: 'Exam',
  deadline: 'Deadline',
};

export default function Notices() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = notices.filter((n) => {
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const newCount = notices.filter((n) => n.isNew).length;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section id="hero" className="bg-navy text-white pt-16 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                <Bell size={14} />
                <span>Official Notices</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-3">Notices & Notifications</h1>
              <p className="text-gray-300 text-base max-w-xl">
                Stay updated with examination schedules, results, timetables, admissions and official circulars from Acharya Nagarjuna University.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-3 rounded-sm">
              <Bell size={16} className="text-gold" />
              <span className="text-sm font-semibold">{newCount} new notices this week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Alerts */}
      <section id="urgent-alerts" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-red-600" />
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider">Priority Alerts</h2>
          </div>
          <div className="space-y-3">
            {urgentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-sm group cursor-pointer hover:border-red-300 transition-colors">
                <span className={cn('text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm flex-shrink-0 mt-0.5', urgentTypeColors[alert.type])}>
                  {urgentTypeLabels[alert.type]}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-red-700 transition-colors leading-snug">
                    {alert.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                </div>
                <ChevronRight size={16} className="text-red-400 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Notices */}
      <section id="notices-board" className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Filters + List */}
          <div className="flex-1 min-w-0">

            {/* Search + Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-sm bg-white focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Filter size={13} />
                <span>{filtered.length} notice{filtered.length !== 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => {
                const count = cat === 'All' ? notices.length : notices.filter((n) => n.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'px-4 py-2 text-sm font-semibold rounded-sm border transition-colors',
                      activeCategory === cat
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
                    )}
                  >
                    {cat}
                    <span className={cn('ml-2 text-xs font-normal', activeCategory === cat ? 'text-white/70' : 'text-gray-400')}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Notices List */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <FileText size={32} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">No notices found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-px border border-gray-200 rounded-sm overflow-hidden bg-white">
                {filtered.map((notice, i) => (
                  <div
                    key={notice.id}
                    className={cn(
                      'flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group cursor-pointer',
                      i !== filtered.length - 1 && 'border-b border-gray-100'
                    )}
                  >
                    {/* Date column */}
                    <div className="flex-shrink-0 w-14 text-center">
                      <p className="text-lg font-bold text-navy leading-none">
                        {notice.date.split(' ')[0]}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">
                        {notice.date.split(' ').slice(1).join(' ')}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-px self-stretch bg-gray-200 flex-shrink-0" />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={cn('text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border', categoryColors[notice.category])}>
                          {notice.category}
                        </span>
                        {notice.isNew && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gold text-white rounded-sm">
                            New
                          </span>
                        )}
                        {notice.isUrgent && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-600 text-white rounded-sm">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-navy transition-colors leading-snug">
                        {notice.title}
                      </p>
                      {notice.description && (
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{notice.description}</p>
                      )}
                    </div>

                    {/* Download */}
                    {notice.downloadUrl ? (
                      <a
                        href={notice.downloadUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors mt-0.5"
                        aria-label="Download notice"
                      >
                        <Download size={14} />
                        <span className="hidden sm:inline">PDF</span>
                      </a>
                    ) : (
                      <div className="w-12 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-72 flex-shrink-0 space-y-6">

            {/* Academic Calendar */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-gold text-white px-5 py-3">
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <Calendar size={14} />
                  Key Dates 2026-27
                </h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {[
                  { event: 'Odd Semester Begins', date: '01 Jul 2026' },
                  { event: 'Last date for Exam Fee', date: '25 May 2026' },
                  { event: 'B.Tech Exams Begin', date: '10 Jun 2026' },
                  { event: 'Ph.D. Entrance Test', date: '22 Jun 2026' },
                  { event: 'Results (PG Sem II)', date: 'Jul 2026' },
                ].map((item) => (
                  <li key={item.event} className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs text-gray-700 leading-snug flex-1">{item.event}</span>
                    <span className="text-xs font-semibold text-navy ml-3 whitespace-nowrap">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-navy text-white rounded-sm p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-3">Examination Branch</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                For queries regarding examinations, results, and hall tickets:
              </p>
              <a href="mailto:exams@nagarjunauniversity.ac.in" className="text-xs text-white hover:text-gold transition-colors break-all">
                exams@nagarjunauniversity.ac.in
              </a>
              <p className="text-xs text-gray-300 mt-2">+91 863 234 6001</p>
              <p className="text-xs text-gray-400 mt-1">Mon–Sat, 10am–5pm</p>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
}
