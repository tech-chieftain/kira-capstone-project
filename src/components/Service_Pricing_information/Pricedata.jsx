import Pricepege from "./Pricepage";
const PriceList = () => {
  const prices  = [
    {
      price: "",
      data: "",
      date: "",
      revisions: "",
    },
  ];
  return (
    <>
      {prices.map((Price) => (
        <Prices
          price={Price.price}
          data={Price.data}
          date={Price.date}
          revisions={Price.revisions}
        />
      ))}
    </>
  );
};

export default PriceList;
