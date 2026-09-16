export interface ResearchData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_RESEARCH: ResearchData[] = [
  {
    id: 'research-phd',
    title: 'Research & Innovation Ecosystem at SRMU',
    category: 'Research',
    description: 'Ph.D. programs, patents, funded research projects, and student startup incubation center.',
    content: `SRMU fosters high-impact research, innovation, and entrepreneurship:

* **Doctoral (Ph.D.) Programs**: Offered across Engineering, Management, Computer Applications, Law, Pharmacy, Agriculture, Physics, Chemistry, and Humanities.
* **Innovation & Incubation Hub**: Dedicated startup incubation facility assisting student entrepreneurs from prototyping to seed funding and patent filing.
* **Funded Research Projects**: Active projects supported by DST, SERB, ICSSR, and state government scientific councils.
* **Publications & Patents**: Over 1,500+ Scopus/WoS indexed research papers and 50+ patents filed by university faculty and scholars.`,
    keywords: ['research', 'phd', 'ph.d', 'doctorate', 'patents', 'innovation', 'incubation', 'startup', 'funding', 'publications'],
    url: 'https://srmu.ac.in/research'
  }
];
