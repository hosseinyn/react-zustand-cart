import { Link } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";
import { useStorePrice } from "../store";

const Header = () => {
  const { price } = useStorePrice();
  return (
    <center>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary w-50 rounded"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Zustand Cart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/hosseinyn/react-zustand-cart"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <SectionLink className="nav-link" to="about" style={{cursor: "pointer"}}>
                  About the project
                </SectionLink>
              </li>
            </ul>
            <Link to="/cart" className="link-danger text-decoration-none">
              Cart | {price} $
            </Link>
          </div>
        </div>
      </nav>
    </center>
  );
};

export default Header;
