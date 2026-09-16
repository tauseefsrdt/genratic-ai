export interface FacilityData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_FACILITIES: FacilityData[] = [
  {
    id: 'labs-facilities',
    title: 'Advanced Labs & Tech Infrastructure',
    category: 'Facilities',
    description: 'State-of-the-art computer centers, pharmacy laboratories, moot courts, mechanical workshops, and agricultural farms.',
    content: `SRMU offers world-class experimental infrastructure:

* **Computing Centers**: 10+ advanced computer labs equipped with high-speed fiber internet, Linux/Windows servers, and AI workstation pods.
* **Moot Court Hall**: High-tech simulated courtroom for law students to practice real-life trial advocacy and mooting competitions.
* **Pharmacy & Science Labs**: Certified formulation labs, pharmacology testing units, and central instrumentation facilities.
* **Agricultural Experimental Farms**: 15+ acres of crop research and polyhouse farming facilities on campus.
* **Health & Medical Care**: On-campus medical dispensary with qualified physicians and 24/7 emergency ambulance service.`,
    keywords: ['facility', 'facilities', 'labs', 'laboratory', 'moot court', 'workshop', 'computer lab', 'medical', 'hospital', 'dispensary', 'infrastructure'],
    url: 'https://srmu.ac.in/facilities'
  }
];
