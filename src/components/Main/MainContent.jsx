import React from "react";
import { Image } from "@vkontakte/vkui";
import "../../style/main.css";
import tShirt from "../../assets/Tshirt.png";
import pants from "../../assets/pants.png";
import sneakers from "../../assets/snikers.png";

const MainContent = ({
  handleClick,
  score,
  bust,
  level,
  images,
  isZoomed,
  particles,
}) => {
  return (
    <div className="MyMain" onClick={handleClick}>
      <Image
        keepAspectRatio
        src={images[level - 1] || images[2]}
        alt="Тапни monkey"
        widthSize={120}
        noBorder
        className={isZoomed ? "zoomed" : ""}
        style={{
          userSelect: "none",
          position: "relative",
          bottom: "20px",
          left: "-10px",
        }}
      >
        {particles.map((particle) => (
          <p
            key={particle.id}
            className="particle"
            style={{
              top: `${particle.y}px`,
              left: `${particle.x}px`,
              color: particle.color,
              fontFamily: "crooker",
              fontSize: "25px",
            }}
          >
            {`+${bust}`}
          </p>
        ))}

        <img src={tShirt} alt="футболка" className={"tshirt show"} />
      </Image>
    </div>
  );
};

export default MainContent;
