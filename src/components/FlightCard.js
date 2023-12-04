import RightArrow from "../assets/icons/right-arrow.svg";

const FlightCard = () => {
  return (
    <div className="FlightCard offset-0 col-12 offset-lg-3 col-lg-6">
      <div className="card cursor-pointer mb-4">
        <div className="card-body">
          <div className="row d-flex align-items-start justify-content-start mt-2">
            <div className="col-3">
              <p className="mb-0 fw-bold">13:00</p>
            </div>
            <div className="col-5 d-flex flex-column flex-md-row align-items-start justify-content-between">
              <div className="w-100 d-flex flex-column border-2 border-md-start border-md-end ps-0 ps-md-3">
                <span className="fw-bold">Washington</span>
                <span className="mt-2">KL 651 KLM</span>
              </div>
              <div className="mt-2 mt-md-0 ms-0 ms-md-4">
                <span class="badge bg-dark p-2 fs-6 text-uppercase">Now Boarding</span>
              </div>
            </div>
            <div className="d-flex align-items-center w-auto ms-auto">
              <span className="d-none d-md-block mb-0">Details</span>
              <img src={RightArrow} alt="right arrow" className="" width="30" height="30" />
            </div>
          </div>
          <p className="code-share mb-0 mt-4 pt-3 border-2 border-top">
            Also known as:
            <span>DL 9384</span>
            /
            <span>DL 9384</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;