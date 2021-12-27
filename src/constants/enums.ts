export const mainType = {
  consume: {
    name: '支出',
    value: 0,
  },
  incoming: {
    name: '收入',
    value: 1,
  },
};

export const paymentType = {
  type: 0,
  name: '消费',
  data: [
    {
      type: 1,
      name: '餐饮',
      list: [
        {
          id: 100,
          type: 1,
          name: '餐饮',
          value: 100,
        },
        {
          id: 102,
          type: 1,
          name: '零食',
          value: 102,
        },
        {
          id: 103,
          type: 1,
          name: '水果',
          value: 103,
        },
        {
          id: 104,
          type: 1,
          name: '饮品',
          value: 104,
        },
      ],
    },
    {
      type: 2,
      name: '购物',
      list: [
        {
          id: 200,
          type: 2,
          name: '美妆',
          value: 200,
        },
        {
          id: 201,
          type: 2,
          name: '日用',
          value: 202,
        },
        {
          id: 203,
          type: 2,
          name: '服饰',
          value: 203,
        },
        {
          id: 204,
          type: 2,
          name: '数码',
          value: 204,
        },
      ],
    },
    {
      type: 3,
      name: '交通',
      list: [
        {
          id: 300,
          type: 3,
          name: '公交',
          value: 300,
        },
        {
          id: 301,
          type: 3,
          name: '地铁',
          value: 301,
        },
        {
          id: 302,
          type: 3,
          name: '自驾',
          value: 302,
        },
        {
          id: 303,
          type: 3,
          name: '出租车',
          value: 303,
        },
        {
          id: 304,
          type: 3,
          name: '共享',
          value: 304,
        },
        {
          id: 305,
          type: 3,
          name: '火车',
          value: 305,
        },
        {
          id: 306,
          type: 3,
          name: '高铁',
          value: 306,
        },
        {
          id: 307,
          type: 3,
          name: '飞机',
          value: 307,
        },
        {
          id: 308,
          type: 3,
          name: '轮船',
          value: 308,
        },
      ],
    },
    {
      type: 4,
      name: '日常',
      list: [
        {
          id: 400,
          type: 4,
          name: '房租',
          value: 400,
        },
        {
          id: 401,
          type: 4,
          name: '水费',
          value: 401,
        },
        {
          id: 402,
          type: 4,
          name: '电费',
          value: 402,
        },
        {
          id: 403,
          type: 4,
          name: '通讯',
          value: 403,
        },
        {
          id: 404,
          type: 4,
          name: '医疗',
          value: 404,
        },
        {
          id: 405,
          type: 4,
          name: '保险',
          value: 405,
        },
      ],
    },
    {
      type: 5,
      name: '娱乐',
      list: [
        {
          id: 501,
          type: 5,
          name: '聚会',
          value: 501,
        },
        {
          id: 502,
          type: 5,
          name: '游戏',
          value: 502,
        },
        {
          id: 503,
          type: 5,
          name: '音乐',
          value: 503,
        },
        {
          id: 504,
          type: 5,
          name: '旅游',
          value: 504,
        },
      ],
    },
    {
      type: 3000,
      name: '其他',
      list: [
        {
          id: 3001,
          type: 3000,
          name: '捐助',
          value: 3001,
        },
        {
          id: 3002,
          type: 3000,
          name: '还款',
          value: 3002,
        },
        {
          id: 3003,
          type: 3000,
          name: '借出',
          value: 3003,
        },
        {
          id: 3004,
          type: 3000,
          name: '纳税',
          value: 3004,
        },
      ],
    },
  ],
};

export const incomingType = {
  type: 1,
  mame: '收入',
  data: [
    {
      type: 1,
      name: '收入',
      list: [
        {
          id: 100,
          type: 1,
          name: '工资',
          value: 100,
        },
        {
          id: 102,
          type: 1,
          name: '红包',
          value: 102,
        },
        {
          id: 103,
          type: 1,
          name: '租金',
          value: 103,
        },
        {
          id: 104,
          type: 1,
          name: '礼金',
          value: 104,
        },

        {
          id: 105,
          type: 1,
          name: '分红',
          value: 105,
        },
        {
          id: 106,
          type: 1,
          name: '理财',
          value: 106,
        },
        {
          id: 107,
          type: 1,
          name: '年终奖',
          value: 107,
        },
        {
          id: 108,
          type: 1,
          name: '借入',
          value: 108,
        },
        {
          id: 109,
          type: 1,
          name: '收款',
          value: 109,
        },
        {
          id: 110,
          type: 1,
          name: '其他',
          value: 110,
        },
      ],
    },
  ],
};

export const paymentTypeMap = {
  1: {
    type: 100,
    name: '',
    value: '',
  },
  2: {
    type: 100,
    name: '',
    value: '',
  },
  3: {
    type: 100,
    name: '',
    value: '',
  },
  4: {
    type: 100,
    name: '',
    value: '',
  },
  5: {
    type: 100,
    name: '',
    value: '',
  },
  6: {
    type: 100,
    name: '',
    value: '',
  },
  7: {
    type: 100,
    name: '',
    value: '',
  },
  8: {
    type: 100,
    name: '',
    value: '',
  },
  9: {
    type: 100,
    name: '',
    value: '',
  },
  10: {
    type: 100,
    name: '',
    value: '',
  },
  11: {
    type: 100,
    name: '',
    value: '',
  },
  12: {
    type: 100,
    name: '',
    value: '',
  },
  13: {
    type: 100,
    name: '',
    value: '',
  },
  14: {
    type: 100,
    name: '',
    value: '',
  },
  15: {
    type: 100,
    name: '',
    value: '',
  },
  16: {
    type: 100,
    name: '',
    value: '',
  },
  17: {
    type: 100,
    name: '',
    value: '',
  },
  18: {
    type: 100,
    name: '',
    value: '',
  },
  19: {
    type: 100,
    name: '',
    value: '',
  },
  20: {
    type: 100,
    name: '',
    value: '',
  },
  21: {
    type: 100,
    name: '',
    value: '',
  },
  22: {
    type: 100,
    name: '',
    value: '',
  },
  23: {
    type: 100,
    name: '',
    value: '',
  },
};

export const key = [
  {
    name: '7',
    value: '7',
  },
  {
    name: '8',
    value: '8',
  },
  {
    name: '9',
    value: '9',
  },
  {
    name: '日期',
    type:'date',
  },
  {
    name: '4',
    value: '4',
  },
  {
    name: '5',
    value: '5',
  },
  {
    name: '6',
    value: '6',
  },
  {
    name: '时间',
    type:'time',
    icon: '',
  },
  {
    name: '1',
    value: '1',
  },
  {
    name: '2',
    value: '2',
  },
  {
    name: '3',
    value: '3',
  },
  {
    name: '地点',
    type:'address'
  },
  {
    name: '.',
    value: '.',
  },
  {
    name: '0',
    value: '0',
    icon: '',
  },
  {
    name: '删除',
    type:'delete',
  },
  {
    name: '完成',
    type:'finish',
  },
];
