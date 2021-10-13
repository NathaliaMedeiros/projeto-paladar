import logo from 'assets/image/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
          <img src={logo} alt="" width="50" height="40" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Comandas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pagamentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Despesas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Relatórios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
