export default number => {
  if (!number) return '0 đ';
  if (isNaN(String(number).replace(',', '.'))) return '0 đ';
  return (
    new Intl.NumberFormat('vi-VN', {}).format(
      String(number)
        .replace(',', '.')
        .split('.')?.[0] ?? String(number).split('.')?.[0]
    ) + ' đ'
  );
};
