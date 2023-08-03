import React from "react";

const TravelCard = ({flight, dictionary}) => {
  const departTime = new Date(flight.itineraries[0].segments[0].departure.at + "Z")
  const arriveTime = new Date(flight.itineraries[0].segments[0].arrival.at + "Z")
  const stops = flight.itineraries[0].segments.length - 1
  const duration = flight.itineraries[0].duration

  return (
    <div className="p-5 flex justify-center max-w-lg">
      <div className="max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex mb-4 place-items-center">
          <div className="w-1/2 p-2">
            <h2 className="font-bold mb-2">{flight.itineraries[0].segments[0].departure.iataCode}-{flight.itineraries[0].segments[stops].arrival.iataCode}</h2>
            <h2 className="font-bold mb-2">Depart: {departTime.toDateString()}, {departTime.getHours()}:{String(departTime.getMinutes()).padStart(2, "0")}</h2>
            <h2 className="font-bold mb-2">Arrive: {arriveTime.toDateString()}, {arriveTime.getHours()}:{String(arriveTime.getMinutes()).padStart(2, "0")}</h2>
            <p>{duration.slice(duration.search("T") + 1, duration.search("H"))} hours, {duration.slice(duration.search("H") +1, duration.search("M"))} minutes</p>
          </div>
          <div className="w-1/2">
            <h2 className="font-bold mb-2">Airline: {dictionary.carriers[flight.itineraries[0].segments[0].carrierCode]}</h2>
            <h2 className="font-bold mb-2">Stops: {stops}</h2>
            <h2 className="font-bold mb-2">Price: £{flight.price.total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
