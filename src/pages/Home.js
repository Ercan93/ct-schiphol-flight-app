import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightsCards from "../components/FlightsCards";
import axios from "axios";
import { setFlights, setFirstLoad } from "../utils/redux/appActions";

const Home = () => {
  const distpatch = useDispatch();
  const firstLoad = useSelector((state) => state.app.firstLoad);
  const search = useSelector((state) => state.app.search);
  const selectedDate = useSelector((state) => state.app.selectedDate);
  const flightDirection = useSelector((state) => state.app.flightDirection);

  const fetchFlights = async (params) => {
    let url = "https://cors-savar.onrender.com/" + process.env.REACT_APP_API_URL + "/flights"



    if (params) {
      url += "?";
      if (params.search) url += `route=${params.search}&`;
      if (params.selectedDate) url += `scheduleDate=${params.selectedDate}&`;
      if (params.flightDirection) url += `flightDirection=${params.flightDirection}`;
    }

    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app_id": process.env.REACT_APP_API_ID,
        "app_key": process.env.REACT_APP_API_KEY,
        "ResourceVersion": "v4"
      }
    };

    distpatch(setFirstLoad(false));
    axios.get(url, config).then((response) => {
      distpatch(setFlights(response.data.flights));
    }
    ).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (firstLoad) return;
    fetchFlights({ search, selectedDate, flightDirection });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedDate, flightDirection]);

  useEffect(() => {
    fetchFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid px-0">
      <Header />
      <FlightSearch />
      <FlightsCards />
    </div>
  );
}

export default Home;