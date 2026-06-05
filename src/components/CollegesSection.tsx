import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  GraduationCap,
  Mail,
  Phone,
  Search,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";

interface CollegeSectionProps {
  onTriggerAdmissions: () => void;
}

export interface CourseSyllabus {
  title: string;
  papers: string[];
}

export interface CourseItem {
  id: string;
  name: string;
  level: "UG" | "PG" | "PHD";
  duration: string;
  fee: string;
  department: string;
  stream: string;
  description: string;
  syllabus: CourseSyllabus[];
  careers: string[];
  recruiters: string[];
}

type CourseSeed = Omit<CourseItem, "syllabus" | "careers" | "recruiters"> & {
  focus: string[];
};

const UNIVERSITY_INFO = {
  name: "ACHARYA NAGARJUNA UNIVERSITY",
  phone: "+91 863 234 6114",
  email: "registrar@anu.ac.in",
  accreditation: "NAAC A+ Grade",
  score: "3.46",
  established: "1976",
  campus: "300 acres",
  departments: "39",
  affiliatedColleges: "450+",
};

const CORE_SYLLABUS: Record<CourseItem["level"], CourseSyllabus[]> = {
  UG: [
    { title: "Foundation Stage", papers: ["Core subject fundamentals", "Communication skills", "Digital and analytical tools", "Practical laboratory or studio work"] },
    { title: "Advanced Stage", papers: ["Programme electives", "Discipline-specific projects", "Fieldwork or internship", "Final assessment and viva"] },
  ],
  PG: [
    { title: "Semester 1 & 2", papers: ["Advanced core papers", "Research methodology", "Specialization electives", "Seminar presentations"] },
    { title: "Semester 3 & 4", papers: ["Applied project work", "Dissertation or internship", "Professional electives", "Comprehensive viva"] },
  ],
  PHD: [
    { title: "Pre-Ph.D Coursework", papers: ["Research methodology", "Literature review", "Research ethics", "Area-specific advanced study"] },
    { title: "Doctoral Research", papers: ["Seminar presentations", "Progress reviews", "Journal publication work", "Thesis submission and defense"] },
  ],
};

const PROGRAMME_SEEDS: CourseSeed[] = [
  { id: "btech-cse", name: "B.Tech CSE", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate engineering programme in Computer Science and Engineering from Dr. YSR ANUCET.", focus: ["Software Engineering", "Data Structures", "Systems", "Computing"] },
  { id: "btech-ai-ml", name: "B.Tech AI & ML", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate engineering programme focused on Artificial Intelligence and Machine Learning.", focus: ["Machine Learning", "Data Modelling", "Python", "AI Systems"] },
  { id: "btech-data-science", name: "B.Tech Data Science", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate engineering pathway for data analytics, statistical computing, and modern data systems.", focus: ["Data Analytics", "Statistics", "Databases", "Visualization"] },
  { id: "btech-cyber-security", name: "B.Tech Cyber Security", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate programme aligned with cyber security, secure networks, and digital risk management.", focus: ["Network Security", "Cryptography", "Ethical Hacking", "Security Operations"] },
  { id: "btech-ece", name: "B.Tech ECE", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate programme in Electronics and Communication Engineering.", focus: ["Electronics", "Communication Systems", "VLSI", "Signal Processing"] },
  { id: "btech-eee", name: "B.Tech EEE", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate programme in Electrical and Electronics Engineering.", focus: ["Power Systems", "Electrical Machines", "Control Systems", "Power Electronics"] },
  { id: "btech-mechanical", name: "B.Tech Mechanical", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate programme in mechanical systems, manufacturing, and machine design.", focus: ["Machine Design", "Manufacturing", "Thermal Systems", "CAD"] },
  { id: "btech-civil", name: "B.Tech Civil", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Undergraduate programme in infrastructure, structures, and civil engineering practice.", focus: ["Structures", "Geotechnics", "Transportation", "Construction"] },
  { id: "bsc-fire-industrial-safety", name: "B.Sc Honours in Fire and Industrial Safety", level: "UG", duration: "3-4 YEARS", fee: "Admissions Open", department: "Admissions Notice", stream: "Safety Sciences", description: "Admissions-open programme listed in the current notices for Fire and Industrial Safety.", focus: ["Industrial Safety", "Fire Systems", "Risk Management", "Emergency Response"] },
  { id: "ba-honours", name: "B.A Honours", level: "UG", duration: "3-4 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Arts, Commerce & Law", description: "Undergraduate honours programme from the Arts, Commerce and Law college group.", focus: ["Humanities", "Languages", "Social Sciences", "Writing"] },
  { id: "bcom-honours", name: "B.Com Honours", level: "UG", duration: "3-4 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Commerce", description: "Undergraduate commerce honours programme for accounting, finance, and business foundations.", focus: ["Accounting", "Finance", "Business Law", "Taxation"] },
  { id: "llb-3-year", name: "LL.B (3 Year)", level: "UG", duration: "3 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Law", description: "Three-year law programme under Dr. B.R. Ambedkar School of Legal Education and Research.", focus: ["Legal Studies", "Constitutional Law", "Judicial Process", "Advocacy"] },
  { id: "b-pharmacy", name: "B.Pharmacy", level: "UG", duration: "4 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Pharmacy", description: "Undergraduate pharmacy programme from ANU College of Pharmaceutical Sciences.", focus: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry", "Drug Analysis"] },
  { id: "pharm-d", name: "Pharm.D", level: "UG", duration: "6 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Pharmacy", description: "Professional pharmacy programme listed under the Pharmacy college programmes.", focus: ["Clinical Pharmacy", "Therapeutics", "Patient Care", "Drug Safety"] },
  { id: "bped", name: "B.P.Ed", level: "UG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Physical Education & Sports", stream: "Physical Education", description: "Undergraduate physical education programme for sports sciences and coaching foundations.", focus: ["Physical Education", "Coaching", "Sports Training", "Fitness"] },
  { id: "diploma-sports-coaching", name: "Diploma in Sports Coaching", level: "UG", duration: "1 YEAR", fee: "Contact Registrar", department: "ANU College of Physical Education & Sports", stream: "Sports Coaching", description: "Diploma programme in sports coaching from the Physical Education and Sports college group.", focus: ["Coaching Methods", "Sports Practice", "Fitness", "Athlete Development"] },
  { id: "barch", name: "B.Arch (5 Year)", level: "UG", duration: "5 YEARS", fee: "Contact Registrar", department: "ANU College of Architecture & Planning", stream: "Architecture & Planning", description: "Five-year architecture programme from ANU College of Architecture and Planning.", focus: ["Architectural Design", "Building Materials", "Planning", "Studio Practice"] },
  { id: "mtech", name: "M.Tech (All Specializations)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Engineering", description: "Postgraduate engineering programme covering all specializations listed for Dr. YSR ANUCET.", focus: ["Advanced Engineering", "Research Methods", "Specialization Electives", "Project Work"] },
  { id: "msc-physics", name: "M.Sc Physics", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate science programme in Physics.", focus: ["Quantum Physics", "Condensed Matter", "Laboratory Methods", "Mathematical Physics"] },
  { id: "msc-chemistry", name: "M.Sc Chemistry", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate science programme in Chemistry.", focus: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Methods"] },
  { id: "msc-mathematics", name: "M.Sc Mathematics", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate science programme in Mathematics.", focus: ["Pure Mathematics", "Applied Mathematics", "Analysis", "Algebra"] },
  { id: "msc-biotechnology", name: "M.Sc Biotechnology", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate programme in biotechnology and life sciences.", focus: ["Molecular Biology", "Genetics", "Bioprocessing", "Bioinformatics"] },
  { id: "msc-botany", name: "M.Sc Botany", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate science programme in Botany.", focus: ["Plant Sciences", "Microbiology", "Ecology", "Taxonomy"] },
  { id: "msc-zoology", name: "M.Sc Zoology", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate science programme in Zoology.", focus: ["Animal Sciences", "Aquaculture", "Physiology", "Ecology"] },
  { id: "msc-environmental-science", name: "M.Sc Environmental Science", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Sciences", description: "Postgraduate programme in environmental science and sustainability.", focus: ["Environment", "Sustainability", "Ecology", "Field Methods"] },
  { id: "ma-english", name: "M.A English", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Arts, Commerce & Law", description: "Postgraduate arts programme in English.", focus: ["Literature", "Language", "Critical Theory", "Writing"] },
  { id: "ma-telugu", name: "M.A Telugu", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Arts, Commerce & Law", description: "Postgraduate arts programme in Telugu.", focus: ["Telugu Literature", "Language", "Culture", "Criticism"] },
  { id: "ma-economics", name: "M.A Economics", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Arts, Commerce & Law", description: "Postgraduate arts programme in Economics.", focus: ["Microeconomics", "Macroeconomics", "Development", "Econometrics"] },
  { id: "mcom", name: "M.Com", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Commerce", description: "Postgraduate commerce programme.", focus: ["Accounting", "Finance", "Commerce", "Business Research"] },
  { id: "mba", name: "MBA", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Management", description: "Postgraduate management programme from the Commerce and Business Administration group.", focus: ["Management", "Finance", "Marketing", "Human Resources"] },
  { id: "llm", name: "LL.M", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Law", description: "Postgraduate law programme.", focus: ["Advanced Legal Studies", "Research", "Constitutional Law", "Jurisprudence"] },
  { id: "mpharmacy-pharmaceutics", name: "M.Pharmacy (Pharmaceutics)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Pharmacy", description: "Postgraduate pharmacy specialization in Pharmaceutics.", focus: ["Drug Delivery", "Formulation", "Pharmaceutical Technology", "Quality"] },
  { id: "mpharmacy-pharmacology", name: "M.Pharmacy (Pharmacology)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Pharmacy", description: "Postgraduate pharmacy specialization in Pharmacology.", focus: ["Drug Action", "Toxicology", "Clinical Research", "Therapeutics"] },
  { id: "mpharmacy-pharmaceutical-analysis", name: "M.Pharmacy (Pharmaceutical Analysis)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Pharmacy", description: "Postgraduate pharmacy specialization in Pharmaceutical Analysis.", focus: ["Analytical Methods", "HPLC", "Quality Control", "Validation"] },
  { id: "mped", name: "M.P.Ed", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Physical Education & Sports", stream: "Physical Education", description: "Postgraduate physical education programme.", focus: ["Sports Science", "Training", "Physical Education", "Research"] },
  { id: "march-urban-design", name: "M.Arch (Urban Design)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Architecture & Planning", stream: "Architecture & Planning", description: "Postgraduate architecture programme in Urban Design.", focus: ["Urban Design", "Architecture", "Planning", "Studio Research"] },
  { id: "mplan-urban-planning", name: "M.Plan (Urban Planning)", level: "PG", duration: "2 YEARS", fee: "Contact Registrar", department: "ANU College of Architecture & Planning", stream: "Architecture & Planning", description: "Postgraduate planning programme in Urban Planning.", focus: ["Urban Planning", "Policy", "GIS", "Sustainable Cities"] },
  { id: "phd-engineering", name: "Ph.D Engineering", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Engineering & Technology", stream: "Research", description: "Doctoral research pathway for Engineering disciplines.", focus: ["Research Methodology", "Engineering Research", "Seminars", "Thesis"] },
  { id: "phd-sciences", name: "Ph.D Sciences", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Sciences", stream: "Research", description: "Doctoral research pathway for Science departments.", focus: ["Science Research", "Laboratory Work", "Publications", "Thesis"] },
  { id: "phd-humanities", name: "Ph.D Humanities", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Arts, Commerce & Law", stream: "Research", description: "Doctoral research pathway for Humanities and allied disciplines.", focus: ["Humanities Research", "Academic Writing", "Seminars", "Thesis"] },
  { id: "phd-pharmaceutical-sciences", name: "Ph.D Pharmaceutical Sciences", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Pharmaceutical Sciences", stream: "Research", description: "Doctoral research pathway for Pharmaceutical Sciences.", focus: ["Pharmaceutical Research", "Drug Studies", "Analysis", "Thesis"] },
  { id: "phd-physical-education", name: "Ph.D Physical Education", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Physical Education & Sports", stream: "Research", description: "Doctoral research pathway for Physical Education.", focus: ["Sports Research", "Training Science", "Measurement", "Thesis"] },
  { id: "phd-architecture", name: "Ph.D Architecture", level: "PHD", duration: "3-5 YEARS", fee: "Contact Registrar", department: "ANU College of Architecture & Planning", stream: "Research", description: "Doctoral research pathway for Architecture and Planning.", focus: ["Architecture Research", "Urban Studies", "Design Inquiry", "Thesis"] },
];

export const COURSES_DATA: CourseItem[] = PROGRAMME_SEEDS.map((course) => ({
  ...course,
  syllabus: [
    ...CORE_SYLLABUS[course.level],
    {
      title: "Programme Focus",
      papers: course.focus,
    },
  ],
  careers:
    course.level === "PHD"
      ? ["Research Scholar", "Academic Faculty", "Research Project Associate", "Policy or Practice Specialist"]
      : ["Higher Studies", "Campus Recruitment", "Government or Public Sector Pathways", "Professional Practice"],
  recruiters: ["Admissions", "Syllabus", "Time Tables", "Examinations", "Placements", "Student Portal"],
}));

const COURSE_FILTERS: Array<{ id: "ALL" | "UG" | "PG" | "PHD"; label: string }> = [
  { id: "ALL", label: "All Courses" },
  { id: "UG", label: "UG" },
  { id: "PG", label: "PG" },
  { id: "PHD", label: "Ph.D" },
];

function levelLabel(level: CourseItem["level"]) {
  return level === "PHD" ? "Ph.D" : level;
}

export default function CollegesSection({ onTriggerAdmissions }: CollegeSectionProps) {
  const [coursesSearchQuery, setCoursesSearchQuery] = useState("");
  const [courseTypeTab, setCourseTypeTab] = useState<"ALL" | "UG" | "PG" | "PHD">("ALL");
  const [syllabusCourse, setSyllabusCourse] = useState<CourseItem | null>(null);
  const [inquireCourse, setInquireCourse] = useState<CourseItem | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const filteredCourses = useMemo(() => {
    const query = coursesSearchQuery.trim().toLowerCase();

    return COURSES_DATA.filter((course) => {
      const matchesLevel = courseTypeTab === "ALL" || course.level === courseTypeTab;
      const searchableText = [
        course.name,
        course.level,
        course.department,
        course.stream,
        course.description,
        course.syllabus.flatMap((block) => block.papers).join(" "),
        course.careers.join(" "),
        course.recruiters.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesLevel && (!query || searchableText.includes(query));
    });
  }, [courseTypeTab, coursesSearchQuery]);

  const courseCounts = useMemo(() => {
    return COURSE_FILTERS.reduce<Record<string, number>>((acc, filter) => {
      acc[filter.id] =
        filter.id === "ALL" ? COURSES_DATA.length : COURSES_DATA.filter((course) => course.level === filter.id).length;
      return acc;
    }, {});
  }, []);

  const handleInquirySubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryPhone.trim()) {
      alert("Please provide name, email, and phone number to submit your course enquiry.");
      return;
    }

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquireCourse(null);
      setInquiryName("");
      setInquiryEmail("");
      setInquiryPhone("");
      setInquiryMessage("");
    }, 2500);
  };

  return (
    <section id="colleges" className="relative w-full overflow-hidden bg-bg-cream py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[4px] text-anu-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Faculties & Courses
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-anu-blue md:text-5xl">
              {UNIVERSITY_INFO.name} Courses
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              Search UG, PG, and Ph.D programmes directly, using the actual college-wise programme information provided for this project.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-ink/60">
              <span className="inline-flex items-center gap-1.5 border border-anu-gold/25 bg-white px-3 py-1.5">
                <Phone className="h-3.5 w-3.5 text-anu-gold" />
                {UNIVERSITY_INFO.phone}
              </span>
              <span className="inline-flex items-center gap-1.5 border border-anu-gold/25 bg-white px-3 py-1.5">
                <Mail className="h-3.5 w-3.5 text-anu-gold" />
                {UNIVERSITY_INFO.email}
              </span>
              <span className="inline-flex items-center gap-1.5 border border-anu-gold/25 bg-white px-3 py-1.5">
                {UNIVERSITY_INFO.accreditation} / {UNIVERSITY_INFO.score}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-anu-gold/30 bg-white shadow-sm">
            <div className="border-r border-ink/8 px-4 py-4 text-center">
              <strong className="block font-serif text-2xl text-anu-blue">{COURSES_DATA.length}</strong>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-ink/45">Courses</span>
            </div>
            <div className="border-r border-ink/8 px-4 py-4 text-center">
              <strong className="block font-serif text-2xl text-anu-blue">{UNIVERSITY_INFO.departments}</strong>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-ink/45">Departments</span>
            </div>
            <div className="px-4 py-4 text-center">
              <strong className="block font-serif text-2xl text-anu-gold">{UNIVERSITY_INFO.established}</strong>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-ink/45">Established</span>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-20 mb-9 border border-ink/8 bg-bg-cream/95 p-3 shadow-lg backdrop-blur-md">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-anu-gold" />
              <input
                value={coursesSearchQuery}
                onChange={(event) => setCoursesSearchQuery(event.target.value)}
                placeholder="Search by course, college, stream, focus area, notice..."
                className="h-13 w-full border border-ink/10 bg-white pl-11 pr-4 text-sm font-semibold text-anu-blue outline-none transition-all placeholder:text-ink/35 focus:border-anu-gold focus:ring-2 focus:ring-anu-gold/20"
                id="courses-search"
              />
            </label>

            <div className="grid grid-cols-4 gap-1 bg-white p-1 border border-ink/8">
              {COURSE_FILTERS.map((filter) => {
                const isActive = courseTypeTab === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setCourseTypeTab(filter.id)}
                    className={`min-h-11 px-3 text-[10px] font-extrabold uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-anu-blue text-white shadow-sm"
                        : "text-ink/65 hover:bg-bg-cream hover:text-anu-blue"
                    }`}
                  >
                    <span className="block leading-tight">{filter.label}</span>
                    <span className={`mt-0.5 block font-mono text-[9px] ${isActive ? "text-anu-gold" : "text-ink/35"}`}>
                      {courseCounts[filter.id]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredCourses.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border border-dashed border-anu-gold/50 bg-white px-6 py-14 text-center shadow-sm"
            >
              <BookOpen className="mx-auto mb-4 h-8 w-8 text-anu-gold" />
              <h3 className="font-serif text-2xl font-bold text-anu-blue">No courses found</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">
                Try a different search term or switch back to All Courses.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <motion.article
                  layout
                  key={course.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.24, delay: index * 0.025 }}
                  className="group flex min-h-[360px] flex-col border border-ink/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-anu-gold/70 hover:shadow-xl"
                >
                  <div className="border-b border-ink/8 bg-gradient-to-br from-anu-blue to-anu-blue-light p-5 text-white">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 border border-anu-gold/45 bg-white/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-anu-gold">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {levelLabel(course.level)}
                      </span>
                      <span className="text-right font-mono text-[10px] font-bold uppercase tracking-wide text-white/65">
                        {course.fee}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold leading-tight text-white">{course.name}</h3>
                    <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[2px] text-anu-gold">
                      {course.stream}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-bg-cream px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/70">
                        <Clock className="h-3.5 w-3.5 text-anu-gold" />
                        {course.duration}
                      </span>
                      <span className="bg-anu-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-anu-blue">
                        {course.department}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-ink/70">{course.description}</p>

                    <div className="mt-5 space-y-3">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-anu-blue">
                          <BriefcaseBusiness className="h-3.5 w-3.5 text-anu-gold" />
                          Pathways
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {course.careers.slice(0, 3).map((career) => (
                            <span key={career} className="border border-ink/8 bg-bg-cream/60 px-2 py-1 text-[10px] font-semibold text-ink/70">
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-anu-blue">
                          <Users className="h-3.5 w-3.5 text-anu-gold" />
                          Quick Access
                        </div>
                        <p className="text-[11px] font-semibold leading-relaxed text-ink/60">{course.recruiters.join(" / ")}</p>
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                      <button
                        type="button"
                        onClick={() => setSyllabusCourse(course)}
                        className="inline-flex items-center justify-center gap-2 border border-anu-gold bg-white px-3 py-3 text-[10px] font-extrabold uppercase tracking-widest text-anu-blue transition-colors hover:bg-bg-cream"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Syllabus
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquireCourse(course)}
                        className="inline-flex items-center justify-center gap-2 bg-anu-blue px-3 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-anu-blue-light"
                      >
                        <Send className="h-3.5 w-3.5 text-anu-gold" />
                        Enquire
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-anu-gold/30 bg-white px-5 py-5 text-center shadow-sm sm:flex-row sm:text-left">
          <div>
            <h3 className="font-serif text-xl font-bold text-anu-blue">Ready to apply?</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink/60">
              Open the admissions wizard to check counselling steps, eligibility, and scholarship guidance.
            </p>
          </div>
          <button
            type="button"
            onClick={onTriggerAdmissions}
            className="w-full bg-anu-blue px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-anu-blue-light sm:w-auto"
          >
            Apply Online
          </button>
        </div>
      </div>

      <AnimatePresence>
        {syllabusCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#001229]/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 16, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 16, scale: 0.98 }}
              className="max-h-[88vh] w-full max-w-3xl overflow-hidden border border-anu-gold bg-bg-cream shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-anu-gold/35 bg-anu-blue p-5 text-white">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[3px] text-anu-gold">
                    {levelLabel(syllabusCourse.level)} Syllabus
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold leading-tight">{syllabusCourse.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSyllabusCourse(null)}
                  className="p-1 text-white/70 transition-colors hover:text-white"
                  aria-label="Close syllabus"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[68vh] overflow-y-auto p-5 md:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {syllabusCourse.syllabus.map((block) => (
                    <div key={block.title} className="border border-ink/8 bg-white p-4 shadow-sm">
                      <h4 className="font-serif text-base font-bold text-anu-blue">{block.title}</h4>
                      <ul className="mt-3 space-y-2">
                        {block.papers.map((paper) => (
                          <li key={paper} className="flex gap-2 text-xs leading-relaxed text-ink/70">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-anu-gold" />
                            <span>{paper}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {inquireCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#001229]/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 16, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 16, scale: 0.98 }}
              className="w-full max-w-2xl overflow-hidden border border-anu-gold bg-bg-cream shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-anu-gold/35 bg-anu-blue p-5 text-white">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[3px] text-anu-gold">Course Enquiry</span>
                  <h3 className="mt-1 font-serif text-xl font-bold leading-tight">{inquireCourse.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInquireCourse(null)}
                  className="p-1 text-white/70 transition-colors hover:text-white"
                  aria-label="Close enquiry"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4 p-5 md:p-6">
                {inquirySuccess && (
                  <div className="border border-green-600/20 bg-green-50 px-4 py-3 text-xs font-bold text-green-700">
                    Your enquiry has been noted. The counselling team will contact you shortly.
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-widest text-ink/45">Name</span>
                    <input
                      value={inquiryName}
                      onChange={(event) => setInquiryName(event.target.value)}
                      className="h-11 w-full border border-ink/10 bg-white px-3 text-sm outline-none focus:border-anu-gold focus:ring-2 focus:ring-anu-gold/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-widest text-ink/45">Phone</span>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-anu-gold" />
                      <input
                        value={inquiryPhone}
                        onChange={(event) => setInquiryPhone(event.target.value)}
                        className="h-11 w-full border border-ink/10 bg-white pl-9 pr-3 text-sm outline-none focus:border-anu-gold focus:ring-2 focus:ring-anu-gold/20"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-widest text-ink/45">Email</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-anu-gold" />
                    <input
                      value={inquiryEmail}
                      onChange={(event) => setInquiryEmail(event.target.value)}
                      className="h-11 w-full border border-ink/10 bg-white pl-9 pr-3 text-sm outline-none focus:border-anu-gold focus:ring-2 focus:ring-anu-gold/20"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-widest text-ink/45">Message</span>
                  <textarea
                    value={inquiryMessage}
                    onChange={(event) => setInquiryMessage(event.target.value)}
                    rows={4}
                    placeholder="Share your preferred admission timeline or counselling question."
                    className="w-full resize-none border border-ink/10 bg-white px-3 py-3 text-sm outline-none transition-all placeholder:text-ink/35 focus:border-anu-gold focus:ring-2 focus:ring-anu-gold/20"
                  />
                </label>

                <div className="flex flex-col gap-3 border-t border-ink/8 pt-4 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setInquireCourse(null)}
                    className="border border-ink/10 bg-white px-5 py-3 text-[10px] font-extrabold uppercase tracking-widest text-ink/65 transition-colors hover:bg-bg-cream"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-anu-blue px-5 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-anu-blue-light"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
