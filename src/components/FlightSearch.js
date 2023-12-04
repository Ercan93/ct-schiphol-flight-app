import { useState } from "react";

const FlightSearch = () => {
  const [search, setSearch] = useState("");


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
                <select className="form-select w-auto">
                  <option selected>Today</option>
                  <option>December 30</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <input type="text" className="form-control my-3 my-md-0" placeholder="Enter destination, flight number or airline" aria-label="Search" aria-describedby="button-search" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button className="btn btn-outline-secondary ms-0 ms-md-4" type="button" id="button-search">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;