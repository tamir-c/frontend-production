"use client";

const LocationCard = ({ locationData }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <div className="">
        <img className=""
          style={{
            objectFit: "cover",
            width: "300px",
            height: "300px",
          }}
          src={locationData.city_url}
          alt={`${locationData.city_name} movie poster`}
        />
      </div>

      <div className="m-4">
        <span className="font-bold line-clamp-1">{locationData.city_name}</span>
      </div>
    </div>
  );
};

export default LocationCard;
