const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light px-4 d-flex justify-content-between" data-bs-theme="light">
        <p className="navbar-brand fw-bolder mb-0">Schiphol</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              Flights
            </li>
            <li className="nav-item">
              Parking & Transport
            </li>
            <li className="nav-item">
              Shop, Eat & Discover
            </li>
            <li className="nav-item">
              Services
            </li>
            <li className="nav-item">
              Covid
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;