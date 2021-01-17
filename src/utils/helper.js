const calculateSalePrice = (discount, price) => {
  let result = price;
  if (discount) {
    result = Math.round(price * (1 - discount));
  }
  return result;
};

const changeValueText = (text) => {
  if (!text) return text;
  const a =
    'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;&';
  const b =
    'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd-------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return text
    .toString()
    .toLowerCase()
    .replace(/TP./i, '')
    .replace(/\s+/g, '')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/--+/g, '')
    .replace(/^-+|-+$/g, '');
};

export { calculateSalePrice, changeValueText };
