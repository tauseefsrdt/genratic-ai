export interface Program {
  id: string;
  name: string;
  degree: 'B.Tech' | 'BCA' | 'MCA' | 'M.Tech' | 'MBA' | 'BBA' | 'B.Pharm' | 'D.Pharm' | 'LL.B' | 'B.Sc' | 'Ph.D' | 'Diploma';
  faculty: string;
  duration: string;
  eligibility: string;
  fee: string;
  description: string;
  highlights?: string[];
  careerProspects?: string[];
  keywords: string[];
  tags: string[];
  url: string;
}
