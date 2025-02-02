const auth = {
  isAuthenticated: () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  },

  setAuth: (value) => {
    localStorage.setItem('isAuthenticated', value);
  },

  clearAuth: () => {
    localStorage.removeItem('isAuthenticated');
  },
};

export default auth;