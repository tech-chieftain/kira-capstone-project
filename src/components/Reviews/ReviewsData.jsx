import Reviews from "./Reviews";

const ReviewsData = () => {
  const reviews = [
    {
      name: "",
      description: "",
      rating: "",
      date: "",
      profilePic: "",
    },
  ];
  return (
    <>
      {reviews.map((review) => (
        <Reviews
          name={review.name}
          description={review.description}
          rating={review.rating}
          profilePic={review.profilePic}
          date={review.date}
        />
      ))}
    </>
  );
};

export default ReviewsData;
