import Header from "./ServiceHeader";

const HeaderData = () => {
  const headers = [
    {
      nameOfPerson: "",
      reviews: "",
      rating: "",
      profilePic: "",
      queue: "",
      serviceName: "",
    },
  ];
  return (
    <>
      {headers.map((header) => (
        <Header
          serviceName={header.serviceName}
          reviews={header.reviews}
          rating={header.rating}
          profilePic={header.profilePic}
          queue={header.queue}
          nameOfPerson={header.nameOfPerson}
        />
      ))}
    </>
  );
};

export default HeaderData;
