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
export interface SignupResponse
  extends BaseResponse<{
    user_id: number;
    user_type: "Investor" | "Agripreneur" | "Researcher" | "Others";
  }> {}

export interface AuthResponse extends BaseResponse<UserData> {}

// login 
export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse
  extends BaseResponse<{
    user_id: number;
    user_type: "Investor" | "Agripreneur" | "Researcher" | "Others";
    user_type_id: number;
    status: "active" | "inactive";
    token: string | null;
  }> {}

export interface UserData {
  user_id: number;
  user_type: "Investor" | "Agripreneur" | "Researcher" | "Others";
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
export interface ProfileData {
  id: number | undefined;
  type: number | undefined;
}
export interface ProfileResponse
  extends BaseResponse<{
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
  }> {}


export interface MediaItem {
  id: number;
  media_link: string | null;
  description: string;
  image: string;
}

  export interface JobPost {
    id: number;
    title: string;
    salary_min: string;
    salary_max: string;
    workplace_type: string;
    job_type: string;
    location: string;
    description: string;
    application_deadline: string; // ISO 8601 date string
    job_status: string;
    status: string;
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

