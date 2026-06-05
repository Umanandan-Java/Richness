import { useState } from 'react';
import { MapPin, Phone, Mail, Wifi, Utensils, Shield, Zap, Droplets, ChevronRight, Users, Home, Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = 'overview' | 'rooms' | 'amenities' | 'rules' | 'contact';
const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'rooms', label: 'Rooms & Fees' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'rules', label: 'Rules & Guidelines' },
  { id: 'contact', label: 'Contact' },
];

const hostels = [
  {
    id: 'bh1',
    type: 'Boys',
    name: 'Nagarjuna Boys Hostel – Block A',
    capacity: 400,
    floors: 4,
    warden: 'Mr. K. Ramakrishna',
    phone: '+91-863-234-6101',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-700',
  },
  {
    id: 'bh2',
    type: 'Boys',
    name: 'Nagarjuna Boys Hostel – Block B',
    capacity: 350,
    floors: 4,
    warden: 'Mr. P. Suresh Babu',
    phone: '+91-863-234-6102',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-700',
  },
  {
    id: 'gh1',
    type: 'Girls',
    name: 'Saraswathi Girls Hostel',
    capacity: 500,
    floors: 5,
    warden: 'Mrs. D. Vijaya Lakshmi',
    phone: '+91-863-234-6201',
    color: 'bg-pink-50 border-pink-200',
    badge: 'bg-pink-700',
  },
  {
    id: 'gh2',
    type: 'Girls',
    name: 'Gayathri Girls Hostel',
    capacity: 300,
    floors: 3,
    warden: 'Mrs. S. Padmavathi',
    phone: '+91-863-234-6202',
    color: 'bg-pink-50 border-pink-200',
    badge: 'bg-pink-700',
  },
];

const roomTypes = [
  {
    type: 'Single Occupancy',
    desc: 'Private room with attached bathroom',
    fee: '₹45,000 / year',
    features: ['Attached bathroom', 'Study table & chair', 'Wardrobe', 'Fan & light', 'Window'],
    available: 'Boys & Girls',
  },
  {
    type: 'Double Sharing',
    desc: 'Two students sharing one room',
    fee: '₹32,000 / year',
    features: ['Common bathroom', 'Two study tables', 'Two wardrobes', 'Fan & light', 'Window'],
    available: 'Boys & Girls',
  },
  {
    type: 'Triple Sharing',
    desc: 'Three students sharing one room',
    fee: '₹24,000 / year',
    features: ['Common bathroom', 'Three study tables', 'Shared wardrobe', 'Fan & light'],
    available: 'Boys only',
  },
];

const amenities = [
  { icon: Wifi, label: 'High-Speed Wi-Fi', desc: '24×7 internet in all blocks' },
  { icon: Utensils, label: 'Dining Hall', desc: 'Hygienic meals, 3 times daily' },
  { icon: Shield, label: '24×7 Security', desc: 'CCTV and security personnel' },
  { icon: Zap, label: 'Power Backup', desc: 'Uninterrupted electricity supply' },
  { icon: Droplets, label: 'Hot Water', desc: 'Solar-powered hot water system' },
  { icon: Home, label: 'Common Room', desc: 'TV, indoor games, reading area' },
  { icon: Users, label: 'Medical Aid', desc: 'First-aid and nurse on campus' },
  { icon: Clock, label: 'Laundry', desc: 'Coin-operated washing machines' },
];

const rules = [
  { heading: 'Entry & Exit', points: ['Students must carry their ID cards at all times.', 'Entry/exit timings: Boys 10:30 PM, Girls 9:00 PM.', 'Overnight absence requires written permission from parent/guardian.', 'Visitors are allowed only in designated visiting areas.'] },
  { heading: 'Conduct', points: ['Ragging in any form is strictly prohibited — offenders will be expelled.', 'Maintain silence in rooms during study hours (8:00 PM – 10:00 PM).', 'Consumption of alcohol, tobacco, or narcotics is strictly banned.', 'Disputes must be reported to the warden, not resolved personally.'] },
  { heading: 'Room Maintenance', points: ['Students are responsible for cleanliness of their rooms.', 'Damage to furniture or fixtures will be charged to the occupant.', 'Electrical appliances (heaters, irons) are not permitted in rooms.', 'Room inspection may be conducted by wardens periodically.'] },
  { heading: 'Mess & Dining', points: ['Meal timings: Breakfast 7–8:30 AM, Lunch 12–1:30 PM, Dinner 7:30–9 PM.', 'Mess fees are non-refundable once paid.', 'Students must maintain hygiene in the dining hall.', 'Outside food delivery is restricted after 9 PM.'] },
];

export default function Hostel() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section id="hero" className="bg-navy text-white pt-16 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <Home size={14} />
            <span>Campus Life</span>
            <ChevronRight size={13} />
            <span>Hostels</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-3">Hostel & Accommodation</h1>
          <p className="text-gray-300 text-base max-w-xl">
            Safe, comfortable and affordable on-campus housing for students — fostering community, discipline and academic focus.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: 'Total Capacity', value: '1,550+' },
              { label: 'Hostel Blocks', value: '4' },
              { label: 'Boys Hostels', value: '2' },
              { label: 'Girls Hostels', value: '2' },
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
          <div className="flex overflow-x-auto scrollbar-hide">
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-4">A Home Away from Home</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Acharya Nagarjuna University provides on-campus residential facilities for both boys and girls, ensuring a secure and enriching living environment. The hostels are designed to support academic focus while fostering a vibrant student community.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With modern amenities, round-the-clock security, and well-maintained facilities, our hostels are home to over 1,500 students from across India and abroad. Resident students benefit from easy access to the library, sports facilities, and academic departments.
                </p>
                <a href="#" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Apply for Hostel Accommodation
                  <ChevronRight size={15} />
                </a>
              </div>
              <img
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1779004000666_0.jpg"
                alt="Hostel campus"
                className="rounded-sm object-cover w-full h-64 lg:h-auto"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="font-serif text-2xl text-navy mb-6">Hostel Blocks</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hostels.map((h) => (
                  <div key={h.id} className={cn('border rounded-sm p-5', h.color)}>
                    <span className={cn('text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm', h.badge)}>
                      {h.type}
                    </span>
                    <h4 className="font-semibold text-navy mt-3 mb-1 text-sm leading-snug">{h.name}</h4>
                    <p className="text-xs text-gray-500 mb-3">{h.floors} Floors · {h.capacity} Students</p>
                    <div className="border-t border-gray-200 pt-3 space-y-1">
                      <p className="text-xs text-gray-600 font-medium">Warden: {h.warden}</p>
                      <a href={`tel:${h.phone}`} className="text-xs text-navy hover:text-gold transition-colors flex items-center gap-1">
                        <Phone size={11} />{h.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rooms & Fees Tab */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-navy mb-6">Room Types & Annual Fees</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {roomTypes.map((r, i) => (
                <div key={i} className={cn('bg-white border rounded-sm overflow-hidden shadow-sm', i === 0 && 'border-gold ring-1 ring-gold/20')}>
                  {i === 0 && <div className="bg-gold text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">Most Popular</div>}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-navy mb-1">{r.type}</h3>
                    <p className="text-sm text-gray-500 mb-4">{r.desc}</p>
                    <p className="text-2xl font-bold text-gold mb-1">{r.fee}</p>
                    <p className="text-xs text-gray-400 mb-5">Available for: {r.available}</p>
                    <ul className="space-y-2 border-t border-gray-100 pt-4">
                      {r.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-sm p-5 text-sm text-amber-800">
              <strong>Note:</strong> Fees are per academic year (10 months) and include mess charges. One-time refundable security deposit of ₹5,000 is applicable. Fee is subject to revision each year.
            </div>
          </div>
        )}

        {/* Amenities Tab */}
        {activeTab === 'amenities' && (
          <div>
            <h2 className="font-serif text-3xl text-navy mb-8">Facilities & Amenities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {amenities.map((a, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-sm p-6 text-center hover:border-gold hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-sm bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <a.icon size={22} className="text-navy group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-navy text-sm mb-1">{a.label}</h4>
                  <p className="text-xs text-gray-500">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules Tab */}
        {activeTab === 'rules' && (
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl text-navy mb-2">Rules & Guidelines</h2>
            <p className="text-gray-500 text-sm mb-8">All hostel residents are required to abide by the following rules. Violations may result in disciplinary action.</p>
            <div className="space-y-6">
              {rules.map((section, i) => (
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
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl space-y-6">
            <h2 className="font-serif text-3xl text-navy mb-6">Hostel Administration</h2>
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-navy px-5 py-3">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider">Chief Warden</h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="font-semibold text-navy">Prof. Dr. T. Subrahmanyam</p>
                <p className="text-sm text-gray-500">Chief Warden, Student Hostels</p>
                <div className="space-y-2 pt-2">
                  <a href="tel:+918632346100" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" /> +91-863-234-6100
                  </a>
                  <a href="mailto:hostel@nagarjunauniversity.ac.in" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" /> hostel@nagarjunauniversity.ac.in
                  </a>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Hostel Administration Office, Near Main Gate, ANU Campus, Nagarjuna Nagar – 522 510</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-sm p-6 space-y-3">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Office Hours</h3>
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
                { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
                { day: 'Sunday & Holidays', time: 'Closed (Emergency contact available)' },
              ].map((row) => (
                <div key={row.day} className="flex justify-between text-sm">
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
