const Tabs = () => {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-12">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active px-4" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab">Departures</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link px-4" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabindex="-1">Arrivals</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

}
export default Tabs;