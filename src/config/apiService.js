// const API_URL = 'http://nous-embauchons.com:3000/v1';
const API_URL = 'http://15.207.175.144:3000/v1';
// const API_URL = 'http://localhost:3000/v1';

// export const fetchHomeData = async () => {
//   try {
//     const response = await fetch('./json/homeData.json');

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return response.json();
//   } catch (error) {
//     console.error('There was a problem with reading the JSON file:', error);
//     throw error;
//   }
// };

// export const fetchHomeData = async (options = {}) => {
//     const homedata = `./json/homeData.json`;
//     try {
//       const response = await fetch(homedata, options);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//       throw error;
//     }
//   };

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

  export const fetchBlogData = async (options = {}) => {
    const url = `${API_URL}/blog/content`;
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

  export const fetchHireData = async (options = {}) => {
    const url = `${API_URL}/hire/content`;
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

  export const fetchTechnologyData = async (options = {}) => {
    const url = `${API_URL}/technology/content`;
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

  export const fetchMobileAppServiceData = async (options = {}) => {
    const url = `${API_URL}/services/mobileapp/content`;
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

  export const fetchClientFeedbackData = async (options = {}) => {
    const url = `${API_URL}/home/clientfeedbackcontent`;
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