import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../../types/movie";
import "./home.css";
import { CarouselComp } from "../../components/carousel/carousel";
export function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[] | null>([]);
  const [popularSeries, setPopularSeries] = useState<Movie[] | null>([]);
  const [Random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.round(Math.random() * 20));
    const fetchMovies = async () => {
      try {
        setPopularMovies(
          (
            await axios.get(
              "https://api.themoviedb.org/3/movie/popular?api_key=c5c349384529e378af57b5fddb9b7b9b"
            )
          ).data.results
        );

        setPopularSeries(
          (
            await axios.get(
              "https://api.themoviedb.org/3/tv/popular?api_key=c5c349384529e378af57b5fddb9b7b9b"
            )
          ).data.results
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <div className="home">
        {popularMovies?.map((m, i) => {
          if (i === Random) {
            return (
              <div
                key={i}
                className="Poster"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.backdrop_path})`,
                  backgroundSize: "cover",
                  width: "100%",
                }}
              ></div>
            );
          }
          return <div key={i}></div>;
        })}
        <div className="popular">
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <h3>Populares</h3>
          </div>
          <CarouselComp movieData={popularMovies} section="popular" />
        </div>
        <div style={{ marginTop: "15%" }}>
          <div className="series">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <h3>Series</h3>
            </div>
            <CarouselComp movieData={popularSeries} section="popular" />
          </div>
        </div>
        <div style={{ marginTop: "15%" }}>
          <div className="o">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <h3>Populares</h3>
            </div>
            <CarouselComp movieData={popularMovies} section="popular" />
          </div>
        </div>
        <div style={{ marginTop: "15%" }}>
          <div className="p">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <h3>Populares</h3>
            </div>
            <CarouselComp movieData={popularMovies} section="popular" />
          </div>
        </div>
      </div>
    </>
  );
}
