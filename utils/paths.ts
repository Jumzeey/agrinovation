// ~/utils/paths.ts

const API_PATHS = {
  AUTH: {
    LOGIN: "/connect/login",
    SIGNUP: "/connect/signup",
    FORGOT_PASSSWORD: "/connect/forgot",
    LOGOUT: "/auth/logout",
  },
  USERS: {
    USERTYPE: "/others/user-types",
    PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/update/profile",
    LIST: "/users",
  },
  GENERAL: {
    MEDIA: "/user/media",
    JOB: "/user/job",
    PRODUCT: "/user/product",
    TEAM: "/user/team-member",
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
  },
};

export default API_PATHS
