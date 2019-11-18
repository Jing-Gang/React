import request from '../utils/request';

export function addDist() {
  return request('/api/main/addDist');
}
