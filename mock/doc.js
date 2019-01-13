import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/datalist': mockjs.mock({
    'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};