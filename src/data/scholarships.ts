export interface ScholarshipData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_SCHOLARSHIPS: ScholarshipData[] = [
  {
    id: 'merit-scholarships',
    title: 'SRMUSET & Merit-Based Scholarships',
    category: 'Scholarships',
    description: 'Up to 100% tuition fee waiver for academic toppers, SRMUSET high percentiles, and national exam qualifiers.',
    content: `SRMU believes financial constraints should never hinder deserving minds. Scholarship categories include:

* **SRMUSET Rank Holders**: 100% to 25% tuition fee waiver based on percentiles.
* **10+2 / Graduation Academic Merits**:
  * 95% & above: 100% Tuition Fee Waiver
  * 90% to 94.9%: 50% Tuition Fee Waiver
  * 80% to 89.9%: 25% Tuition Fee Waiver
* **Sports & Cultural Achievers**: Special concession for state and national champions.
* **Defense & Armed Forces Ward**: 10% special concession for wards of defense and paramilitary forces.
* **Covid / Sibling Concessions**: 10% sibling discount on tuition fees.`,
    keywords: ['scholarship', 'scholarships', 'fee waiver', 'discount', 'financial aid', 'merit scholarship', 'concession', 'srmuset scholarship'],
    url: 'https://srmu.ac.in/scholarships'
  }
];
