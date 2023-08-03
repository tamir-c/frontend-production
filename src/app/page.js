"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "@/components/Cards/MovieCard";
import Link from "next/link";
import { fetchMovies } from "@/utils/helpers/fetchMovies";
import { HeaderTitle } from "../components";
import DefaultCarousel from "@/components/DefaultCarousel/DefaultCarousel";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  if (movies?.length > 0) {
    return (
      <>
        <div className="object-cover">
          <DefaultCarousel />
        </div>
        <div className="text-center mr-2 ml-2 mt-4">
          {" "}
          <HeaderTitle
            title={"Select a movie to view its filming locations..."}
          />
        </div>

        <div className="m-8 gap-6 place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {movies.map((m) => (
            <Link key={m.movie_id} href={`/movies/${m.movie_id}`}>
              <div className="cursor-pointer rounded-2xl hover:shadow-2xl">
                <MovieCard key={m.movie_id} movieData={m} />
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="text-center p-10">
        <h1>No Movies Available</h1>
      </div>
    );
  }
}
