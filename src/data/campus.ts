export interface CampusData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
  url: string;
}

export const SRMU_CAMPUS: CampusData[] = [
  {
    id: 'campus-hostel',
    title: '100-Acre Campus & Residential Hostels',
    category: 'Campus',
    description: 'Overview of SRMU 100-acre campus on Lucknow-Deva Road, modern hostels, cafeterias, and sports arenas.',
    content: `SRMU operates on an expansive **100-acre green smart campus** on Lucknow-Deva Road, Barabanki (25 km from Lucknow):

* **Hostel Accommodation**: Separate secured hostels for boys and girls with AC/Non-AC rooms, 24x7 Wi-Fi, laundry, common rooms, TV lounges, and hygienic multi-cuisine mess.
* **Smart Classrooms**: Air-conditioned lecture theatres with interactive audio-visual equipment and digital lecture capture.
* **Central Library**: Over 1,00,000+ print volumes, online e-resources (DELNET, IEEE), and 24/7 quiet reading halls.
* **Transportation**: 50+ university buses providing pickup across all routes in Lucknow, Barabanki, and adjoining towns.
* **Sports & Gymnasium**: Full cricket stadium, football ground, basketball court, lawn tennis, badminton courts, indoor games arena, and modern gymnasium.`,
    keywords: ['campus', 'hostel', 'hostels', 'accommodation', 'mess', 'rooms', 'living', 'lucknow', 'deva road', 'barabanki', 'bus', 'transport', 'library', 'sports', 'gym'],
    url: 'https://srmu.ac.in/campus-life'
  }
];
