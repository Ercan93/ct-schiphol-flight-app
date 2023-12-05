import { useState, useEffect } from "react";
import axios from "axios";
import { arrivingFlightStatuses, departingFlightStatuses } from "../utils/constants/flightStatuses";

const CONFIG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "app_id": process.env.REACT_APP_API_ID,
    "app_key": process.env.REACT_APP_API_KEY,
    "ResourceVersion": "v4"
  }
};

const BASE_URL = "https://cors-savar.onrender.com/" + process.env.REACT_APP_API_URL;

const FlightDetail = ({ isModalOpen, setIsModalOpen, flight }) => {
  const [city, setCity] = useState({});
  const [airCompany, setAirCompany] = useState({});
  const [aircraft, setAircraft] = useState({});
  const { mainFlight, prefixICAO, aircraftType, baggageClaim, terminal, flightDirection, scheduleTime, route, publicFlightState } = flight;
  const { destinations } = route;
  const { flightStates } = publicFlightState;


  const getData = ({ url, setSelected }) => {
    if (!setSelected) return;

    axios(url, CONFIG)
      .then((response) => {
        setSelected(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getCity = (iata) => {
    const url = BASE_URL + "/destinations/" + iata;
    getData({ url, setSelected: setCity });
  }

  const getAircraft = ({ iataMain, iataSub, page = 0 }) => {
    let url = BASE_URL + "/aircrafttypes";
    url += "?iataMain=" + iataMain;
    url += "&iataSub=" + iataSub;
    url += "&page=" + page;

    getData({ url, setSelected: setAircraft });
  }

  const getAirCompany = (prefixICAO) => {
    const url = BASE_URL + "/airlines/" + prefixICAO;
    getData({ url, setSelected: setAirCompany });
  }

  useEffect(() => {
    if (!isModalOpen) return;

    getAirCompany(prefixICAO);
    getCity(destinations[0]);
    getAircraft({ iataMain: aircraftType.iataMain, iataSub: aircraftType.iataSub });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <div
      className={`modal ${isModalOpen ? "d-block" : ""}`}
      id="flightDetailModal"
      tabIndex="-1"
      aria-labelledby="flightDetailModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Flight Detail</h5>
            <button type="button" className="btn-close" onClick={() => setIsModalOpen(!isModalOpen)}>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="">
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">Flight:</p>
                <p>{mainFlight}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">City:</p>
                <p>{city?.publicName?.english}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">Aircraft:</p>
                {/*   <p>{aircraft?.aircraftTypes[0]?.longDescription}</p> */}
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">Air Company:</p>
                <p>{airCompany?.publicName}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">Schedule Date:</p>
                <p>{scheduleTime.split(":").slice(0, 2).join(":")}</p>
              </div>

              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                <p className="fs-4">Flight Status:</p>
                <p>{flightDirection === "A" ?
                  arrivingFlightStatuses[flightStates[0]] :
                  departingFlightStatuses[flightStates[0]]
                }</p>
              </div>
              {flightDirection === "D" && (
                <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                  <p className="fs-4">Terminal:</p>
                  <p>{terminal}</p>
                </div>
              )}
              {flightDirection === "A" && (
                <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
                  <p className="fs-4">Bagge Claim:</p>
                  <p>{baggageClaim?.belts[0]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetail;