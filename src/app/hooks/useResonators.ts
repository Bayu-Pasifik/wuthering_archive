'use client';

import { useQuery } from '@tanstack/react-query';
import { Resonators } from '../../../public/data/resonators';

const fetchResonators = async () => {
  const res = await fetch('/data/resonators.json'); // pastikan file ada di public/data
  if (!res.ok) {
    throw new Error('Data gagal dimuat');
  }
  const data = await res.json();
  return data.resonators; // pastikan data yang dikembalikan adalah array
};

export const useResonators = () => {
  return useQuery<Resonators[], Error>({
    queryKey: ['resonators'],
    queryFn: fetchResonators,
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
