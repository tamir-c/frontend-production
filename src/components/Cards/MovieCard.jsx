"use client";

const MovieCard = ({ movieData }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <div>
        <img
          style={{
            objectFit: "cover",
            width: "300px",
            height: "300px",
          }}
          src={movieData.poster_url}
          alt={`${movieData.movie_name} movie poster`}
        />
      </div>

      <div className="m-4">
        <span className="font-bold line-clamp-1">{movieData.movie_name}</span>
        <span className="block text-grey-500 text-sm line-clamp-1">
          {movieData.release_year}
        </span>
        <span className="block text-grey-500 text-sm line-clamp-1">{`${movieData.duration_minutes} mins`}</span>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movieData: {
    movie_name: "No title",
    release_year: "No release year",
    poster_url: "https://via.placeholder.com/400",
    duration_minutes: "No duration",
  },
};

export default MovieCard;
