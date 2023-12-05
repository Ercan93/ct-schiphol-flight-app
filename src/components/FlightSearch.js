import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, setSelectedDate } from "../utils/redux/appActions";

const SEARCHWAIT = 800;

const FlightSearch = () => {
  const dispatch = useDispatch();
  const [IATASearch, setIATASearch] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [days, setDays] = useState([]);

  const setNext20Days = () => {
    const days = [];
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    days.push({ label: "Yesterday", value: yesterday.toISOString().split("T")[0] });
    days.push({ label: "Today", value: today.toISOString().split("T")[0] });
    days.push({ label: "Tomorrow", value: tomorrow.toISOString().split("T")[0] });

    for (let i = 0; i < 20; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i + 2);
      days.push({
        label: date.toLocaleDateString("en-US", { day: "numeric", month: "long" }),
        value: date.toISOString().split("T")[0]
      });
    }
    setDays(days);
    setSelectedDay(days[1].value);
  }

  useEffect(() => {
    setNext20Days()
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(IATASearch));
    }, SEARCHWAIT);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IATASearch]);

  useEffect(() => {
    dispatch(setSelectedDate(selectedDay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-12">
            <div className="d-flex flex-wrap align-items-center justify-content-between my-4">
              <p className="display-2 text-bold">Find a<br />departing<br />flight</p>
              <img src="https://placehold.co/600x400" className="img-fluid" alt="..." />
            </div>
            <div className="d-flex flex-column flex-md-row mb-3">
              <div className="me-4">
                <select
                  className="form-select w-auto"
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  {days.map((day) => (
                    <option
                      key={day.value}
                      selected={day.value === selectedDay}
                      value={day.value}
                    >
                      {day.label}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className="form-control my-3 my-md-0"
                placeholder="Enter IATA Code"
                aria-label="Search"
                aria-describedby="button-search"
                value={IATASearch}
                onChange={(e) => setIATASearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;