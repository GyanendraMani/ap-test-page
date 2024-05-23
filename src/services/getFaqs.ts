import apiClient from './apiClient';

const getFaqs = async () => {
  try {
    const response = await apiClient.get(`/courses/faqs?language=english`);
    return response.data;
  } catch (error) {
    console.error('Error fetching faqs:', error);
    throw error;
  }
};

export default getFaqs;