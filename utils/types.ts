// types.ts

// Base interface for all responses
export interface BaseResponse<T> {
  status?: boolean;
  message?: string | null;
  data: T;
}

// Interface for user types
export interface UserType {
  id: number;
  name: string;
}

// Specific response interfaces extending the base response
export interface UserTypesResponse extends BaseResponse<UserType[]> {}

//sign up
export interface SignUpData {
  email: string;
  password: string;
  password_confirmation: string;
  business_name: string;
  user_type_id: number;
}

export interface SignupResponse {
  status: boolean;
  message: string;
  data: {
    user_id: number;
    user_type: "investor" | "agripreneur" | "researcher" | "others";
  };
}

export interface AuthResponse extends BaseResponse<UserData> {}

// login
export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse
  extends BaseResponse<{
    user_id: number;
    user_type: "investor" | "agripreneur" | "researcher" | "others";
    user_type_id: number;
    status: "active" | "inactive";
    token: string | null;
  }> {}

export interface UserData {
  user_id: number;
  user_type: "investor" | "agripreneur" | "researcher" | "others";
  status: "active" | "inactive";
  token: string | null;
}

// Forgot password related interfaces
export interface ForgotPasswordData {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

//profile data
export interface ProfileCredentials {
  id: number | undefined;
  type: number | undefined;
}
export interface ProfileResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    uuid: string;
    name: string;
    user_type_id: string;
    user_type: string;
    email: string;
    tags: string[];
    status: string;
    user_id: number | null;
    about: string;
    research_type: string;
    sector: string;
    address: string;
    facebook: string;
    website: string;
    instagram: string;
    twitter: string | null;
    media: MediaItem[];
    job_posts: JobPost[];
    products: Product[];
    news: NewsItem[];
    team_members: TeamMember[];
  };
}

export interface SectorResponse extends BaseResponse<Sector[]> {}

export interface Sector {
  id: number;
  name: string;
  slug: string;
}

export interface MediaItem {
  id: number;
  media_link: string | null;
  description: string;
  image: string;
}

export interface JobPost {
  user_id?: number;
  id?: number;
  title?: string;
  salary_min: string;
  salary_max: string;
  workplace_type: string;
  job_type?: string;
  location?: string;
  description?: string;
  application_deadline?: string; 
  job_status?: string;
  status?: string;
}

export interface Product {
  // Define fields here
}

export interface NewsItem {
  // Define fields here
}

export interface TeamMember {
  // Define fields here
}
export interface userProfileDataMore {
  about: string;
  funding_stage: string;
  average_annual_revenue: string;
  produce_information: string | null;
  is_available_merger: boolean;
  is_available_acquisition: boolean;
}

export interface SocialMediaLink {
  name: string;
  link: string;
}
export interface Speaker {
  id: number;
  name: string;
  position: string;
  image: string;
}
export interface UserProfileData {
  user_id: string;
  user_type_id: string;
  about: string;
  name?: string;
  business_name?: string;
  user_type: "agripreneur" | "investor" | "researcher" | "others";
  is_registered?: string;
  proof_of_address?: string;
  funding_stage?: string;
  address?: string;
  sector?: string;
  research_sector?: string;
  farm_size?: string;
  more?: userProfileDataMore;
  business_type?: string;
  produce_type?: string;
  labor_force?: string;
  founding_year?: string;
  years_of_operation?: string;
  average_annual_revenue?: number;
  social_media?: SocialMediaLink[];
  website?: string;
  business_phone?: string;
  business_email?: string;
  is_available_merger?: boolean;
  is_available_acquisition?: boolean;
  investor_type?: string;
  investment_sector?: string;
  period_of_investment?: string;
  social_media_link?: SocialMediaLink[];
  researcher_type?: string;
  sector_id?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface Agripreneurs {
  agripreneur_id: number;
  business_name: string;
  address: string;
  team_member_count: number;
  tags: string[];
  image: string;
  banner_image: string;
}
export interface Investors {
  investor_id: number;
  name: string;
  address: string;
  team_member_count: number;
  tags: string[];
  image: string;
  banner_image: string;
}
export interface Researchers {
  id: number;
  user_id: number;
  topic: string;
  description: string;
  link: string;
  research_stage: string;
  collaborators: any[] | null;
  start_date: string;
  sector: string | null;
  tag: string[];
  image: string;
  banner_image: string;
}
export interface Events {
  id: number;
  organiser_name?: string | null;
  title: string;
  link: string;
  start_date: string;
  end_date: string;
  image: string;
  description: string;
  created_at: string;
  speakers: Speaker[];
}

export interface Jobs {
  id: number;
  title: string;
  slug: string;
  salary_min: string;
  salary_max: string;
  workplace_type: "remote" | "onsite" | "hybrid";
  job_type: string;
  location: string;
  description: string;
  application_deadline: string;
  job_status: string;
  status: string;
}

export interface SearchAgripreneurData {
  location: string | null;
  sector: string | null;
  scale: string | null;
  type: string | null;
  page: number | null;
}

export interface SearchInvestorData {
  location: string | null;
  sector: string | null;
  scale: string | null;
  type: string | null;
  page: number | null;
}
export interface SearchEventData {
  search: string | null;
  page: number | null;
}
export interface SearchResearchData {
  search: string | null;
  page: number | null;
}

export interface AgripreneurPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export interface InvestorPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}
export interface EventPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}
export interface ResearchPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}
export interface JobsPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export interface AgripreneurResponse {
  status: boolean;
  message: string;
  data: Agripreneurs[];
  pagination: AgripreneurPagination;
}
export interface InvestorResponse {
  status: boolean;
  message: string;
  data: Investors[];
  pagination: InvestorPagination;
}
export interface EventResponse {
  status: boolean;
  message: string;
  data: Events[];
  pagination: EventPagination;
}
export interface ResearchResponse {
  status: boolean;
  message: string;
  data: Researchers[];
  pagination: ResearchPagination;
}

export interface JobsResponse {
  status: boolean;
  message: string;
  data: Jobs[];
   pagination: JobsPagination;
}

export interface ProduceTypes {
  id: number;
  name: string;
  slug: string;
}

export interface produceTypeList {
  status: boolean;
  message: string;
  data: ProduceTypes[];
}

export interface AgripreneurDetails {
  status: boolean;
  message: string;
  data: {
    agripreneur_id: number;
    business_name: string;
    segment_id: string;
    sub_segment_id: string;
    address: string;
    more: {
      about: string;
      funding_stage: string;
      average_annual_revenue: string;
      produce_information: any; 
      is_available_merger: boolean;
      is_available_acquisition: boolean;
    };
    is_registered: string;
    farm_size: string;
    founding_year: string;
    years_of_operation: string;
    produce_type: string;
    farming_equipmet: any; 
    labor_force: string;
    water_source: string;
    inventory: string;
    social_media: string[]; 
    image: string;
    business_type: string;
    website: string;
    business_phone: string;
    business_email: string;
    banner_image: string;
    media: any[];
    job_posts: any[];
    products: any[];
    news: any[];
    team_members: any[];
    kyc: any[]; 
  };
}
export interface InvestorDetails {
  status: boolean;
  message: string;
  data: {
    user_type: string;
    investor_id: number;
    name: string;
    about: string;
    location: string;
    investor_type: string;
    investment_sector: string;
    investment_sub_sector: string;
    period_of_investment: string;
    years_of_experience: string;
    investment_portfolio: string;
    team: string | null;
    awards: string | null;
    social_media_link: string | null;
    image: string;
    address: string;
    website: string;
    banner_image: string;
    media: any[]; 
    job_posts: any[];
    products: any[];
    news: any[];
    team_members: any[];
  };
}
export interface EventDetails {
  status: boolean;
  message: string;
  data: {
    id: number;
    title: string;
    organiser_name?: string | null;
    link: string;
    start_date: string;
    end_date: string;
    image: string;
    description: string;
    created_at: string;
    speakers: Speaker[];
  };
}
export interface ResearchDetails {
  status: boolean;
  message: string;
  data: {
    id: number;
    user_id: number;
    topic: string;
    description: string;
    tag: string | null;
    image: string;
    link: string;
    research_stage: string;
    collaborators: any[] | null;
    sector: string | null;
  };
}
