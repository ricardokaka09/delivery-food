import React from "react";
import DetailCard from "../../components/detail/DetailCard";

const FoodDetail = () => {
  const cards = [
    {
      img: "detail-1",
      type: "detailCard-2",
      heading: "Best deals",
      productName: " Crispy Sandwiches",
      describe:
        "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches",
    },
    {
      img: "detail-2",
      type: "detailCard-1",
      heading: "Celebrate  parties with ",
      productName: "Fried Chicken",
      describe:
        "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    },
    {
      img: "detail-3",
      type: "detailCard-2",
      heading: "Wanna eat hot & spicy ",
      productName: "Pizza?",
      describe:
        "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    },
  ];
  return (
    <section className="foodDetail">
      {cards.map((card) => (
        <DetailCard
          type={card.type}
          productName={card.productName}
          heading={card.heading}
          describe={card.describe}
          img={card.img}
        />
      ))}
    </section>
  );
};

export default FoodDetail;
