import { FC, useEffect, useState } from "react";
import { Card } from "../card/card";
import "./carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Movie } from "../../types/movie";
import { useNavigate } from "react-router-dom";

export interface carouselProps {
  section: string;
  movieData: Movie[] | null;
}

export const CarouselComp: FC<carouselProps> = ({ section, movieData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState<number>(0);

  const next = () => {
    if (currentIndex < length - 1 && currentIndex < 5.5) {
      setCurrentIndex((prevState) => prevState + 1);
    } else setCurrentIndex(0);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    if (movieData?.length) setLength(movieData.length);
  }, [movieData]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="left-arrow" onClick={prev}>
            <ArrowBackIosIcon fontSize="large" className="l-arrow"  />
          </button>
        )}

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {movieData?.map((m) => {
              return <Card image={m.backdrop_path} title={m.title || m.original_name} />;
            })}
          </div>

          <button className="right-arrow" onClick={next}>
            <ArrowForwardIosIcon fontSize="large" className="r-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
