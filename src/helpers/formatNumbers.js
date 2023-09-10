export const formatNumber = (number) => {
  if (!number) return "Rp 0";
  let toLocale = number.toLocaleString("id-ID");
  return "Rp " + toLocale;
};
