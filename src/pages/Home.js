import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightsCards from "../components/FlightsCards";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <FlightSearch />
      <FlightsCards />
    </div>
  );
}

export default Home;