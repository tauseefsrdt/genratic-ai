import { Program } from '../types/program';
import { SearchResultPayload } from '../types/search';
import { SRMU_PROGRAMS } from '../data/programs';
import { SRMU_ADMISSIONS } from '../data/admissions';
import { SRMU_SCHOLARSHIPS } from '../data/scholarships';
import { SRMU_PLACEMENTS } from '../data/placements';
import { SRMU_CAMPUS } from '../data/campus';
import { SRMU_FACILITIES } from '../data/facilities';
import { SRMU_RESEARCH } from '../data/research';
import { SRMU_FAQS } from '../data/faqs';
import { SRMU_CONTACTS } from '../data/contacts';

export class SearchEngineService {
  private lastReferencedProgram: Program | null = null;
  private lastCategory: string = 'General';

  public getLastCategory(): string {
    return this.lastCategory;
  }

  public resetContext() {
    this.lastReferencedProgram = null;
    this.lastCategory = 'General';
  }

  public processQuery(rawQuery: string): SearchResultPayload {
    const query = rawQuery.toLowerCase().trim();

    // 1. Check for Contextual Follow-Up Referrals ("its eligibility", "what is the fee", "how long is it")
    const isPronounFollowUp = /\b(its|it|this|that|the program|the course|fee of this|eligibility of this)\b/i.test(query);

    if (isPronounFollowUp && this.lastReferencedProgram) {
      return this.handleProgramFollowUp(this.lastReferencedProgram, query);
    }

    // 2. Specific Program Search (e.g. "B.Tech CSE", "tell me about MBA", "BCA", "B.Pharm", "Law")
    const matchedProgram = this.findSpecificProgram(query);
    if (matchedProgram) {
      this.lastReferencedProgram = matchedProgram;
      this.lastCategory = 'Programs';
      return this.generateProgramResponse(matchedProgram, query);
    }

    // 3. Multi-Program / Broad Course Inquiries (e.g. "courses after 12th", "computer science programs", "what courses are available")
    if (this.isGeneralProgramQuery(query)) {
      this.lastCategory = 'Programs';
      return this.handleGeneralProgramsQuery(query);
    }

    // 4. Admission Process & SRMUSET
    if (this.isCategoryMatch(query, ['admission', 'apply', 'srmuset', 'entrance', 'form', 'seat', 'registration', 'deadline', 'how can i apply'])) {
      this.lastCategory = 'Admission';
      return this.handleAdmissionQuery();
    }

    // 5. Scholarships & Financial Aid
    if (this.isCategoryMatch(query, ['scholarship', 'scholarships', 'waiver', 'discount', 'financial aid', 'concession', 'merit'])) {
      this.lastCategory = 'Scholarships';
      return this.handleScholarshipQuery();
    }

    // 6. Placements & Recruiters
    if (this.isCategoryMatch(query, ['placement', 'placements', 'salary', 'highest package', 'average package', 'companies', 'recruiters', 'job', 'hiring', 'internship', 'accenture', 'amazon'])) {
      this.lastCategory = 'Placements';
      return this.handlePlacementQuery();
    }

    // 7. Campus, Hostels & Transport
    if (this.isCategoryMatch(query, ['campus', 'hostel', 'hostels', 'accommodation', 'mess', 'rooms', 'lucknow', 'deva road', 'barabanki', 'bus', 'transport', 'sports', 'gym', 'infrastructure'])) {
      this.lastCategory = 'Campus';
      return this.handleCampusQuery();
    }

    // 8. Research & Ph.D.
    if (this.isCategoryMatch(query, ['research', 'phd', 'ph.d', 'doctorate', 'patents', 'innovation', 'incubation', 'startup', 'fellowship'])) {
      this.lastCategory = 'Research';
      return this.handleResearchQuery();
    }

    // 9. Accreditations, UGC, NAAC, Ranking
    if (this.isCategoryMatch(query, ['ugc', 'naac', 'approval', 'approved', 'accreditation', 'accredited', 'ranking', 'bci', 'pci', 'recognized', 'rank', 'india today'])) {
      this.lastCategory = 'Accreditation';
      return this.handleAccreditationQuery();
    }

    // 10. Contact & Support
    if (this.isCategoryMatch(query, ['contact', 'helpline', 'phone', 'email', 'number', 'address', 'location', 'toll free', 'whatsapp', 'support', 'enquiry'])) {
      this.lastCategory = 'Contact';
      return this.handleContactQuery();
    }

    // 11. Off-topic / Unmatched Query Handling
    return this.handleOffTopicQuery(rawQuery);
  }

  private isCategoryMatch(query: string, keywords: string[]): boolean {
    return keywords.some((kw) => query.includes(kw));
  }

  private findSpecificProgram(query: string): Program | null {
    for (const prog of SRMU_PROGRAMS) {
      if (prog.keywords.some((kw) => query.includes(kw))) {
        return prog;
      }
    }
    return null;
  }

  private isGeneralProgramQuery(query: string): boolean {
    return /\b(course|courses|program|programs|degree|degrees|after 12th|computer science|ai|data science|management|btech|ug|pg)\b/i.test(query);
  }

  private handleProgramFollowUp(program: Program, query: string): SearchResultPayload {
    let focus = 'General Details';
    let answer = `Here are the details for **${program.name}**:`;

    if (query.includes('eligibility') || query.includes('criteria') || query.includes('require')) {
      focus = 'Eligibility Criteria';
      answer = `### 📋 Eligibility for ${program.name}\n\nTo enroll in **${program.name} (${program.degree})**, candidates must meet the following criteria:\n\n* **Academic Requirement**: ${program.eligibility}\n* **Entrance Eligibility**: Direct admission or merit rank in SRMUSET / National Tests (JEE Main, CUET).\n* **Duration**: ${program.duration}.`;
    } else if (query.includes('fee') || query.includes('cost') || query.includes('tuition')) {
      focus = 'Fee Structure';
      answer = `### 💰 Fee Structure for ${program.name}\n\n* **Tuition & Academic Fee**: **${program.fee}**\n* **Scholarship Opportunity**: Up to **100% Tuition Fee Waiver** available through the **SRMUSET Entrance Exam** and academic merit scores.`;
    } else if (query.includes('apply') || query.includes('admission') || query.includes('how to')) {
      focus = 'Application Process';
      answer = `### 📝 How to Apply for ${program.name}\n\n1. Visit [srmu.ac.in/apply](https://srmu.ac.in)\n2. Register and choose **${program.name}**\n3. Take the online **SRMUSET** test for seat allotment & scholarship\n4. Submit documents & confirm enrollment.`;
    } else {
      answer = `### 🎓 ${program.name}\n\n${program.description}\n\n* **Duration**: ${program.duration}\n* **Eligibility**: ${program.eligibility}\n* **Fee**: ${program.fee}`;
    }

    return {
      answer,
      category: 'Programs',
      matchedPrograms: [program],
      keyInfo: {
        title: `${program.name} - ${focus}`,
        eligibility: program.eligibility,
        duration: program.duration,
        fee: program.fee,
        admissionProcess: 'Apply online via SRMUSET / Merit Counseling',
        careerOpportunities: program.careerProspects?.join(', '),
        keyHighlights: program.highlights
      },
      sources: [
        { id: 'srmu-prog', title: `SRMU Program Finder - ${program.degree}`, category: 'Curriculum', url: program.url },
        { id: 'srmu-adm', title: 'SRMU Admission & Fee Portal', category: 'Admissions', url: 'https://srmu.ac.in/admissions' }
      ],
      relatedQuestions: [
        `What is the placement record for ${program.degree}?`,
        `How can I get a scholarship for ${program.name}?`,
        'What are the hostel facilities and charges?',
        'What is the next step in admission?'
      ]
    };
  }

  private generateProgramResponse(program: Program, query: string): SearchResultPayload {
    const isEligQuery = query.includes('eligibility');
    const isFeeQuery = query.includes('fee') || query.includes('cost');

    let answer = `### 🎓 ${program.name} (${program.degree})\n\n${program.description}\n\n* **Faculty**: ${program.faculty}\n* **Duration**: ${program.duration}\n* **Eligibility**: ${program.eligibility}\n* **Annual Fee**: **${program.fee}**`;

    if (isEligQuery) {
      answer = `### 📋 Eligibility Requirement for ${program.name}\n\n${program.eligibility}\n\nApplicants can also qualify through national scorecards (JEE / CUET) or by appearing in **SRMUSET 2026**.`;
    } else if (isFeeQuery) {
      answer = `### 💰 Fee Details for ${program.name}\n\n* **Annual Tuition Fee**: **${program.fee}**\n* **Scholarships**: Eligible for up to 100% scholarship via **SRMUSET** and 12th board merit percentiles.`;
    }

    const related = SRMU_PROGRAMS.filter((p) => p.id !== program.id && (p.faculty === program.faculty || p.degree === program.degree)).slice(0, 2);

    return {
      answer,
      category: 'Programs',
      matchedPrograms: [program, ...related],
      keyInfo: {
        title: `${program.name} Key Information`,
        eligibility: program.eligibility,
        duration: program.duration,
        fee: program.fee,
        careerOpportunities: program.careerProspects?.join(', '),
        keyHighlights: program.highlights
      },
      sources: [
        { id: 'srmu-catalog', title: 'SRMU Academic Catalog 2026-27', category: 'Academics', url: program.url },
        { id: 'srmu-fee', title: 'Official Fee Schedule & Guidelines', category: 'Fees', url: 'https://srmu.ac.in/admissions' }
      ],
      relatedQuestions: [
        `What is the eligibility for ${program.name}?`,
        `What is the total fee for ${program.name}?`,
        `What are the placement opportunities for ${program.name}?`,
        'How do I apply online for SRMUSET 2026?'
      ]
    };
  }

  private handleGeneralProgramsQuery(query: string): SearchResultPayload {
    let filtered = SRMU_PROGRAMS;
    let title = 'Programs Offered at SRMU';

    if (query.includes('12th') || query.includes('after 12th') || query.includes('ug') || query.includes('bachelor')) {
      filtered = SRMU_PROGRAMS.filter((p) => ['B.Tech', 'BCA', 'BBA', 'B.Pharm', 'LL.B', 'B.Sc'].includes(p.degree));
      title = 'Undergraduate Programs Available After 12th';
    } else if (query.includes('computer') || query.includes('cs') || query.includes('it') || query.includes('ai')) {
      filtered = SRMU_PROGRAMS.filter((p) => p.keywords.includes('computer science') || p.keywords.includes('bca') || p.keywords.includes('ai'));
      title = 'Computer Science, AI & Technology Programs';
    } else if (query.includes('management') || query.includes('mba') || query.includes('bba')) {
      filtered = SRMU_PROGRAMS.filter((p) => ['MBA', 'BBA'].includes(p.degree));
      title = 'Management & Business Programs';
    }

    return {
      answer: `### 🎓 ${title}\n\nShri Ramswaroop Memorial University offers **115+ career-oriented programs** across 11 disciplines. Based on your search, here are top recommended options with duration, eligibility, and fee details:`,
      category: 'Programs',
      matchedPrograms: filtered.slice(0, 4),
      keyInfo: {
        title: 'Academic Admissions 2026-27',
        admissionProcess: 'Online Application → SRMUSET Test → Counseling → Enrollment',
        keyHighlights: [
          '115+ UG, PG, Integrated & Doctoral Degrees',
          'Industry-Aligned Curriculum with Mandatory Internships',
          'Up to 100% Scholarship on Tuition Fees'
        ]
      },
      sources: [
        { id: 'srmu-programs', title: 'SRMU Official Programs Directory', category: 'Academics', url: 'https://srmu.ac.in/programs' },
        { id: 'srmu-brochure', title: 'University Admissions Brochure 2026', category: 'Admissions', url: 'https://srmu.ac.in/admissions' }
      ],
      relatedQuestions: [
        'Tell me about B.Tech Computer Science.',
        'What scholarships are available through SRMUSET?',
        'What is the admission procedure for 2026?',
        'What are the campus hostel facilities?'
      ]
    };
  }

  private handleAdmissionQuery(): SearchResultPayload {
    const admissionData = SRMU_ADMISSIONS[0];
    return {
      answer: `### 📝 SRMU Admission Process 2026-27\n\n${admissionData.content}\n\n* 📞 **Admission Helpline**: \`1800 102 6004\` / \`1800 103 5298\`\n* 💬 **WhatsApp Desk**: \`+91 9120007948\`\n* 🌐 **Apply Online**: [srmu.ac.in/apply](https://srmu.ac.in)`,
      category: 'Admission',
      matchedPrograms: SRMU_PROGRAMS.slice(0, 3),
      keyInfo: {
        title: 'Admission Steps & Requirements',
        admissionProcess: 'Online Registration → SRMUSET Entrance / National Exam Score → Document Validation → Seat Allotment',
        contactInfo: 'Toll-Free: 1800 102 6004 | WhatsApp: +91 9120007948',
        keyHighlights: [
          'Direct Online Application Portal',
          'SRMUSET 2026 Registration Open',
          'Counseling Desks Active Mon-Sat 9AM - 5:30PM'
        ]
      },
      sources: [
        { id: 'srmu-adm-page', title: 'SRMU Official Admission Portal', category: 'Admissions', url: 'https://srmu.ac.in/admissions' },
        { id: 'srmuset-portal', title: 'SRMUSET Registration & Slot Booking', category: 'Entrance Exam', url: 'https://students.srmu.ac.in/login' }
      ],
      relatedQuestions: [
        'What scholarships are available?',
        'What courses are available after 12th?',
        'What is the fee structure for B.Tech?',
        'Tell me about campus hostel accommodation.'
      ]
    };
  }

  private handleScholarshipQuery(): SearchResultPayload {
    const scholarshipData = SRMU_SCHOLARSHIPS[0];
    return {
      answer: `### 💰 SRMU Scholarships & Financial Aid\n\n${scholarshipData.content}`,
      category: 'Scholarships',
      matchedPrograms: SRMU_PROGRAMS.slice(0, 2),
      keyInfo: {
        title: 'Scholarship Schemes Matrix',
        fee: 'Up to 100% Tuition Fee Waiver on Merit',
        admissionProcess: 'Qualify through SRMUSET or Submit 10+2 / UG Marksheets during Counseling',
        keyHighlights: [
          'SRMUSET High Rankers: Up to 100% Waiver',
          'Board Exam 95%+ Achievers: 100% Waiver',
          'Sports, Defense Wards & Sibling Concessions Available'
        ]
      },
      sources: [
        { id: 'srmu-scholarship', title: 'SRMUSET & Merit Scholarship Guidelines', category: 'Financial Aid', url: 'https://srmu.ac.in/scholarships' }
      ],
      relatedQuestions: [
        'How do I apply for SRMUSET 2026?',
        'What is the fee for B.Tech CSE?',
        'What is the eligibility for MBA?',
        'Tell me about SRMU placements.'
      ]
    };
  }

  private handlePlacementQuery(): SearchResultPayload {
    const placementData = SRMU_PLACEMENTS[0];
    return {
      answer: `### 🚀 SRMU Placements & Corporate Track Record\n\n${placementData.content}`,
      category: 'Placements',
      matchedPrograms: [SRMU_PROGRAMS[0], SRMU_PROGRAMS[3]], // B.Tech CSE & MBA
      keyInfo: {
        title: 'Placement Statistics & Highlights',
        careerOpportunities: 'Software Engineers, Data Scientists, Management Trainees, Financial Analysts',
        keyHighlights: [
          '90% Overall Placement Track Record (100% in Engg & Mgmt)',
          'INR 17 LPA Highest Package (₹24+ LPA Off-Campus Tech)',
          'INR 4.50 LPA Average Package',
          '300+ Recruiters: Accenture, Amazon, TCS, Infosys, Jaro Education'
        ]
      },
      sources: [
        { id: 'srmu-placement', title: 'Central Training & Placement Cell (CTPC) Report', category: 'Placements', url: 'https://srmu.ac.in/placements' },
        { id: 'srmu-recruiters', title: 'Corporate Partners & Recruiter Directory', category: 'Corporate', url: 'https://srmu.ac.in/placements' }
      ],
      relatedQuestions: [
        'Tell me about B.Tech Computer Science.',
        'What is the fee for MBA?',
        'What is the admission process?',
        'What research facilities does SRMU have?'
      ]
    };
  }

  private handleCampusQuery(): SearchResultPayload {
    const campusData = SRMU_CAMPUS[0];
    const facilityData = SRMU_FACILITIES[0];
    return {
      answer: `### 🏫 100-Acre Smart Campus & Hostel Life\n\n${campusData.content}\n\n${facilityData.content}`,
      category: 'Campus',
      matchedPrograms: SRMU_PROGRAMS.slice(0, 2),
      keyInfo: {
        title: 'Campus Life & Infrastructure',
        keyHighlights: [
          '100-Acre Lush Green Wi-Fi Campus on Lucknow-Deva Road',
          'Separate Secured Hostels for Boys & Girls (AC / Non-AC)',
          '1,00,000+ Books Central Library with 24/7 Digital Hub',
          '50+ University Buses Covering Lucknow & Barabanki',
          'Full Cricket Stadium, Sports Complex & Gymnasium'
        ]
      },
      sources: [
        { id: 'srmu-campus', title: 'SRMU Campus Infrastructure & Virtual Tour', category: 'Campus', url: 'https://srmu.ac.in/campus-life' },
        { id: 'srmu-hostel', title: 'Residential Hostel Guidelines & Facilities', category: 'Hostel', url: 'https://srmu.ac.in/facilities' }
      ],
      relatedQuestions: [
        'What courses does SRMU offer after 12th?',
        'What is the fee structure for B.Tech?',
        'How can I apply for admission?',
        'What is the contact number for campus enquiry?'
      ]
    };
  }

  private handleResearchQuery(): SearchResultPayload {
    const researchData = SRMU_RESEARCH[0];
    return {
      answer: `### 🔬 Research, Ph.D. & Innovation Hub\n\n${researchData.content}`,
      category: 'Research',
      matchedPrograms: [SRMU_PROGRAMS[0], SRMU_PROGRAMS[2]], // CSE & AI
      keyInfo: {
        title: 'Research & Innovation Matrix',
        careerOpportunities: 'Research Scientists, Doctoral Scholars, Startup Founders, Patent Attorneys',
        keyHighlights: [
          'Ph.D. Programs in Engineering, Management, Law, Pharmacy & Sciences',
          'Dedicated Technology Incubation Center with Seed Funding',
          '1,500+ Scopus/WoS Indexed Publications & 50+ Patents',
          'Funded Projects from DST, SERB, and Government Bodies'
        ]
      },
      sources: [
        { id: 'srmu-research', title: 'SRMU Research & Innovation Cell', category: 'Research', url: 'https://srmu.ac.in/research' },
        { id: 'srmu-phd', title: 'Ph.D. Admission Bulletin & Regulations', category: 'Doctoral', url: 'https://srmu.ac.in/research' }
      ],
      relatedQuestions: [
        'What courses are available for AI and Data Science?',
        'Tell me about B.Tech CSE.',
        'What is the admission process for Ph.D.?',
        'What scholarships are available?'
      ]
    };
  }

  private handleAccreditationQuery(): SearchResultPayload {
    const faqData = SRMU_FAQS[0];
    return {
      answer: `### 🏅 Approvals, Accreditations & Rankings\n\n${faqData.answer}\n\n* **University Grants Commission (UGC)**: Established under UP Private Universities Act 2012.\n* **NAAC Accreditation**: NAAC B+ with a 2.7 score.\n* **Professional Council Approvals**: **Bar Council of India (BCI)** for Law, **Pharmacy Council of India (PCI)** for Pharmacy, **NCTE** for Education.\n* **National Rankings**: Ranked **70th in India Today 2025 (Private Universities)** and **429th in QS World University Rankings (Southern Asia 2026)**.`,
      category: 'Accreditation',
      matchedPrograms: SRMU_PROGRAMS.slice(0, 3),
      keyInfo: {
        title: 'Accreditation & Approvals',
        keyHighlights: [
          'UGC Approved State-Private University',
          'NAAC B+ Accredited (Score 2.7)',
          'BCI & PCI Statutory Approvals',
          'Ranked 70th by India Today 2025'
        ]
      },
      sources: [
        { id: 'srmu-approvals', title: 'UGC & Statutory Council Approvals', category: 'Accreditation', url: 'https://srmu.ac.in/about-us' },
        { id: 'srmu-rankings', title: 'India Today & QS World Rankings Data', category: 'Rankings', url: 'https://srmu.ac.in/about-us' }
      ],
      relatedQuestions: [
        'What courses does SRMU offer?',
        'Tell me about SRMU placements.',
        'What is the admission process?',
        'Where is SRMU located?'
      ]
    };
  }

  private handleContactQuery(): SearchResultPayload {
    const contact = SRMU_CONTACTS[0];
    return {
      answer: `### 📞 SRMU Contact & Admission Helpline\n\n* 📍 **Campus Address**: ${contact.location}\n* ☎️ **Toll-Free Numbers**: \`1800 102 6004\` / \`1800 103 5298\`\n* 💬 **WhatsApp Helpdesk**: \`+91 9120007948\`\n* 📧 **Email**: \`admissions@srmu.ac.in\` / \`info@srmu.ac.in\`\n* 🌐 **Official Website**: [https://srmu.ac.in](https://srmu.ac.in)`,
      category: 'Contact',
      matchedPrograms: [],
      keyInfo: {
        title: 'SRMU Contact Information',
        contactInfo: 'Toll-Free: 1800 102 6004 | WhatsApp: 919120007948',
        keyHighlights: [
          'Campus Admission Cell open Mon-Sat (9:00 AM - 5:30 PM)',
          'Bus Routes connecting Lucknow & Barabanki',
          'Virtual Counseling Available Online'
        ]
      },
      sources: [
        { id: 'srmu-contact', title: 'SRMU Official Contact & Helpdesk Directory', category: 'Support', url: 'https://srmu.ac.in/contact-us' }
      ],
      relatedQuestions: [
        'What courses are available after 12th?',
        'What is the admission process for 2026?',
        'What scholarships are available?',
        'What are the hostel facilities?'
      ]
    };
  }

  private handleOffTopicQuery(rawQuery: string): SearchResultPayload {
    return {
      answer: `Sorry, I couldn't find relevant information for *"${rawQuery}"* in the official **Shri Ramswaroop Memorial University (SRMU)** knowledge base.\n\nPlease try asking questions related to SRMU academics, admissions, fees, placements, scholarships, or campus life.`,
      category: 'Off-Topic',
      matchedPrograms: [],
      sources: [],
      relatedQuestions: [
        'What courses does SRMU offer after 12th?',
        'Tell me about B.Tech Computer Science & Engineering.',
        'What is the admission process and eligibility for MBA?',
        'What scholarships are available through SRMUSET?',
        'Tell me about SRMU placements and average package.',
        'What are the campus and hostel facilities?'
      ],
      isOffTopic: true
    };
  }
}

export const searchEngine = new SearchEngineService();
