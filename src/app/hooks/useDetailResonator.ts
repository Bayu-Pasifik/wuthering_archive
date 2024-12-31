'use client';

import { useQuery } from '@tanstack/react-query';
import axios from '../lib/axiosInstance';
import { DetailResonator, ResonatorGallery } from '../types/detailResonator';
import { Backstory } from '../types/backstoryResonator';
import { Combat } from '../types/combatResonator';
import { VoiceLines } from '../types/voicelinesResonator';

async function fetchDetailResonator(name:string): Promise<DetailResonator> {
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
    queryFn: () => fetchDetailResonator(name),
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
async function fetchGalleryResonators(name:string): Promise<ResonatorGallery[]> {
  try {
    const response = await axios.get(`/resonators/${name}/Gallery`);
    return response.data.resonatorData.galleries;

  } catch (error) {
    console.error('Error fetching all resonators:', error);
    throw error;
  }
}

export const useGalleryResonators = (name:string) => {
  return useQuery<ResonatorGallery[], Error>({
    queryKey: ['resonators/detail/gallery', name],
    queryFn: () => fetchGalleryResonators(name),
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
async function fetchBackstoryResonator(name:string): Promise<Backstory> {
  try {
    const response = await axios.get(`/resonators/${name}/Backstory`);
    return response.data.resonatorData;

  } catch (error) {
    console.error('Error fetching all resonators:', error);
    throw error;
  }
}

export const useBackstoryResonators = (name:string) => {
  return useQuery<Backstory, Error>({
    queryKey: ['resonators/detail/Backstory', name],
    queryFn: () => fetchBackstoryResonator(name),
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
async function fetchCombatResonator(name:string): Promise<Combat> {
  try {
    const response = await axios.get(`/resonators/${name}/Combat`);
    return response.data.resonatorData;

  } catch (error) {
    console.error('Error fetching all resonators:', error);
    throw error;
  }
}

export const useCombatResonators = (name:string) => {
  return useQuery<Combat, Error>({
    queryKey: ['resonators/detail/Combat', name],
    queryFn: () => fetchCombatResonator(name),
    staleTime: 1000 * 60 * 60, // 1 jam
  });
};
async function fetchVoiceLinesResonator(name: string): Promise<VoiceLines> {
  try {
    const response = await axios.get(
      `https://wuthering-wiki-api.vercel.app/api/resonators/${name}/Voicelines`
    );
    return response.data.resonatorData;
  } catch (error) {
    console.error('Error fetching resonator voice lines:', error);
    throw error;
  }
}

// Updated hook with the correct URL
export const useVoiceLinesResonators = (name: string) => {
  return useQuery<VoiceLines, Error>({
    queryKey: ['resonators/detail/VoiceLines', name],
    queryFn: () => fetchVoiceLinesResonator(name),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
