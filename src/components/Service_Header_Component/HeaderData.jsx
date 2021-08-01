import ServiceHeader from "./ServiceHeader";

const HeaderList = () => {
  const Headers = [
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
      {Headers.map((Header) => (
        <Headers
          serviceName={Header.serviceName}
          reviews={Header.reviews}
          rating={Header.rating}
          profilePic={Header.profilePic}
          queue={Header.queue}
          nameOfPerson={Header.nameOfPerson}
        />
      ))}
    </>
  );
};

export default HeaderList;
