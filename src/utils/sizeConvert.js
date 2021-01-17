const sizeMapping = {
  small: 'Size nhỏ',
  medium: 'Size vừa',
  // large: 'Size lớn',
  one: 'Giá',
};

const sizeServiceMapping = {
  small: '/assets/images/ssize.svg',
  medium: '/assets/images/msize.svg',
  // large: '/assets/images/lsize.svg',
  one: '/assets/images/price.svg',
};

export default function (size) {
  return sizeMapping?.[size] || 'Size';
}

export const sizeService = (size) => {
  return sizeServiceMapping?.[size] || 'Size';
};
