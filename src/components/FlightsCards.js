import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFlightDirection } from "../utils/redux/appActions";
import FlightCard from "./FlightCard";

const FlightsCards = () => {
  const [direction, setDirection] = useState("D"); // ["D", "A"]
  const flights = useSelector((state) => state.app.flights);
  const selectedDate = useSelector((state) => state.app.selectedDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFlightDirection(direction));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <div className="container-fluid bg-body-tertiary mt-5">
      <div className="row bg-white">
        <div className="offset-0 col-12 offset-lg-3 col-lg-6">
          <button
            type="button"
            className={`btn btn-secondary border-0 ${direction === "D" ? "text-bold bg-body-tertiary" : "text-thin"}`}
            onClick={() => setDirection("D")}>
            Departures
          </button>
          <button
            type="button"
            className={`btn btn-secondary border-0 ${direction === "A" ? "text-bold bg-body-tertiary" : "text-thin"}`}
            onClick={() => setDirection("A")}>
            Arrivals
          </button>
        </div>
      </div>
      <div className="offset-0 col-12 offset-lg-3 col-lg-6">
        <p className="text-bold mt-4 ms-1">
          {new Date(selectedDate).toLocaleDateString("en-US", { day: "numeric", month: "long" })}
        </p>
      </div>
      <div className="row pb-5">
        {flights.length === 0 ?
          <div className="offset-0 col-12 offset-lg-3 col-lg-6">
            <p className="text-bold mt-4 ms-1">No flights found</p>
          </div>
          : flights?.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        }

      </div>
    </div>
  );
}

export default FlightsCards;