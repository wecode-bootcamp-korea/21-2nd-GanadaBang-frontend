export const filterDataSet = [
  {
    type: 'ROOM_FILTER_BUTTON',
    title: '원룸, 투·쓰리룸, 오피스텔·도시형',
    subTitle: '방종류',
    list: [
      { id: 1, name: 'room_type', value: '원룸', checked: true },
      { id: 2, name: 'room_type', value: '투·쓰리룸', checked: true },
      {
        id: 3,
        name: 'room_type',
        value: '오피스텔·도시형생활주택',
        checked: true,
      },
    ],
  },
  {
    type: 'DEAL_FILTER_BUTTON',
    title: '월세, 전세, 매매',
    subTitle: '거래유형',
    list: [
      { id: 1, name: 'deal_type', value: '월세', checked: true },
      { id: 2, name: 'deal_type', value: '전세', checked: true },
      { id: 3, name: 'deal_type', value: '매매', checked: true },
    ],
    range: {
      subTitle: '가격',
      list: [
        {
          id: 'deposit',
          value: '보증금/전세가',
          step: 10,
          range: [0, 100],
          unit: 10,
        },
        {
          id: 'monthlyRent',
          value: '월세',
          step: 20,
          range: [0, 100],
          unit: 1,
        },
        {
          id: 'sale',
          value: '매매가',
          step: 10,
          range: [0, 100],
          unit: 100,
        },
      ],
    },
  },
];
