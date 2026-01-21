// Cookie utilities for token management
export const cookieUtils = {
  // Set token in cookie
  setToken: (token: string, expiresAt: string) => {
    const expires = new Date(expiresAt);
    document.cookie = `auth_token=${token}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
  },

  // Get token from cookie
  getToken: (): string | null => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'auth_token') {
        return value;
      }
    }
    return null;
  },

  // Remove token from cookie
  removeToken: () => {
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  },


  setUserData: (userData: string) => {
  // Store for 7 days (matching typical session duration)
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  document.cookie = `user_data=${userData}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
},

getUserData: (): string | null => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'user_data') {
      return value;
    }
  }
  return null;
},

removeUserData: () => {
  document.cookie = 'user_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
},
};





