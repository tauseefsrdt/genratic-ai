export interface PlacementData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_PLACEMENTS: PlacementData[] = [
  {
    id: 'placements-overview',
    title: 'SRMU Career Placements & Recruiter Network',
    category: 'Placements',
    description: 'Annual placement statistics, top recruiting companies, average salary packages, and internship training.',
    content: `The **Central Training & Placement Cell (CTPC)** at SRMU prepares students from Year 1 through industry internships, hackathons, and corporate mentorship:

* **Placement Success Rate**: ~**90%** overall placement track record (100% placement achievement in Engineering, Management, BCA & Polytechnic).
* **Highest Salary Package**: **INR 17 LPA** (with off-campus software roles reaching ₹24+ LPA).
* **Average Salary Package**: **INR 4.50 LPA**.
* **300+ Recruiters**:
  * *IT & Tech*: Accenture, Amazon, TCS, Infosys, Wipro, Capgemini, Cognizant, Coforge, Tech Mahindra.
  * *Management & Consulting*: Jaro Education, Internshala, BlueStone Jewellery, ICICI Bank, HDFC, Axis Bank, Genpact.
  * *Core & Manufacturing*: Tata Motors, L&T, Siemens, Sun Pharma.`,
    keywords: ['placement', 'placements', 'highest package', 'average package', 'salary', 'recruiters', 'companies', 'job', 'hiring', 'internship', 'accenture', 'amazon', 'jaro'],
    url: 'https://srmu.ac.in/placements'
  }
];
