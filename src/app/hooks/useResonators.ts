'use client';

import { useQuery } from '@tanstack/react-query';
import axios from '../lib/axiosInstance';
import { Resonator } from '../types/resonatorType';

async function fetchResonators(): Promise<Resonator[]> {
  try {
    const response = await axios.get(`/resonators/list`);
    console.log("response", response.data.resonatorData.resonators);
    return response.data.resonatorData.resonators;

  } catch (error) {
    console.error('Error fetching all resonators:', error);
    throw error;
  }
}

export const useResonators = () => {
  return useQuery<Resonator[], Error>({
    queryKey: ['resonators'],
    queryFn: fetchResonators,
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
