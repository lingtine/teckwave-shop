export const formatPrice = (number) => {
  let VND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  return VND.format(number);
};
