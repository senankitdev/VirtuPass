import { useQuery } from '@tanstack/react-query';
import api from '../services/api';
import type { Event, SystemInfo } from '../types';

export function useHealthCheck() {
  return useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const res = await api.get<{ status: string; timestamp: string; uptime: number }>('/health');
      return res.data;
    },
    retry: 1,
  });
}

export function useSystemInfo() {
  return useQuery({
    queryKey: ['system-info'],
    queryFn: async () => {
      const res = await api.get<SystemInfo>('/system/info');
      return res.data;
    },
    retry: 1,
  });
}

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await api.get<Event[]>('/events');
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useEvent(id: string) {
  return useQuery({
    queryKey: ['events', id],
    queryFn: async () => {
      const res = await api.get<Event>(`/events/${id}`);
      return res.data;
    },
    enabled: Boolean(id),
  });
}

