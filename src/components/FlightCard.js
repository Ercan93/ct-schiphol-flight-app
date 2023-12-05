import FlightDetail from "./FlightDetail";
import RightArrow from "../assets/icons/right-arrow.svg";
import { arrivingFlightStatuses, departingFlightStatuses } from "../utils/constants/flightStatuses";
import { useState } from "react";

const FlightCard = ({ flight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="FlightCard offset-0 col-12 offset-lg-3 col-lg-6" key={flight.id}>
      <div className="card cursor-pointer mb-4" onClick={() => setIsModalOpen(true)}>
        <div className="card-body">
          <div className="row d-flex align-items-start justify-content-start mt-2">
            <div className="col-3">
              <p className="mb-0 fw-bold">
                {flight?.scheduleTime.split(":").slice(0, 2).join(":")}</p>
            </div>
            <div className="col-5 d-flex flex-column flex-md-row align-items-start justify-content-start">
              <div className="col-12 col-md-6 d-flex flex-column border-2 border-md-start border-md-end ps-0 ps-md-3">
                <span className="fw-bold">
                  {flight?.route?.destinations[0]}
                </span>
                <span className="mt-2">
                  {flight?.prefixIATA}&nbsp;
                  {flight?.flightNumber}&nbsp;
                  {flight?.prefixICAO}
                </span>
              </div>
              <span className="bg-dark p-2 fs-6 mt-2 mt-md-0 ms-0 ms-md-4 text-bold text-white text-uppercase">
                {
                  flight.flightDirection === "A"
                    ?
                    arrivingFlightStatuses[flight.publicFlightState?.flightStates[flight.publicFlightState?.flightStates.length - 1]]
                    :
                    departingFlightStatuses[flight.publicFlightState?.flightStates[flight.publicFlightState?.flightStates.length - 1]]
                }
              </span>
            </div>
            <div className="d-flex align-items-center w-auto ms-auto">
              <span className="d-none d-md-block mb-0">Details</span>
              <img src={RightArrow} alt="right arrow" className="" width="30" height="30" />
            </div>
          </div>
          {flight.codeshares &&
            <div className="d-flex code-share mb-0 mt-4 pt-3 border-2 border-top">
              <span>Also known as:</span>
              {flight?.codeshares?.codeshares.map((codeshare, index) => (
                <div className="d-flex">
                  <span key={index} className="mx-2">{codeshare}</span>
                  <span> {index !== flight?.codeshares?.codeshares.length - 1 && "/"}</span>
                </div>
              ))}
            </div>}
        </div>
      </div>
      <FlightDetail isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} flight={flight} />
    </div>
  );
}

export default FlightCard;