import { Dispatch, SetStateAction } from "react";

export interface stepProps {
  step?: number;
  setStep: Dispatch<SetStateAction<number>>;
  onComplete: (a?: any)  => any;
  onCancel?: ()  => any;
  isDashboardContent?: boolean,
  isRecentJob?: boolean,
  jobDetails? : {
    companyDesc: string,
    companyGoal: string,
    companyName: string,
    endDate: string,
    jobTitle: string,
    startDate: string,
    stillWorkingHere: boolean,
    responsibility: string,
    impact: string
  }
}

export interface textProps {
  text: string;
  className?: string;
  weight?: string;
  color?: string;
  size?: string;
  lineheight?: string;
}

export interface candidateOnboardProps {
  email: string;
   password: string;
      firstname: string;
      lastname: string;
      country:string,
      status:string,
      nationality:string,
}
export interface employerOnboardProps {
  email: string;
   password: string;
      firstname: string;
      lastname: string;
   
  workEmail: string;
      companyName:string,
}

export interface candidateContactProps {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  country: string;
  city: string;
  language: string;
  phone: string;
  relocating: boolean;
}
export interface candidateEducation {
  institution: string;
  course: string;
  awards: string[]; // eg ["Best in science", "besy in biology"]
}
 
interface userInfoDetails {
  contactInfo: candidateContactProps;
  education:candidateEducation
}

export interface SingleJobHistory {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  companyDesc: string;
  companyGoal: string;
  stillWorkingHere: boolean;
  responsibility: string;
  impact: string;
}
export interface ProjectResponseProps {
  resp: string[];
}

export interface OtherJobsWithoutProjectSamples {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  stillWorkingHere: boolean;
}

export interface UserEducationDetails {
  schName: string;
  schLocation: string;
  startDate: string;
  endDate: string;
  field: string;
  degreeName: string;
  stillSchoolsHere: boolean;
}
export interface EducationalDetailsData {
  data: UserEducationDetails[]; 
}

export interface PersonalSummary {
  summary: string; 
}

