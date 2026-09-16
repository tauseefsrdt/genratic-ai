import axios from 'axios';
import { SearchApiRequest, SearchApiResponse } from '../types/ai';

const API_BASE_URL = (import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL || 'http://localhost:8080';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

/**
 * Backend integration helper for Phase 2:
 * When Spring Boot API is running at /api/ai/search, this method sends the search payload.
 */
export async function callSpringSearchApi(request: SearchApiRequest): Promise<SearchApiResponse> {
  const response = await apiClient.post<SearchApiResponse>('/api/ai/search', request);
  return response.data;
}
