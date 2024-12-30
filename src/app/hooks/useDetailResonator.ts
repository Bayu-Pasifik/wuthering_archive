'use client';

import { useQuery } from '@tanstack/react-query';
import axios from '../lib/axiosInstance';
import { DetailResonator } from '../types/detailResonator';

async function fetchResonators(name:string): Promise<DetailResonator> {
  try {
    const response = await axios.get(`/resonators/${name}`);
    console.log("response", response.data.resonatorData);
    return response.data.resonatorData;

  } catch (error) {
    console.error('Error fetching all resonators:', error);
    throw error;
  }
}

export const useDetailResonators = (name:string) => {
  return useQuery<DetailResonator, Error>({
    queryKey: ['resonators/detail', name],
    queryFn: () => fetchResonators(name),
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
