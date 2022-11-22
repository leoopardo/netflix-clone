import { FC, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RecommendIcon from "@mui/icons-material/Recommend";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./card.css";

export interface cardProps {
  image: string | null;
  title: string;
}

export const Card: FC<cardProps> = ({ image, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div onMouseLeave={() => setIsHovering(false)} className="hoverCard">
      <div
        key={title}
        onMouseOver={() => setIsHovering(true)}
        className="card"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`,
          backgroundSize: "cover",
        }}
      ></div>
      {isHovering && (
        <div className="hovering">
          <div className="cardNavigation">
            <div>
              <PlayCircleOutlineIcon fontSize="large" />
              <ControlPointIcon fontSize="large" />
              <RecommendIcon fontSize="large" />
            </div>
            <ExpandCircleDownIcon fontSize="large" />
          </div>
          <h4>{title}</h4>
        </div>
      )}
    </div>
  );
};
