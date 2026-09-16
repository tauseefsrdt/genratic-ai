export interface FAQData {
  id: string;
  question: string;
  category: string;
  answer: string;
  keywords: string[];
  url: string;
}

export const SRMU_FAQS: FAQData[] = [
  {
    id: 'faq-ugc-naac',
    question: 'Is SRMU UGC approved and NAAC accredited?',
    category: 'Accreditation',
    answer: 'Yes, Shri Ramswaroop Memorial University (SRMU) is established under the Uttar Pradesh Private Universities Act (2012) and recognized by UGC. SRMU holds NAAC B+ accreditation with a 2.7 score, BCI approval for Law, and PCI approval for Pharmacy.',
    keywords: ['ugc', 'naac', 'approval', 'approved', 'accredited', 'government', 'bci', 'pci', 'valid', 'ranking'],
    url: 'https://srmu.ac.in/about-us'
  },
  {
    id: 'faq-after-12th',
    question: 'What courses are available after 12th at SRMU?',
    category: 'Programs',
    answer: 'After 12th, students can choose from diverse bachelor programs: B.Tech (CSE, AI/ML, Civil, Mechanical), BCA, BBA, B.Com (Hons), B.Pharm, D.Pharm, BA LL.B (5-Yr Integrated), B.Sc (Hons) Agriculture, and BA Journalism.',
    keywords: ['after 12th', '12th pass', 'undergraduate', 'courses after 12th', 'ug admission', 'bachelor'],
    url: 'https://srmu.ac.in/programs'
  },
  {
    id: 'faq-hostel-fees',
    question: 'What are the hostel rules and charges?',
    category: 'Campus',
    answer: 'SRMU offers separate secure hostels for male and female students with 24/7 security, Wi-Fi, laundry, and multi-cuisine meals. Room options range from standard triple sharing to deluxe double AC rooms.',
    keywords: ['hostel rules', 'hostel charges', 'hostel fees', 'living on campus', 'mess food'],
    url: 'https://srmu.ac.in/campus-life'
  }
];
