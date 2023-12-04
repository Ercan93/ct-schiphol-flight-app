import { useState } from "react";
import FlightCard from "./FlightCard";

const FlightsCards = () => {
  const [flights, setFlights] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="container-fluid bg-body-tertiary mt-5">
      <div className="row bg-white">
        <div className="offset-0 col-12 offset-lg-3 col-lg-6">
          <button type="button" class="btn btn-secondary border-0 text-bold bg-body-tertiary">Departures</button>
          <button type="button" class="btn btn-secondary border-0 text-thin">Arrivals</button>
        </div>
      </div>
      <div className="row py-5">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default FlightsCards;