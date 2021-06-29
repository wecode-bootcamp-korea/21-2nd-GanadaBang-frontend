const ONE_ROOM = 'ONE_ROOM';
const MULTI_ROOM = 'MULTI_ROOM';
const OFFICETEL = 'OFFICETEL';

export const MAX_NUMBER = 1_000_000_000_000;

export const getRoomTypeName = type => {
  switch (type) {
    case ONE_ROOM:
      return '원룸';
    case MULTI_ROOM:
      return '투·쓰리룸';
    case OFFICETEL:
      return '원룸';
    default:
      return '';
  }
};
