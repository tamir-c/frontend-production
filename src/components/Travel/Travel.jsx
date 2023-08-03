"use client";
import React from "react";
import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import formatAirportName from "@/utils/helpers/formatAirportName";
import { TravelCard } from "..";

function Travel({ latitude, longitude }) {
  const [departAirport, setDepartAirport] = useState("");
  const [departAirportError, setDepartAirportError] = useState("");

  const [arriveAirport, setArriveAirport] = useState("");

  const [arriveAirportError, setArriveAirportError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [noAdults, setNoAdults] = useState(0);
  const [noAdultError, setnoAdultError] = useState("");

  const [noChildren, setNoChildren] = useState(0);
  const [airportData, setAirportData] = useState(null);
  const [flightDictionary, setFlightDictionary] = useState({});
  const [nonStop, setNonStop] = useState(false);
  const [noFlights, setNoFlights] = useState(null);
  //DATE PICKER for arrival and departure date
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [flightOptions, setFlightOptions] = useState([]);

  const Amadeus = require("amadeus");
  const amadeus = new Amadeus({
    clientId: process.env.NEXT_PUBLIC_API_KEY,
    clientSecret: process.env.NEXT_PUBLIC_API_SECRET,
  });

  const validateForm = () => {
    let isValid = true;
    if (noAdults <= 0) {
      setnoAdultError("Please select at least one adult");
      isValid = false;
    } else {
      setnoAdultError("");
    }

    if (!departAirport) {
      setDepartAirportError("Please select departure airport");
    } else {
      setDepartAirportError("");
    }

    if (!arriveAirport) {
      setArriveAirportError("Please select arrival airport");
    } else {
      setArriveAirportError("");
    }

    return isValid;
  };

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setFlightOptions([]);
    setIsLoading(true);
    const isValid = validateForm();
    if (isValid) {
      const flightResponse = await getFlightOptions();
      const flightData = await flightResponse.data;
      const flightDictionary = await flightResponse.dictionaries;
      if (flightData.length < 1) {
        setNoFlights(<p>No Flights Found</p>);
      }
      setFlightOptions(await flightData);
      setFlightDictionary(await flightDictionary);

      setIsLoading(false);
      setDepartAirport("");
      setArriveAirport("");
      setNoAdults(0);
      setNoChildren(0);
      setNonStop(false);
    }
  };

  console.log("flight data", flightOptions);

  const getAirportData = async () => {
    try {
      const response = await amadeus.referenceData.locations.airports.get({
        longitude: longitude,
        latitude: latitude,
        radius: 100,
      });
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Error fetching airport data:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setAirportData(await getAirportData());
    };
    getData();
  }, []);

  const getFlightOptions = async () => {
    console.log("fetching flights");
    try {
      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: departAirport,
        destinationLocationCode: arriveAirport,
        departureDate: value.startDate,
        adults: noAdults.toString(),
        children: noChildren.toString(),
        max: 10,
        currencyCode: "GBP",
        nonStop: nonStop,
      });
      const data = await response.data;
      const dictionaries = await response.result.dictionaries;
      console.log("response", response)
      return {
        data: data,
        dictionaries: dictionaries,
      };
    } catch (error) {
      console.error("Error fetching flight data: ", error);
    }
  };

  return (
    <div>
      <div className="py-5 bg-base-200 md:px-10 md:py-10 ">
        <section className="mt-5 mb-5 ">
          <div className="mr-3 ml-3 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className="mb-4 text-3xl text-black md:text-4xl lg:text-5xl">
                Ready to fly?
              </h2>
              <p className="text-black mb-2 mt-2">Input your flight details</p>
            </div>
            <div className="md:w-1/2">
              <form
                id="form-container"
                className="items-center"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                <div className="inline relative w-64">
                  <select
                    onChange={(e) => setDepartAirport(e.target.value)}
                    value={departAirport}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a departure airport</option>
                    <option value="LHR">London Heathrow Airport</option>
                    <option value="MAN">Manchester Airport</option>
                    <option value="STN">London Stansted Airport</option>
                    <option value="BHX">Birmingham Airport</option>
                    <option value="EDI">Edinburgh Airport</option>
                    <option value="GLA">Glasgow Airport</option>
                    <option value="BRS">Bristol Airport</option>
                    <option value="NCL">Newcastle Airport</option>
                    <option value="LBA">Leeds Bradford Airport</option>
                    <option value="EMA">East Midlands Airport</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {departAirportError && (
                  <p className="text-red-500 mt-1">{departAirportError}</p>
                )}
                </div>
                <div>
                <div className="inline relative w-64 mb-4 mt-4">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setArriveAirport(e.target.value)}
                    value={arriveAirport}
                  >
                    <option>
                      Select an arrival airport
                    </option>
                    {airportData ? (
                      airportData.map((airport) => {
                        return (
                          <option
                            value={airport.iataCode}
                            key={airport.iataCode}
                          >
                            {formatAirportName(airport.name)}
                          </option>
                        );
                      })
                    ) : (
                      <option>Loading...</option>
                    )}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {arriveAirportError && (
                  <p className="text-red-500 mt-1">{arriveAirportError}</p>
                )}
                </div>
                <div className="mb-4">
                  <p className="mt-4">
                    Please select departure date
                  </p>
                  <Datepicker value={value} onChange={handleValueChange} minDate={new Date()} asSingle={true}/>
                </div>
                <div className="mb-4">
                  <label className="mb-4">Adults:</label>
                  <input
                    id="adult"
                    name="Adult"
                    value={noAdults}
                    onChange={(e) => setNoAdults(e.target.value)}
                    min={0}
                    max={9 - noChildren}
                    step={1}
                    type="number"
                    className="w-full border py-2 px-2 bg-transparent "
                  ></input>
                {/* No of adults validation */}
                {noAdultError && <p className="text-red-500 mt-1">{noAdultError}</p>}
                </div>
                <div>
                  <label className="mb-4">Children (0-11):</label>
                  <input
                    id="children"
                    name="children"
                    value={noChildren}
                    min={0}
                    max={9 - noAdults}
                    step={1}
                    onChange={(e) => setNoChildren(e.target.value)}
                    type="number"
                    className="w-full py-2 border px-2 mb-2 bg-transparent "
                  ></input>
                </div>
                <div>
                  <label htmlFor="nonstop">
                    Only show me flights with no stops:{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="nonstop"
                    name="nonstop"
                    value={nonStop}
                    onClick={(e) => setNonStop(!nonStop)}
                  />
                </div>
                <div>
                  <button
                    className="text-black mt-2 items-center border-4 px-10 py-2 md:px-20 md:ml-0 "
                    placeholder="submit"
                    name="submit"
                    title="submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div>
        {flightOptions ? (
          <ul className="flex flex-wrap items-center justify-center pt-4 mt-4">
            {flightOptions.map((flight) => {
              return (
                <li key={flight.id}>
                  <TravelCard flight={flight} dictionary={flightDictionary} />
                </li>
              );
            })}
          </ul>
        ) : null}
        {isLoading ? <p className="text-center p-2">Loading flights...</p> : null}
        {noFlights ? noFlights : null}
      </div>
    </div>
  );
}

export default Travel;
