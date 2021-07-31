import Logopage from "./Logopage";

const PriceList = () => {
  const reviews = [
    {
     price: "",
        data: "",
           date: "",
             revisions:"",
     
        },
    ];
  return (
    <>
      {Price.map((Price) => (
            <Prices
                price={Price.price}
                  data={Price. data}
                     date={Price.date}
                       revisions={Price.revisions}
           />
         ))}
      </>
     );
  };

export default PriceList;