import { useState } from 'react';
import { Calendar, ChevronRight, Tag, Clock, ExternalLink, Search, Newspaper, Mic } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'News' | 'Events' | 'Press Releases' | 'Gallery';
type NewsCategory = 'All' | 'Academic' | 'Research' | 'Achievements' | 'Admissions' | 'Infrastructure';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: Exclude<NewsCategory, 'All'>;
  excerpt: string;
  isNew?: boolean;
  isFeatured?: boolean;
  readTime?: string;
  image?: string;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  venue: string;
  type: 'Conference' | 'Seminar' | 'Workshop' | 'Cultural' | 'Sports' | 'Exam';
  description: string;
  isUpcoming?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'ANU Celebrates 50th Golden Jubilee — Mega Convocation Ceremony Held',
    date: '15 May 2026',
    category: 'Academic',
    excerpt: 'Acharya Nagarjuna University marked its 50th Golden Jubilee with a grand convocation ceremony attended by the Honourable Governor of Andhra Pradesh, faculty, staff, and over 5,000 graduating students.',
    isFeatured: true,
    isNew: true,
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'NAAC A+ Reaccreditation: ANU Achieves Highest Grade in AP',
    date: '10 May 2026',
    category: 'Achievements',
    excerpt: 'The National Assessment and Accreditation Council has awarded ANU the prestigious A+ grade, recognising excellence in academics, research infrastructure, and student outcomes.',
    isFeatured: true,
    isNew: true,
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'New Centre for AI & Data Science Inaugurated',
    date: '02 May 2026',
    category: 'Infrastructure',
    excerpt: 'Vice-Chancellor Prof. P.V. Narasimha Rao inaugurated the state-of-the-art Centre for Artificial Intelligence and Data Science, equipped with 200+ GPU workstations and industry collaboration labs.',
    isNew: true,
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'ANU Researchers Publish Landmark Study on Coastal Ecosystem Restoration',
    date: '28 Apr 2026',
    category: 'Research',
    excerpt: 'A multidisciplinary team from the Department of Environmental Sciences has published findings in Nature Sustainability on innovative mangrove restoration techniques along the Krishna delta.',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'B.Tech & M.Tech Admissions 2026-27: Applications Now Open',
    date: '20 Apr 2026',
    category: 'Admissions',
    excerpt: 'Online applications for undergraduate and postgraduate engineering programmes for the academic year 2026-27 are now open. Merit-based admissions via AP EAMCET and PGECET rank.',
    isNew: true,
    readTime: '2 min read',
  },
  {
    id: 6,
    title: 'MoU Signed with IIT Bombay for Joint Research & Faculty Exchange',
    date: '15 Apr 2026',
    category: 'Academic',
    excerpt: 'ANU signed a Memorandum of Understanding with the Indian Institute of Technology, Bombay for collaborative research, joint doctoral programmes, and faculty exchange initiatives.',
    readTime: '3 min read',
  },
  {
    id: 7,
    title: 'ANU Law Students Win National Moot Court Competition',
    date: '08 Apr 2026',
    category: 'Achievements',
    excerpt: 'The College of Law team emerged victorious at the 14th National Moot Court Competition held at NALSAR University of Law, Hyderabad, beating 42 teams from across the country.',
    readTime: '2 min read',
  },
  {
    id: 8,
    title: 'PhD Admissions 2026: Entrance Test Results Announced',
    date: '01 Apr 2026',
    category: 'Admissions',
    excerpt: 'Results of the ANU Research Entrance Test (ANURET 2026) for PhD admissions across 48 research departments have been declared. Candidates may check the official portal.',
    readTime: '2 min read',
  },
  {
    id: 9,
    title: 'Smart Classroom Initiative Covers All 18 University Colleges',
    date: '25 Mar 2026',
    category: 'Infrastructure',
    excerpt: 'Under the Digital Campus initiative, all 18 constituent colleges have been equipped with smart classrooms featuring interactive flat panel displays, LMS integration, and high-speed Wi-Fi.',
    readTime: '3 min read',
  },
  {
    id: 10,
    title: 'ANU Pharmacy Dept. Receives DST Grant of ₹2.5 Crore for Drug Discovery Research',
    date: '18 Mar 2026',
    category: 'Research',
    excerpt: 'The Department of Pharmaceutical Sciences has been awarded a prestigious DST-SERB grant for pioneering research on novel anti-cancer drug compounds derived from marine organisms.',
    readTime: '4 min read',
  },
  {
    id: 11,
    title: 'International Conference on Sustainable Agriculture — Call for Papers',
    date: '10 Mar 2026',
    category: 'Academic',
    excerpt: 'The College of Agricultural Sciences invites original research papers for the International Conference on Sustainable Agriculture and Food Security, scheduled for July 2026.',
    readTime: '2 min read',
  },
  {
    id: 12,
    title: 'ANU Ranks in Top 100 Indian Universities — NIRF 2026',
    date: '05 Mar 2026',
    category: 'Achievements',
    excerpt: 'Acharya Nagarjuna University has been ranked among the Top 100 universities in India in the National Institutional Ranking Framework 2026, with notable improvements in Research and Outreach parameters.',
    readTime: '3 min read',
  },
];

const events: EventItem[] = [
  {
    id: 1,
    title: 'International Conference on Sustainable Agriculture & Food Security',
    date: '14 Jul 2026',
    endDate: '16 Jul 2026',
    time: '9:00 AM',
    venue: 'ANU Convention Hall, Nagarjuna Nagar',
    type: 'Conference',
    description: 'Three-day international conference bringing together researchers, policy makers, and industry experts to address challenges in sustainable agriculture.',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Golden Jubilee Annual Sports Meet 2026',
    date: '20 Jun 2026',
    endDate: '25 Jun 2026',
    time: '8:00 AM',
    venue: 'ANU Sports Complex',
    type: 'Sports',
    description: 'Week-long inter-college sports competition covering 20+ disciplines including athletics, cricket, football, volleyball, and aquatics.',
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'National Seminar on Cyber Law and Digital Rights',
    date: '18 Jun 2026',
    time: '10:00 AM',
    venue: 'College of Law Seminar Hall',
    type: 'Seminar',
    description: 'Day-long national seminar on emerging challenges in cyber law, data privacy, and digital rights in the context of India\'s evolving legal framework.',
    isUpcoming: true,
  },
  {
    id: 4,
    title: 'Workshop on Machine Learning for Healthcare Applications',
    date: '10 Jun 2026',
    endDate: '11 Jun 2026',
    time: '9:30 AM',
    venue: 'AI & Data Science Centre, Block C',
    type: 'Workshop',
    description: 'Two-day hands-on workshop for research scholars and faculty on applying ML models to healthcare diagnostics, drug discovery, and epidemiology.',
    isUpcoming: true,
  },
  {
    id: 5,
    title: 'Swarangana 2026 — Annual Cultural Festival',
    date: '05 Jun 2026',
    endDate: '07 Jun 2026',
    time: '5:00 PM',
    venue: 'Open-Air Amphitheatre, ANU Campus',
    type: 'Cultural',
    description: 'ANU\'s flagship three-day cultural festival featuring classical and folk performances, fine arts exhibitions, literary events, and celebrity musical night.',
    isUpcoming: true,
  },
  {
    id: 6,
    title: 'Ph.D. Research Entrance Test (ANURET 2026)',
    date: '22 Jun 2026',
    time: '10:00 AM – 1:00 PM',
    venue: 'Examination Centres — Guntur, Vijayawada, Hyderabad',
    type: 'Exam',
    description: 'Common entrance test for admission to PhD programmes across all departments for the academic year 2026-27.',
    isUpcoming: true,
  },
  {
    id: 7,
    title: 'Alumni Meet 2026 — Silver Jubilee Batch Reunion',
    date: '12 Jul 2026',
    time: '10:00 AM',
    venue: 'ANU Convention Hall',
    type: 'Cultural',
    description: 'Grand reunion of the batch of 2001 celebrating 25 years, alongside a networking session for all alumni.',
    isUpcoming: true,
  },
  {
    id: 8,
    title: 'Industry Connect: Campus Recruitment Drive 2026',
    date: '01 Jul 2026',
    endDate: '05 Jul 2026',
    time: '9:00 AM',
    venue: 'Placement Cell, Admin Block',
    type: 'Workshop',
    description: 'Week-long campus recruitment drive featuring 40+ companies across IT, pharma, engineering, and finance sectors.',
    isUpcoming: true,
  },
];

const pressReleases = [
  { id: 1, title: 'ANU Press Release: NAAC A+ Accreditation Achievement', date: '10 May 2026', source: 'University Communications' },
  { id: 2, title: 'Statement by Vice-Chancellor on Golden Jubilee Initiatives', date: '01 May 2026', source: 'Office of the Vice-Chancellor' },
  { id: 3, title: 'ANU Signs MoU with IIT Bombay for Joint Research', date: '15 Apr 2026', source: 'University Communications' },
  { id: 4, title: 'DST Grant of ₹2.5 Crore Awarded to ANU Pharmacy Dept.', date: '18 Mar 2026', source: 'Research Division' },
  { id: 5, title: 'ANU Ranked in Top 100 Universities — NIRF 2026 Official Statement', date: '05 Mar 2026', source: 'University Communications' },
  { id: 6, title: 'New AI & Data Science Centre: Inauguration Press Note', date: '02 May 2026', source: 'University Communications' },
  { id: 7, title: 'Smart Classroom Initiative Completion — Official Statement', date: '25 Mar 2026', source: 'Infrastructure Wing' },
  { id: 8, title: 'ANU Law Students Win National Moot Court — Press Note', date: '08 Apr 2026', source: 'College of Law' },
];

const eventTypeColors: Record<EventItem['type'], string> = {
  Conference: 'bg-purple-100 text-purple-700',
  Seminar: 'bg-blue-100 text-blue-700',
  Workshop: 'bg-green-100 text-green-700',
  Cultural: 'bg-pink-100 text-pink-700',
  Sports: 'bg-orange-100 text-orange-700',
  Exam: 'bg-red-100 text-red-700',
};

const newsCategories: NewsCategory[] = ['All', 'Academic', 'Research', 'Achievements', 'Admissions', 'Infrastructure'];

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<Tab>('News');
  const [newsCategory, setNewsCategory] = useState<NewsCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory = newsCategory === 'All' || item.category === newsCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.filter((n) => n.isFeatured);
  const upcomingEvents = events.filter((e) => e.isUpcoming);

  const tabs: Tab[] = ['News', 'Events', 'Press Releases', 'Gallery'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section id="news-header" className="bg-navy text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold/70 uppercase tracking-widest mb-3">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-gold">News & Events</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">News &amp; Events</h1>
          <p className="mt-2 text-gray-300 text-sm max-w-xl">
            Stay updated with the latest happenings, achievements, and upcoming events at Acharya Nagarjuna University.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-colors',
                  activeTab === tab
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* NEWS TAB */}
      {activeTab === 'News' && (
        <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Featured News */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {featuredNews.map((item) => (
              <div
                key={item.id}
                className="bg-navy text-white rounded-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="h-2 bg-gold w-full" />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-gold text-white px-2 py-0.5 rounded-sm">
                      Featured
                    </span>
                    {item.isNew && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-2 py-0.5 rounded-sm">
                        New
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 ml-auto">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">{item.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.readTime}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gold font-semibold flex items-center gap-1 group-hover:underline">
                      Read more <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNewsCategory(cat)}
                  className={cn(
                    'px-3 py-1.5 text-xs font-semibold rounded-sm border transition-colors',
                    newsCategory === cat
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* News List */}
          <div className="grid gap-4">
            {filteredNews
              .filter((n) => !n.isFeatured || newsCategory !== 'All' || searchQuery)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-sm p-5 flex gap-4 group cursor-pointer hover:border-gold/50 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-1 bg-gold rounded-full self-stretch" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={cn(
                        'text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm',
                        item.category === 'Achievements' ? 'bg-gold/10 text-gold' :
                        item.category === 'Research' ? 'bg-purple-50 text-purple-600' :
                        item.category === 'Admissions' ? 'bg-green-50 text-green-600' :
                        item.category === 'Infrastructure' ? 'bg-blue-50 text-blue-600' :
                        'bg-navy/10 text-navy'
                      )}>
                        <Tag size={9} className="inline mr-1" />
                        {item.category}
                      </span>
                      {item.isNew && (
                        <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-sm uppercase tracking-widest">
                          New
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-navy leading-snug mb-1 group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {item.date}
                      </span>
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {item.readTime}
                        </span>
                      )}
                      <span className="ml-auto text-gold font-semibold flex items-center gap-1 group-hover:underline">
                        Read more <ChevronRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            {filteredNews.filter((n) => !n.isFeatured || newsCategory !== 'All' || searchQuery).length === 0 && (
              <div className="text-center py-12 text-gray-400 text-sm">No news found matching your filters.</div>
            )}
          </div>
        </section>
      )}

      {/* EVENTS TAB */}
      {activeTab === 'Events' && (
        <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-navy">Upcoming Events</h2>
            <span className="text-xs text-gray-400 bg-white border border-gray-200 px-3 py-1.5 rounded-sm">
              {upcomingEvents.length} events scheduled
            </span>
          </div>
          <div className="grid gap-5">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:border-gold/40 transition-all group"
              >
                <div className="flex">
                  {/* Date Block */}
                  <div className="flex-shrink-0 bg-navy text-white flex flex-col items-center justify-center w-20 px-3 py-5">
                    <span className="text-2xl font-bold leading-none">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gold mt-1">
                      {event.date.split(' ')[1]}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">
                      {event.date.split(' ')[2]}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-navy leading-snug flex-1 group-hover:text-gold transition-colors">
                        {event.title}
                      </h3>
                      <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm flex-shrink-0', eventTypeColors[event.type])}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-gold" />
                        {event.time}
                        {event.endDate && <span className="text-gray-400 ml-1">— ends {event.endDate}</span>}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} className="text-gold" />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PRESS RELEASES TAB */}
      {activeTab === 'Press Releases' && (
        <section id="press" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Mic size={18} className="text-gold" />
              <h2 className="text-lg font-bold text-navy">Official Press Releases</h2>
            </div>
            <div className="grid gap-3">
              {pressReleases.map((pr) => (
                <div
                  key={pr.id}
                  className="bg-white border border-gray-200 rounded-sm p-5 flex items-center gap-4 group cursor-pointer hover:border-gold/50 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-navy/5 rounded-sm flex items-center justify-center">
                    <Newspaper size={14} className="text-navy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-navy group-hover:text-gold transition-colors leading-snug">
                      {pr.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {pr.date}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span>{pr.source}</span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-gray-300 group-hover:text-gold transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-6 text-center">
              For media queries, contact{' '}
              <a href="mailto:communications@nagarjunauniversity.ac.in" className="text-navy hover:text-gold transition-colors font-medium">
                communications@nagarjunauniversity.ac.in
              </a>
            </p>
          </div>
        </section>
      )}

      {/* GALLERY TAB */}
      {activeTab === 'Gallery' && (
        <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center py-16 text-gray-400">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={24} className="text-gray-300" />
            </div>
            <h3 className="text-base font-semibold text-gray-500 mb-2">Photo Gallery Coming Soon</h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              We are curating high-quality photos from recent events and campus life. Check back soon.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
