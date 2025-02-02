const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`, {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default api;