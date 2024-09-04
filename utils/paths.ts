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
    UPDATE_PROFILE: "/users/profile/update",
    LIST: "/users",
  },
  PRODUCTS: {
    LIST: "/products",
    DETAILS: (id: string) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
  },
  ORDERS: {
    LIST: "/orders",
    DETAILS: (id: string) => `/orders/${id}`,
    CREATE: "/orders",
    UPDATE: (id: string) => `/orders/${id}`,
    DELETE: (id: string) => `/orders/${id}`,
  },
};

export default API_PATHS
