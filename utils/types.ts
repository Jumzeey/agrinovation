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
  