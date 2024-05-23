import apiClient from './apiClient';

const getSeries = async (slug: string) => {
  try {
    const response = await apiClient.get(`/courses/series/optuser/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching series:', error);
    throw error;
  }
};

export default getSeries;