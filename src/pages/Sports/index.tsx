import { useState } from 'react';
import { Award, ChevronRight, Phone, Mail, MapPin, Trophy, Calendar } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'facilities' | 'teams' | 'achievements' | 'contact';
const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'teams', label: 'Teams & Trials' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const outdoorFacilities = [
  { name: 'Cricket Ground', desc: 'Full-size turf ground with practice nets and pavilion' },
  { name: 'Football Field', desc: 'FIFA-standard grass field with floodlights' },
  { name: 'Athletics Track', desc: '400m synthetic 8-lane running track' },
  { name: 'Volleyball Courts', desc: '4 outdoor courts with sand and hard surfaces' },
  { name: 'Basketball Courts', desc: '3 outdoor courts with flood lighting' },
  { name: 'Tennis Courts', desc: '2 hard courts with coaching available' },
  { name: 'Kabaddi & Kho-Kho', desc: 'Dedicated courts for traditional Indian sports' },
  { name: 'Swimming Pool', desc: '25m Olympic pool open to all students' },
];

const indoorFacilities = [
  { name: 'Multi-purpose Sports Hall', desc: 'Badminton, table tennis, gymnastics' },
  { name: 'Gymnasium', desc: 'Modern equipment, cardio and free weights' },
  { name: 'Yoga & Meditation Centre', desc: 'Daily sessions for all students' },
  { name: 'Boxing Ring', desc: 'Supervised training with certified coaches' },
  { name: 'Chess & Carrom Room', desc: 'Indoor games and tournaments' },
];

const teams = [
  { sport: 'Cricket', coach: 'Mr. S. Ravi Shankar', trials: 'July – August', competitions: 'Inter-University, State-level' },
  { sport: 'Football', coach: 'Mr. D. Narayana Rao', trials: 'July', competitions: 'South Zone Inter-University' },
  { sport: 'Athletics', coach: 'Mrs. K. Anitha', trials: 'June', competitions: 'AP State Championships, National Games' },
  { sport: 'Volleyball', coach: 'Mr. P. Ramana', trials: 'August', competitions: 'Inter-University, All India' },
  { sport: 'Basketball', coach: 'Mr. V. Suresh', trials: 'July', competitions: 'South Zone Inter-University' },
  { sport: 'Badminton', coach: 'Mr. G. Krishna Reddy', trials: 'August', competitions: 'Inter-University, State' },
  { sport: 'Tennis', coach: 'Mr. A. Kiran Kumar', trials: 'August', competitions: 'Inter-University' },
  { sport: 'Chess', coach: 'Mr. N. Bhaskar', trials: 'September', competitions: 'All India Inter-University' },
];

const achievements = [
  { year: '2025', title: 'Overall Championship — AP Inter-University Sports Meet', sport: 'General' },
  { year: '2025', title: 'Gold Medal — Cricket (Men)', sport: 'Cricket', level: 'South Zone' },
  { year: '2025', title: 'Silver Medal — Athletics (Women)', sport: 'Athletics', level: 'National' },
  { year: '2024', title: 'Best University in Sports — AP State Government Award', sport: 'General' },
  { year: '2024', title: 'Gold Medal — Kabaddi (Men)', sport: 'Kabaddi', level: 'South Zone' },
  { year: '2024', title: 'Bronze Medal — Swimming (Men)', sport: 'Swimming', level: 'National' },
  { year: '2023', title: 'Champions — All India Volleyball (Women)', sport: 'Volleyball', level: 'National' },
  { year: '2023', title: 'Gold Medal — 100m Sprint (Men)', sport: 'Athletics', level: 'National' },
];

export default function Sports() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section id="hero" className="bg-navy text-white pt-16 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <Award size={14} />
            <span>Campus Life</span>
            <ChevronRight size={13} />
            <span>Sports & Fitness</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-3">Sports & Physical Education</h1>
          <p className="text-gray-300 text-base max-w-xl">
            Nurturing champions on and off the field — world-class sports infrastructure, professional coaching, and a proud legacy of inter-university titles.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: 'Sports Disciplines', value: '20+' },
              { label: 'National Titles', value: '15+' },
              { label: 'Acres of Sports Ground', value: '50+' },
              { label: 'Certified Coaches', value: '12' },
            ].map((s) => (
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
                <h2 className="font-serif text-3xl text-navy mb-4">Sports at ANU</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Acharya Nagarjuna University has a rich tradition of sporting excellence. Spread across 50+ acres of dedicated sports infrastructure, the university provides world-class facilities for over 20 sports disciplines — from cricket and football to athletics, swimming, and traditional Indian games.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Department of Physical Education and Sports is staffed by 12 certified coaches who work with students at all levels — from beginners to national-level competitors. The university has won multiple inter-university and state championships and regularly produces athletes who go on to represent Andhra Pradesh and India.
                </p>
                <a href="#" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-gray-800 transition-colors">
                  View Sports Calendar <ChevronRight size={15} />
                </a>
              </div>

              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                <div className="bg-navy px-5 py-3 flex items-center gap-2">
                  <Calendar size={14} className="text-gold" />
                  <h3 className="text-sm font-bold text-gold uppercase tracking-wider">Upcoming Events</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {[
                    { event: 'Annual Sports Day', date: '15 Jul 2026' },
                    { event: 'Cricket Trials (Men & Women)', date: '20 Jul 2026' },
                    { event: 'Inter-College Football Tournament', date: '01 Aug 2026' },
                    { event: 'Athletics Meet — ANU Open', date: '10 Aug 2026' },
                    { event: 'Yoga Day Celebrations', date: '21 Jun 2026' },
                  ].map((item) => (
                    <li key={item.event} className="flex items-center justify-between px-5 py-3">
                      <span className="text-sm text-gray-700">{item.event}</span>
                      <span className="text-xs font-semibold text-navy whitespace-nowrap ml-4">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Facilities */}
        {activeTab === 'facilities' && (
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Outdoor Facilities</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {outdoorFacilities.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-5 hover:border-gold hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center mb-3">
                      <Trophy size={16} className="text-gold" />
                    </div>
                    <h4 className="font-semibold text-navy text-sm mb-1.5">{f.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-navy mb-6">Indoor Facilities</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {indoorFacilities.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-sm p-5 hover:border-gold hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-sm bg-navy/5 flex items-center justify-center mb-3">
                      <Award size={16} className="text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <h4 className="font-semibold text-navy text-sm mb-1.5">{f.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Teams & Trials */}
        {activeTab === 'teams' && (
          <div>
            <h2 className="font-serif text-3xl text-navy mb-2">University Teams & Trials</h2>
            <p className="text-gray-500 text-sm mb-8">All enrolled students are eligible to try out for university teams. Trials are conducted at the start of each academic year.</p>
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 bg-navy text-white text-xs font-bold uppercase tracking-wider">
                <div className="px-5 py-3">Sport</div>
                <div className="px-5 py-3">Coach</div>
                <div className="px-5 py-3">Trials</div>
                <div className="px-5 py-3">Competitions</div>
              </div>
              {teams.map((team, i) => (
                <div key={i} className={cn('grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}>
                  <div className="px-5 py-3.5 text-sm font-semibold text-navy">{team.sport}</div>
                  <div className="px-5 py-3.5 text-sm text-gray-600">{team.coach}</div>
                  <div className="px-5 py-3.5 text-sm text-gray-600">{team.trials}</div>
                  <div className="px-5 py-3.5 text-sm text-gray-600">{team.competitions}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-sm p-5 text-sm text-amber-800">
              <strong>Sports Scholarship:</strong> Outstanding sportspersons may be eligible for fee concessions and sports scholarships. Contact the Department of Physical Education for details.
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeTab === 'achievements' && (
          <div>
            <h2 className="font-serif text-3xl text-navy mb-2">Honours & Achievements</h2>
            <p className="text-gray-500 text-sm mb-8">A proud record of excellence in inter-university and national competitions.</p>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-sm p-5 hover:border-gold hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Trophy size={20} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy text-sm leading-snug">{a.title}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-xs font-bold text-gold">{a.year}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-500">{a.sport}</span>
                      {a.level && (
                        <>
                          <span className="text-xs text-gray-400">·</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-navy text-white px-2 py-0.5 rounded-sm">{a.level}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl space-y-6">
            <h2 className="font-serif text-3xl text-navy mb-6">Department of Physical Education</h2>
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-navy px-5 py-3">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider">Director of Physical Education</h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="font-semibold text-navy">Dr. M. Subba Rao</p>
                <p className="text-sm text-gray-500">Director, Department of Physical Education & Sports</p>
                <div className="space-y-2 pt-2">
                  <a href="tel:+918632346400" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" /> +91-863-234-6400
                  </a>
                  <a href="mailto:sports@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" /> sports@nagarjunauniversity.ac.in
                  </a>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Department of Physical Education, Near Sports Complex, ANU Campus, Nagarjuna Nagar – 522 510</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-sm p-6">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Sports Complex Hours</h3>
              {[
                { day: 'Monday – Saturday', time: '5:30 AM – 8:00 PM' },
                { day: 'Sunday', time: '6:00 AM – 12:00 PM' },
                { day: 'Public Holidays', time: 'Closed' },
              ].map((row) => (
                <div key={row.day} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{row.day}</span>
                  <span className="font-semibold text-navy">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
