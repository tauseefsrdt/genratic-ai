export interface AdmissionData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_ADMISSIONS: AdmissionData[] = [
  {
    id: 'adm-process',
    title: 'SRMU Admission Process 2026-27',
    category: 'Admission',
    description: 'Step-by-step admission workflow for undergraduate, postgraduate, and diploma programs at SRMU.',
    content: `The admission process at Shri Ramswaroop Memorial University (SRMU) is merit-driven, transparent, and conducted online/offline:

1. **Online Application**: Register on the official portal at [srmu.ac.in/apply](https://srmu.ac.in) or visit the Lucknow-Deva Road Admission Office.
2. **SRMUSET Entrance Exam**: Appear for SRMUSET (National Scholarship cum Entrance Test) to qualify and claim tuition fee waivers up to 100%. National scores (JEE Main, CUET, CAT, MAT, CLAT) are also accepted.
3. **Document Verification & Counseling**: Submit academic certificates (10th/12th/Graduation marksheet, ID proof, photos) for verification.
4. **Provisional Admission & Fee Deposit**: Receive admission confirmation and submit the initial semester fee to secure your enrollment.`,
    keywords: ['admission', 'apply', 'application', 'eligibility', 'process', 'entrance', 'form', 'how to apply', 'registration', 'deadline', 'admissions 2026'],
    url: 'https://srmu.ac.in/admissions'
  },
  {
    id: 'adm-srmuset',
    title: 'SRMUSET 2026 Entrance Test',
    category: 'Admission',
    description: 'National Scholarship cum Entrance Test for all aspiring UG and PG applicants.',
    content: `**SRMUSET (Shri Ramswaroop Memorial University Scholarship cum Entrance Test)** is the premier online test designed to identify academic talent and allocate merit scholarships ranging from 10% to 100% of tuition fees. Test slots can be booked online and taken from home or test centers.`,
    keywords: ['srmuset', 'entrance test', 'exam', 'srmu entrance', 'test slot', 'scholarship test'],
    url: 'https://students.srmu.ac.in/login'
  }
];
