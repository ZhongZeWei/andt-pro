import request from '@/utils/request';

export async function queryBaseCity() {
  return request('https://www.easy-mock.com/mock/5c3a0b05dc2b87561b8de837/example/base/city/search/1/2');
}
