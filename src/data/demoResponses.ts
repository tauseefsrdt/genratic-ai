import { SuggestedQuestion } from '../types/chat';

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: '1',
    title: 'Offered Courses & Fees',
    category: 'Academics',
    query: 'What courses does SRMU offer and what is the fee structure?'
  },
  {
    id: '2',
    title: 'Admissions & SRMUSET',
    category: 'Admissions',
    query: 'What is the admission process and scholarship test (SRMUSET)?'
  },
  {
    id: '3',
    title: 'Computer Science & AI (CSE)',
    category: 'Academics',
    query: 'Tell me about the B.Tech Computer Science & Engineering (CSE) program.'
  },
  {
    id: '4',
    title: 'Placements & Top Recruiters',
    category: 'Placements',
    query: 'What is the placement record, highest package, and top recruiters at SRMU?'
  },
  {
    id: '5',
    title: '100-Acre Campus & Facilities',
    category: 'Campus',
    query: 'Where is SRMU located and what are the campus and hostel facilities?'
  },
  {
    id: '6',
    title: 'Accreditations & Approvals',
    category: 'Research',
    query: 'Is SRMU UGC approved, NAAC accredited, and recognized by BCI/PCI?'
  }
];

export interface DemoKnowledgeItem {
  keywords: string[];
  response: string;
  sources: { title: string; url?: string; category?: string }[];
}

export const KNOWLEDGE_BASE: DemoKnowledgeItem[] = [
  {
    keywords: ['course', 'program', 'degree', 'offer', 'btech', 'mtech', 'mba', 'bba', 'bca', 'mca', 'ug', 'pg', 'fee', 'structure', 'bpharm', 'law', 'llb', 'agriculture', 'journalism'],
    response: `### 🎓 Programs Offered & Fee Overview at SRMU

**Shri Ramswaroop Memorial University (SRMU)** offers **115+ courses across 11 disciplines** benchmarked to modern industry standards:

1. **Faculty of Engineering & Technology**:
   * **B.Tech (16 Specializations)**: *CSE, AI & Machine Learning, Data Science, Cyber Security, Cloud Computing, IoT, Civil, Mechanical, Biotechnology, Electrical*.
   * Fees: ₹1,00,000 to ₹1,35,000 / year (approx ₹4.0L - ₹5.3L total).
2. **Computer Applications & IT**:
   * **BCA / MCA / B.Sc (IT)**: Focused on full-stack development, cloud, and AI engineering (BCA 1st Year: ₹1,00,000).
3. **Faculty of Management & Commerce**:
   * **MBA (Dual Specialization, Business Analytics, FinTech)**, **BBA**, and **B.Com (Hons)**.
4. **Faculty of Legal Studies**:
   * **BA LL.B (Hons)**, **BBA LL.B (Hons)**, and **LL.M** (Fully recognized by the Bar Council of India - BCI).
5. **Pharmaceutical & Agriculture Sciences**:
   * **B.Pharm / D.Pharm** (PCI approved) and **B.Sc (Hons) Agriculture** (ICAR-aligned practical farm training).
6. **Journalism, Humanities & Basic Sciences**:
   * **BA (Journalism & Mass Comm)**, **B.Sc / M.Sc** in Physics, Chemistry, Maths, and Biotechnology.

> 💡 **SRMUSET Scholarships:** Merit-based tuition fee waivers up to **100%** are awarded through the **SRMUSET Entrance Test**.`,
    sources: [
      { title: 'SRMU Course Catalog & Fee Chart 2026', category: 'Academics' },
      { title: 'SRMUSET Scholarship Framework', category: 'Financial Aid' }
    ]
  },
  {
    keywords: ['admission', 'apply', 'srmuset', 'eligibility', 'process', 'entrance', 'form', 'seat', 'deadline', 'scholarship', 'helpline'],
    response: `### 📝 SRMU Admissions & SRMUSET 2026-27

Admissions at SRMU are transparent, merit-focused, and open for the 2026 academic session:

1. **Step 1: Online Application Submission**
   * Register online on [srmu.ac.in](https://srmu.ac.in) or visit the campus admission cell.
2. **Step 2: SRMUSET (Scholarship cum Entrance Test)**
   * Appear for **SRMUSET** (online / offline) to qualify for admission and unlock merit scholarships up to **100%**.
   * National entrance scores (JEE Main, CUET, CAT, MAT, CLAT) are also accepted.
3. **Step 3: Counseling & Document Verification**
   * Document validation, eligibility check, and course seat allotment.
4. **Step 4: Provisional Admission & Enrollment**
   * Confirm your seat by depositing the initial semester registration fee.

* 📞 **Toll-Free Admission Helpline:** \`1800 102 6004\` / \`1800 103 5298\`
* 💬 **WhatsApp Assistance:** \`+91 9120007948\`
* 📧 **Email:** \`admissions@srmu.ac.in\``,
    sources: [
      { title: 'SRMU Admission Guidelines 2026', category: 'Admissions' },
      { title: 'SRMUSET Portal (students.srmu.ac.in)', category: 'Entrance Test' }
    ]
  },
  {
    keywords: ['computer science', 'cse', 'cs', 'btech cse', 'coding', 'ai', 'data science', 'cyber', 'software', 'cloud'],
    response: `### 💻 B.Tech in Computer Science & Engineering (CSE)

The Department of Computer Science & Engineering at SRMU is designed to build industry-ready software engineers and AI practitioners:

* **High-Demand Specializations:**
  * Artificial Intelligence & Machine Learning (AI & ML)
  * Data Science & Big Data Engineering
  * Cyber Security & Threat Intelligence
  * Cloud Computing & DevOps
  * Full Stack Web & Mobile App Development
* **Modern Computing Infrastructure:**
  * High-performance GPU labs, IoT development kits, and dedicated coding incubation pods.
  * Integration with industry certifications (AWS Academy, Oracle, Microsoft Learn).
* **Placement & Career Impact:**
  * CSE graduates secure roles in top tier IT and product companies with offers ranging from **₹4.5 LPA to ₹17+ LPA**.`,
    sources: [
      { title: 'Faculty of Engineering & Tech - Dept of CSE', category: 'Faculty' },
      { title: 'Advanced Computing & AI Lab Portfolio', category: 'Labs' }
    ]
  },
  {
    keywords: ['placement', 'recruit', 'salary', 'package', 'company', 'career', 'job', 'internship', 'hiring', 'accenture', 'amazon', 'jaro'],
    response: `### 🚀 SRMU Placements & Top Recruiters

SRMU maintains an impressive career track record powered by its **Central Training & Placement Cell (CTPC)**:

* **Placement Highlights (2025-2026):**
  * **Placement Success Rate:** ~**90%** overall (100% in Engineering, Management, BCA & Polytechnic).
  * **Highest Package Offered:** **INR 17 LPA** (with off-campus tech placements reaching ₹24+ LPA).
  * **Average Package:** **INR 4.50 LPA**.
* **Leading Corporate Partners (300+ Recruiters):**
  * *Tech & Consulting:* **Accenture, Amazon, TCS, Infosys, Wipro, Capgemini, Coforge, Cognizant**.
  * *EdTech & Sales:* **Jaro Education, Internshala, Byju's, Upgrade**.
  * *Finance & Retail:* **BlueStone Jewellery, ICICI Bank, HDFC, Axis Bank, Genpact**.
* **Pre-Placement Grooming:**
  * Technical mock interviews, aptitude training, soft skills workshops, and 6-month industrial internship tie-ups.`,
    sources: [
      { title: 'CTPC Annual Placement Report', category: 'Placements' },
      { title: 'Recruiter Partner Directory', category: 'Corporate Relations' }
    ]
  },
  {
    keywords: ['campus', 'location', 'facility', 'facilities', 'hostel', 'library', 'sports', 'lucknow', 'deva', 'barabanki', 'bus', 'transport', 'wifi'],
    response: `### 🏛️ 100-Acre Lush Green Campus & Modern Facilities

**Shri Ramswaroop Memorial University** is situated in an expansive, green, and secure **100-acre smart campus**:

* 📍 **Location:** Lucknow-Deva Road, Barabanki, Uttar Pradesh (PIN: 225003), just ~25 km from Lucknow city center.
* 🏠 **Residential Hostels:** Separate, secured hostels for boys and girls with 24/7 security, Wi-Fi, recreation rooms, and hygienic mess facilities.
* 📚 **Central Library:** Extensive repository of 1,00,000+ volumes, IEEE / DELNET digital journal access, and quiet reading zones.
* 🔬 **Innovation & Incubation Center:** Student startup incubation hub with seed support and patent filing assistance.
* ⚽ **Sports & Wellness:** Cricket ground, football turf, volleyball, basketball, badminton courts, gymnasium, and yoga center.
* 🚌 **Transportation:** Dedicated fleet of 50+ university buses connecting all corners of **Lucknow, Barabanki, and surrounding regions**.`,
    sources: [
      { title: 'SRMU Campus Infrastructure & Virtual Tour', category: 'Campus' },
      { title: 'Hostel & Transport Information Guide', category: 'Amenities' }
    ]
  },
  {
    keywords: ['naac', 'ugc', 'approval', 'accreditation', 'ranking', 'bci', 'pci', 'government', 'recognized', 'rank', 'india today'],
    response: `### 🏅 Approvals, Accreditations & Rankings

SRMU is a statutory state-private university recognized by premier national governing bodies:

* **UGC Approved:** Established under the Uttar Pradesh Private Universities Act (2012) and recognized by the **University Grants Commission (UGC)**.
* **NAAC Accreditation:** Accredited by the National Assessment and Accreditation Council (**NAAC B+ with a 2.7 score**).
* **Statutory Body Approvals:**
  * **Bar Council of India (BCI)** for LL.B and Integrated Law programs.
  * **Pharmacy Council of India (PCI)** for B.Pharm and D.Pharm courses.
  * **NCTE** for Education degrees.
* **National Rankings:**
  * **Ranked 70th** in University (Private) category by *India Today 2025*.
  * **Ranked 429th** in *QS World University Rankings: Southern Asia 2026*.
  * Awarded for excellence in multidisciplinary learning and student employability.`,
    sources: [
      { title: 'Statutory Approvals & Accreditations', category: 'Compliance' },
      { title: 'India Today & QS Rankings Certificate', category: 'Rankings' }
    ]
  }
];
