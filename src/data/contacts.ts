export interface ContactData {
  id: string;
  department: string;
  phone: string;
  email: string;
  location: string;
  keywords: string[];
  url: string;
}

export const SRMU_CONTACTS: ContactData[] = [
  {
    id: 'contact-admission',
    department: 'Central Admission Cell',
    phone: '1800 102 6004 / 1800 103 5298 / +91 9120007948 (WhatsApp)',
    email: 'admissions@srmu.ac.in',
    location: 'Ground Floor, Administrative Block, SRMU Campus, Lucknow-Deva Road, Barabanki (PIN: 225003)',
    keywords: ['contact', 'helpline', 'phone', 'email', 'number', 'address', 'location', 'toll free', 'whatsapp', 'reach', 'enquiry', 'support'],
    url: 'https://srmu.ac.in/contact-us'
  },
  {
    id: 'contact-placement',
    department: 'Central Training & Placement Cell (CTPC)',
    phone: '+91-5248-262639',
    email: 'placements@srmu.ac.in',
    location: 'Corporate Relations Wing, SRMU Campus',
    keywords: ['placement contact', 'corporate cell', 'recruiter contact'],
    url: 'https://srmu.ac.in/placements'
  }
];
