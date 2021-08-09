import Reviews from "./Reviews";
import { ReviewData } from "../MockData";

// eslint-disable-next-line arrow-body-style
const ReviewsData = () => {
  return (
    <>
      {ReviewData.map((data) => (
        <Reviews
          name={data.name}
          description={data.description}
          rating={data.rating}
          profilePic={data.profilePic}
          date={data.date}
          width={data.width}
        />
      ))}
    </>
  );
};

export default ReviewsData;
