import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, Building2, Users, BookOpen, FlaskConical, GraduationCap, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageHero } from '@/components/PageHero';
import { TabContainer } from '@/components/TabContainer';

type Tab = 'general' | 'departments' | 'directions';

const tabs: { id: Tab; label: string }[] = [
  { id: 'general', label: 'General Enquiry' },
  { id: 'departments', label: 'Department Contacts' },
  { id: 'directions', label: 'Find Us' },
];

const offices = [
  {
    icon: GraduationCap,
    name: 'Admissions Office',
    email: 'admissions@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6000',
    hours: 'Mon–Sat, 9:30 AM – 5:00 PM',
  },
  {
    icon: BookOpen,
    name: 'Examinations Branch',
    email: 'exams@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6001',
    hours: 'Mon–Sat, 10:00 AM – 5:00 PM',
  },
  {
    icon: FlaskConical,
    name: 'Research Division',
    email: 'research@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6010',
    hours: 'Mon–Fri, 9:30 AM – 5:30 PM',
  },
  {
    icon: Users,
    name: 'Training & Placement Cell',
    email: 'placements@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6050',
    hours: 'Mon–Sat, 9:30 AM – 5:30 PM',
  },
  {
    icon: Globe,
    name: 'International Relations Office',
    email: 'international@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6020',
    hours: 'Mon–Fri, 9:30 AM – 5:30 PM',
  },
  {
    icon: Building2,
    name: 'Registrar\'s Office',
    email: 'registrar@nagarjunauniversity.ac.in',
    phone: '+91 863 234 6002',
    hours: 'Mon–Fri, 10:00 AM – 5:00 PM',
  },
];

const deptContacts = [
  { college: 'College of Engineering & Technology', hod: 'Prof. Dr. K. Srinivas Rao', email: 'cet@nagarjunauniversity.ac.in', phone: '+91 863 234 6100' },
  { college: 'College of Arts & Social Sciences', hod: 'Prof. Dr. M. Subrahmanya Sarma', email: 'cas@nagarjunauniversity.ac.in', phone: '+91 863 234 6110' },
  { college: 'College of Law', hod: 'Prof. Dr. V.S. Murthy', email: 'law@nagarjunauniversity.ac.in', phone: '+91 863 234 6120' },
  { college: 'College of Commerce & Management', hod: 'Prof. Dr. P. Ramana', email: 'commerce@nagarjunauniversity.ac.in', phone: '+91 863 234 6130' },
  { college: 'College of Pharmaceutical Sciences', hod: 'Prof. Dr. B.S. Reddy', email: 'pharmacy@nagarjunauniversity.ac.in', phone: '+91 863 234 6140' },
  { college: 'College of Agricultural Sciences', hod: 'Prof. Dr. G.V. Rao', email: 'agriculture@nagarjunauniversity.ac.in', phone: '+91 863 234 6150' },
  { college: 'College of Education', hod: 'Prof. Dr. L. Naga Devi', email: 'education@nagarjunauniversity.ac.in', phone: '+91 863 234 6160' },
  { college: 'College of Sanskrit & Vedic Studies', hod: 'Prof. Dr. K.V. Sharma', email: 'sanskrit@nagarjunauniversity.ac.in', phone: '+91 863 234 6170' },
];

type EnquiryType = 'Admissions' | 'Examinations' | 'Research / PhD' | 'Placements' | 'International' | 'General';
const enquiryTypes: EnquiryType[] = ['Admissions', 'Examinations', 'Research / PhD', 'Placements', 'International', 'General'];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'General' as EnquiryType, message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contact Us"
        description="We're here to help. Reach out to the right office or send us a general enquiry."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', isCurrent: true },
        ]}
        actions={
          <div className="mt-8 bg-gold text-white rounded-sm overflow-hidden shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap divide-x divide-white/20">
                {[
                  { icon: Phone, label: 'Main Switchboard', value: '+91 863 234 6000' },
                  { icon: Mail, label: 'General Enquiries', value: 'info@nagarjunauniversity.ac.in' },
                  { icon: MapPin, label: 'Address', value: 'Nagarjuna Nagar, Guntur — 522510, AP' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 px-6 py-3 flex-1 min-w-fit">
                    <Icon size={14} className="flex-shrink-0 opacity-80" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-70">{label}</p>
                      <p className="text-xs font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div className="mt-10 rounded-sm bg-white/5 border border-white/10 p-5 text-sm text-gray-100 max-w-3xl">
          <p className="leading-relaxed">
            Use the quick contacts for immediate support, or open the general enquiry form to send us a message directly.
          </p>
        </div>
      </PageHero>

      <TabContainer
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sticky
        renderContent={(tab) => (
          <>
            {tab === 'general' && (
              <section id="contact-general" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Form */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-navy mb-6">Send Us a Message</h2>
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send size={20} className="text-green-600" />
                        </div>
                        <h3 className="text-base font-bold text-green-800 mb-2">Message Sent!</h3>
                        <p className="text-sm text-green-700 mb-4">
                          Thank you for reaching out. We'll get back to you within 2 working days.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setForm({ name: '', email: '', phone: '', type: 'General', message: '' });
                          }}
                          className="text-xs font-semibold text-green-700 underline hover:no-underline"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your full name"
                              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Email Address *</label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="your@email.com"
                              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Phone Number</label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 or international"
                              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-enquiry-type" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Enquiry Type *</label>
                          <select
                            id="contact-enquiry-type"
                            required
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value as EnquiryType })}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors bg-white"
                          >
                            {enquiryTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">Message *</label>
                          <textarea
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
                        >
                          <Send size={14} />
                          Send Message
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Key Offices */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-navy mb-2">Key Offices</h2>
                    {offices.map(({ icon: Icon, name, email, phone, hours }) => (
                      <div key={name} className="bg-white border border-gray-200 rounded-sm p-4 hover:border-gold/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 bg-navy/5 rounded-sm flex items-center justify-center flex-shrink-0">
                            <Icon size={13} className="text-navy" />
                          </div>
                          <h4 className="text-xs font-bold text-navy">{name}</h4>
                        </div>
                        <a href={`mailto:${email}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gold transition-colors mb-1">
                          <Mail size={11} className="text-gold" /> {email}
                        </a>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gold transition-colors mb-1">
                          <Phone size={11} className="text-gold" /> {phone}
                        </a>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Clock size={11} /> {hours}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {tab === 'departments' && (
              <section id="contact-departments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h2 className="text-xl font-bold text-navy mb-6">College & Department Contacts</h2>
                <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">College</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest hidden md:table-cell">Head of Institution</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Email</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest hidden sm:table-cell">Phone</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {deptContacts.map((d, i) => (
                        <tr key={d.college} className={cn('hover:bg-gold/5 transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')}>
                          <td className="px-6 py-4 font-semibold text-navy text-sm">{d.college}</td>
                          <td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{d.hod}</td>
                          <td className="px-6 py-4">
                            <a href={`mailto:${d.email}`} className="text-xs text-gray-500 hover:text-gold transition-colors">{d.email}</a>
                          </td>
                          <td className="px-6 py-4 text-xs text-gray-500 hidden sm:table-cell">{d.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {tab === 'directions' && (
              <section id="contact-directions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Map */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold text-navy mb-4">Campus Location</h2>
                    <div className="rounded-sm overflow-hidden border border-gray-200 h-96">
                      <iframe
                        title="ANU Campus Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890!2d80.4365!3d16.4675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a2a2a2a3%3A0x1234567890abcdef!2sAcharya%20Nagarjuna%20University!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a
                      href="https://maps.google.com/?q=Acharya+Nagarjuna+University+Guntur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs font-semibold text-navy hover:text-gold transition-colors"
                    >
                      <MapPin size={13} />
                      Open in Google Maps
                    </a>
                  </div>

                  {/* How to reach */}
                  <div className="space-y-5">
                    <div className="bg-navy text-white rounded-sm p-5">
                      <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-3">Address</h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        Acharya Nagarjuna University<br />
                        Nagarjuna Nagar<br />
                        Guntur — 522510<br />
                        Andhra Pradesh, India
                      </p>
                    </div>

                    {[
                      {
                        icon: '🚂',
                        title: 'By Train',
                        desc: 'Guntur Railway Station is the nearest railhead (8 km). Well-connected to Chennai, Hyderabad, Vijayawada, Delhi, and Mumbai. Auto-rickshaws and taxis available outside the station.',
                      },
                      {
                        icon: '✈️',
                        title: 'By Air',
                        desc: 'Vijayawada International Airport (VGA) is 42 km away. Taxis and buses connect to Guntur in approx. 50 minutes. Hyderabad airport (RGIA) is 275 km via NH-65.',
                      },
                      {
                        icon: '🚌',
                        title: 'By Bus',
                        desc: 'APSRTC buses operate frequently from Vijayawada, Hyderabad, Tirupati, and other cities to Guntur Central Bus Stand (6 km). University buses available from the bus stand.',
                      },
                      {
                        icon: '🚗',
                        title: 'By Road',
                        desc: 'Located on the Guntur–Mangalagiri–Nagarjuna Sagar highway. GPS: "Acharya Nagarjuna University, Nagarjuna Nagar." NH-16 (Chennai–Kolkata) passes through Vijayawada, 35 km away.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="bg-white border border-gray-200 rounded-sm p-4 hover:border-gold/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base">{item.icon}</span>
                          <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      />
    </div>
  );
}
