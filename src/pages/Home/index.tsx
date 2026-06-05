import { useRef } from 'react';
import { ArrowRight, BookOpen, Award, FlaskConical, Building2, FileText, ChevronRight, Play, MapPin, Train, Plane, Bus, ExternalLink } from 'lucide-react';
import { Link } from '../../components/PortalLink';
// import college2 from '../../assets/bgg1.jpg';
import college from '../../assets/bgg2.jpg';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section - Golden Jubilee */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden bg-navy"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={college} 
            alt="Acharya Nagarjuna University Campus" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/5 to-transparent"></div>
          
          {/* Gautama Buddha - subtle ghost presence, far right */}
          <div 
            className="absolute inset-y-0 right-0 hidden lg:block w-[30%] pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)'
            }}
          >
            {/* <img 
              src={buddha} 
              alt="Gautama Buddha Statue" 
              className="h-full w-full object-contain object-right-bottom opacity-40 mix-blend-screen"
            /> */}
          </div>
        </div>

        <div className="container relative z-10 grid min-h-[72vh] items-center gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="hero-content max-w-4xl text-white">
          <p className="uppercase tracking-[0.2em] text-gold font-semibold text-sm mb-4">Since 1976</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-[1.1] text-white">
            Fifty Years of <br />
            <span className="text-gold italic font-normal">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-cream mb-8 max-w-2xl font-light leading-relaxed">
            Nurturing minds. Inspiring futures. Building a better world. Join us in celebrating half a century of academic brilliance and global impact.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#welcome" 
              className="inline-flex items-center px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all rounded-sm font-medium"
            >
              Explore the Journey <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
          </div>

          <div className="hero-content relative hidden min-h-[520px] items-center justify-center lg:flex">
            <div className="absolute right-0 top-12 select-none text-[10px] font-bold uppercase tracking-[0.38em] text-gold/60 [writing-mode:vertical-rl]">
              Golden Jubilee 1976 - 2026
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[190px] border border-dashed border-gold/40 opacity-70 animate-[spin_120s_linear_infinite]" />
              <div className="absolute -inset-3 rounded-[176px] border border-gold/25 transition-transform duration-700" />

              {/* <div className="group relative z-10 h-[500px] w-[360px] overflow-hidden rounded-[180px] border-2 border-gold/90 bg-navy shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
                <img
                  src={college2}
                  alt="Acharya Nagarjuna University campus framed in a golden jubilee oval"
                  className="h-full w-full object-cover opacity-95 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/5 to-transparent" />
                <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                <div className="absolute inset-x-10 bottom-6 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
              </div> */}

              <div className="absolute -bottom-5 -left-8 z-20 w-56 overflow-hidden rounded-md border border-gold/35 bg-white/95 p-4 shadow-[0_24px_58px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:bg-white animate-[jubilee-float_4.8s_ease-in-out_infinite]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-navy via-gold to-gold-light" />
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />
                <div className="absolute -bottom-16 left-6 h-24 w-24 rounded-full bg-navy/10 blur-2xl" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-white text-gold shadow-inner">
                  <Award size={19} strokeWidth={1.7} />
                </div>

                <div className="relative flex items-end gap-3">
                  <div>
                    <span className="block font-serif text-[4rem] leading-[0.82] text-navy">50</span>
                    <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Years</span>
                  </div>
                  <div className="mb-1 min-w-0 border-l border-gold/30 pl-3">
                    <p className="text-[11px] font-extrabold uppercase leading-tight tracking-[0.18em] text-charcoal">Golden Jubilee</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">1976 - 2026</p>
                    <div className="mt-2 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          </div>
        </div>

        {/* Jubilee Badge positioned bottom right */}
        <div className="absolute bottom-10 right-10 z-10 hidden hero-content">
          <div className="text-center bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <span className="text-6xl font-serif text-gold block leading-none mb-1">50</span>
            <span className="text-sm uppercase tracking-widest text-white block mb-2">Years</span>
            <div className="h-px w-full bg-gold/50 my-2"></div>
            <span className="font-serif text-lg text-white">Golden Jubilee</span>
            <span className="text-xs text-gray-300 block">1976 – 2026</span>
          </div>
        </div>
      </section>

      {/* 2. Quick Links Icons */}
      <section id="quick-links" className="border-b border-gray-100 bg-white" ref={addToRefs}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-100">
            {[
              { icon: BookOpen, title: "Programs & Academics", desc: "Explore our programs", href: "/programs" },
              { icon: Award, title: "Accreditations", desc: "Recognitions we're proud of", href: "#accreditations" },
              { icon: FlaskConical, title: "Research & Innovation", desc: "Creating impact", href: "#research" },
              { icon: Building2, title: "Campus Life", desc: "Facilities for your growth", href: "#campus-life" },
              { icon: FileText, title: "Admissions", desc: "Start your journey", href: "#admissions" },
            ].map((item, idx) => (
              item.href.startsWith('/') ? (
                <Link
                  key={idx}
                  to={item.href}
                  className="group flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors"
                >
                  <item.icon size={32} strokeWidth={1.5} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-medium text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors"
                >
                  <item.icon size={32} strokeWidth={1.5} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-medium text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      {/* 3. Welcome / Intro */}
      <section id="welcome" className="py-24 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase text-gold font-bold text-xs tracking-[0.2em] mb-4 block">Welcome To</span>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Nagarjuna University</h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Established in 1976, Acharya Nagarjuna University has emerged as a premier institution of higher learning and research. With a legacy of academic excellence, social commitment, and global outlook, we empower students to become thought leaders and changemakers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you are joining us from across the country or across the globe, you will find a vibrant community dedicated to exploring frontiers of knowledge and driving societal impact.
              </p>
              <Link to="/programs" className="inline-flex items-center text-navy font-semibold hover:text-gold transition-colors">
                Learn More About Us <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1779003207376_0.jpg?imageMogr2/format/webp" 
                alt="University Campus Aerial" 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-gold group-hover:scale-110 transition-transform">
                  <Play size={32} className="ml-2" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats / Academics Preview */}
      <section id="academics" className="py-24 bg-white" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="uppercase text-gold font-bold text-xs tracking-[0.2em] mb-4 block">Academics</span>
              <h2 className="text-4xl md:text-5xl font-serif text-navy">Discover. Learn. Excel.</h2>
            </div>
            <p className="text-gray-600 max-w-lg">
              A wide range of undergraduate, postgraduate and doctoral programs designed to meet global standards and local needs, taught by distinguished faculty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-100 p-8 rounded-sm shadow-sm">
            {[
              { num: "150+", label: "Programs", icon: BookOpen },
              { num: "12", label: "Faculties", icon: Award },
              { num: "30+", label: "Departments", icon: Building2 },
              { num: "20,000+", label: "Students", icon: FileText }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <stat.icon size={32} className="text-gold mb-4 opacity-80" strokeWidth={1} />
                <h4 className="text-4xl font-serif text-navy font-bold mb-2">{stat.num}</h4>
                <span className="text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Accreditations */}
      <section id="accreditations" className="py-24 bg-navy text-white" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <span className="uppercase text-white/60 font-bold text-xs tracking-[0.2em] mb-4 block">Accredited. Recognized. Respected.</span>
              <h2 className="text-4xl font-serif mb-6 text-white">Our Commitment to Quality</h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-white/80 leading-relaxed mb-8">
                Our accreditations and rankings reflect our relentless pursuit of excellence in teaching, research, and innovation. We are proud to be recognized among the top institutions globally and nationally.
              </p>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-500 text-white hover:bg-white hover:text-navy transition-colors text-sm rounded-sm">
                View All Accreditations <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "NAAC", desc: "A+ Grade Accredited", circleText: "A+" },
                { title: "Ranked in", desc: "Top 100 Universities", circleText: "NIRF" },
                { title: "QS Asia", desc: "Rankings 2024", circleText: "QS" },
                { title: "Entitled to", desc: "UGC Support", circleText: "UGC" }
              ].map((acc, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border border-gray-600 flex items-center justify-center mb-6 bg-navy-light text-2xl font-serif text-gold shadow-lg shadow-black/20">
                    {acc.circleText}
                  </div>
                  <h4 className="font-serif text-lg mb-1 text-white">{acc.title}</h4>
                  <p className="text-white/70 text-sm">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Research & Innovation */}
      <section id="research" className="py-24 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <span className="uppercase text-gold font-bold text-xs tracking-[0.2em] mb-4 block">Research & Innovation</span>
              <h2 className="text-4xl font-serif text-navy mb-6">Shaping Ideas.<br/>Solving Tomorrow.</h2>
              <p className="text-gray-700 mb-8">
                Our research spans diverse disciplines and real-world challenges, driving innovation and societal impact on a global scale.
              </p>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 text-navy hover:bg-navy hover:text-white transition-colors w-max text-sm rounded-sm">
                Explore Research <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.wegic.ai/assets/onepage/agent/images/1779003206971_0.jpg?imageMogr2/format/webp" 
                    alt="Cutting-edge Research Facilities" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h4 className="font-serif text-xl text-navy mb-2">Cutting-edge Research Facilities</h4>
                  <p className="text-gray-500 text-sm">State-of-the-art laboratories and centers of excellence fostering interdisciplinary breakthroughs.</p>
                </div>
              </div>
              
              <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 bg-navy-light overflow-hidden flex items-center justify-center p-8">
                   <img 
                    src="https://cdn.wegic.ai/assets/onepage/agent/images/1779003207376_0.jpg?imageMogr2/format/webp" 
                    alt="Innovation & Entrepreneurship" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h4 className="font-serif text-xl text-navy mb-2">Innovation & Entrepreneurship</h4>
                  <p className="text-gray-500 text-sm">Incubators and partnerships that turn academic ideas into viable, impactful real-world enterprises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Campus Life */}
      <section id="campus-life" className="py-24 bg-white" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase text-gold font-bold text-xs tracking-[0.2em] mb-4 block">Campus Life & Facilities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">A Campus that Feels Like Home</h2>
            <p className="text-gray-600">
              Modern infrastructure. Vibrant community. Holistic development. Experience a supportive environment designed for your personal and academic growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Hostels", desc: "Safe, secure, and comfortable living" },
              { icon: BookOpen, title: "Library", desc: "Resources to fuel your curiosity" },
              { icon: Award, title: "Sports", desc: "Play, compete, and excel" },
              { icon: FileText, title: "Student Support", desc: "Guidance for your journey" }
            ].map((facility, i) => (
              <div key={i} className="border border-gray-100 p-8 text-center hover:border-gold hover:shadow-lg transition-all rounded-sm group cursor-pointer">
                <facility.icon size={40} className="mx-auto text-gray-400 group-hover:text-gold transition-colors mb-6" strokeWidth={1} />
                <h4 className="font-serif text-xl text-navy mb-3">{facility.title}</h4>
                <p className="text-sm text-gray-500">{facility.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors">
              Explore All Facilities <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Campus Map */}
      <section id="campus-map" className="py-24 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="uppercase text-gold font-bold text-xs tracking-[0.2em] mb-4 block">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Our Campus</h2>
            <p className="text-gray-500 text-base">
              Spread across 650 acres in Nagarjuna Nagar, Guntur — one of the largest university campuses in Andhra Pradesh.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-gray-200 rounded-sm overflow-hidden shadow-sm">

            {/* Left: Campus Info */}
            <div className="bg-navy text-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6 text-white">Reach the Campus</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-sm bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Address</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Nagarjuna Nagar, Guntur – 522 510<br />Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-sm bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Nearest Railway Station</p>
                      <p className="text-sm text-gray-300">Guntur Junction — 12 km</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-sm bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plane size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Nearest Airport</p>
                      <p className="text-sm text-gray-300">Vijayawada International — 40 km</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-sm bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bus size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">By Bus</p>
                      <p className="text-sm text-gray-300">Regular APSRTC buses from Guntur Bus Stand to Nagarjuna Nagar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap gap-3 text-xs">
                  {['650 Acres Campus', '70+ Departments', '20,000+ Students', '800+ Faculty'].map((stat) => (
                    <span key={stat} className="bg-white/10 text-white px-3 py-1.5 rounded-sm font-semibold">{stat}</span>
                  ))}
                </div>
                <a
                  href="https://maps.google.com/?q=Acharya+Nagarjuna+University,+Nagarjuna+Nagar,+Guntur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors mt-2"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right: Map Embed (2 cols) */}
            <div className="lg:col-span-2 relative min-h-[420px]">
              <iframe
                title="Acharya Nagarjuna University Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0!2d80.4365!3d16.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a3b3b3b3%3A0x1b2b3b4b5b6b7b8b!2sAcharya%20Nagarjuna%20University!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full absolute inset-0"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Admissions CTA */}
      <section id="admissions" className="py-20 bg-gold" ref={addToRefs}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-black/10 p-8 md:p-12 rounded-sm backdrop-blur-sm border border-white/20">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <div className="hidden md:flex w-20 h-20 border-2 border-white rounded-full items-center justify-center text-white">
                <FileText size={32} />
              </div>
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Begin Your Journey at Acharya Nagarjuna</h2>
                <p className="text-white/80 text-lg">Admissions Open for 2026–27</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="#" 
                className="bg-white text-navy px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Apply Now
              </a>
              <Link
                to="/programs"
                className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-medium hover:bg-white/10 transition-colors text-center"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
