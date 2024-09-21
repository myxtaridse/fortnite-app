import React from "react";
import Card from "./Card";
import { CustomContext } from "../App";

const Main = () => {
  const { data } = React.useContext(CustomContext);

  return (
    <div className="bg-cards w-screen mt-[0]  items-center pt-[3rem] pb-[5rem] gap-y-9">
      {data.length &&
        data.map(
          ({
            mainId,
            displayAssets,
            displayDescription,
            displayName,
            price,
            colors,
          }: any) =>
            displayName && (
              <Card
                key={mainId}
                id={mainId}
                image={displayAssets[0].url}
                description={displayDescription}
                name={displayName}
                price={price.finalPrice}
                bgColor={colors.color2 ? colors.color2 : "#1F1F1F"}
              />
            )
        )}
    </div>
  );
};

export default Main;
