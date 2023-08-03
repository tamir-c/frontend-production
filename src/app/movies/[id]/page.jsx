"use client";
import { useState, useEffect } from "react";
import { fetchMovie, fetchMovieLocations } from "@/utils/helpers/fetchMovies";

import LocationCard from "../../../components/Cards/LocationCard";
import Link from "next/link";

const page = ({ params }) => {
  const [movieData, setMovieData] = useState({});
  const [movieLocations, setMovieLocations] = useState([]);

  const { id } = params;
  useEffect(() => {
    async function fetchData() {
      const movie = await fetchMovie(id);
      setMovieData(movie);
      const locations = await fetchMovieLocations(id);
      setMovieLocations(locations);
    }
    fetchData();
  }, []);

  console.log(movieLocations);
  console.log(movieData);

  return (
    <div className="grid place-items-center m-4">
      <h1 className="text-center font-extrabold text-3xl md:text-4xl lg:text-5xl pt-5 pb-7 uppercase">{movieData ? movieData.movie_name : 'No movie name'}</h1>
      <div className="place-items-start gap-8 justify-center grid grid-cols-1 md:grid-cols-2 max-w-[1600px] ">
        <div className="bg-base-300 place-items-start max-w-[800px] text-justify rounded-lg row-span-2 shadow-xl max-w-100 min-h-[50px]">
          <img
            src={movieData ? movieData.poster_url : 'https://via.placeholder.com/400'}
            alt={`${movieData?.movie_name} movie poster`}
            className="place-items-center rounded-tl-lg rounded-tr-lg h-auto w-full"
          />
          <div className="rounded-lg min-h-[50px] p-5">
            <p>{movieData ? movieData.description : 'No description'}</p>
          </div>
        </div>

        <div className="w-full grid place-items-center h-full bg-base-300 rounded-lg shadow-xl text-center">
          <div className="p-4 text-xl">
            <h2 className="font-bold text-3xl">Movie Details</h2>
            <p className="m-4">Release date: {movieData?.release_year}</p>
            <p className="m-4">Directed by: {movieData?.director}</p>
            <p className="m-4">Genre: {movieData?.genre?.genre_name}</p>
            <p className="m-4">Duration: {movieData?.duration_minutes} mins</p>
          </div>
        </div>

        {movieLocations ? 
          (
        <div className="bg-base-300 rounded-lg text-center shadow-xl pt-8 h-full w-full">
          <h1 className="font-bold text-3xl mb-3">Locations</h1>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 ${movieLocations?.length % 2 == 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} place-items-center p-5 gap-5 rounded-lg min-h-[500px]`}>
            {movieLocations?.map((loc) => (
              <Link href={`/location/${loc.city_id}`}>
                <div className="cursor-pointer rounded-2xl hover:shadow-2xl">
                  <LocationCard locationData={loc} />
                </div>
              </Link>
            ))}
            </div>
        </div>
          ) :
        <p>No movie location data available</p>
            }
      </div>
    </div>
  );
};

page.defaultProps = {
  movieData: {
    movie_name: "No title",
    release_year: "No release year",
    poster_url: "https://via.placeholder.com/400",
    duration_minutes: "No duration",
    genre: {
      genre_id: "-1",
      genre_name: "No genre",
    },
  },
};

export default page;
