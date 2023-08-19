export const formatPrice = (number) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(number);
};
