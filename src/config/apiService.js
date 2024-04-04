const API_URL = 'http://nous-embauchons.com:3000/v1';


export const fetchHomeData = async (options = {}) => {
    const url = `${API_URL}/home/content`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };

  export const fetchAboutData = async (options = {}) => {
    const url = `${API_URL}/about/content`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };

  export const fetchPortfolioData = async (options = {}) => {
    const url = `${API_URL}/portfolio/content`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };