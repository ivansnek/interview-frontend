import { useLocation } from 'react-router-dom';

export function useQuery() {
  const { search } = useLocation()
  if (!search) return {}
  return new URLSearchParams(search);
}