// types.ts
export interface UserType {
    id: number
    name: string
  }
  
  export interface UserTypesResponse {
    status: boolean
    message: string | null
    data: UserType[]
  }

 export interface SignupResponse {
   status: boolean;
   message: string;
   data: {
     user_id: number;
     user_type: "Investor" | "Agripreneur" | "Researcher" | "Others";
   };
 }
export  interface AuthResponse {
  status: boolean;
  message: string | null;
  data: UserData;
}

export interface LoginData {
  email: string;
  password: string
}

export interface UserData {
  user_id: number;
  user_type: 'Investor' | 'Agripreneur' | 'Researcher' | 'Others';
  status: 'active' | 'inactive';
  token: string | null;
}

export interface ForgotPasswordData {
  email: string
}
export interface ForgotPasswordResponse {
  message: string
}

  