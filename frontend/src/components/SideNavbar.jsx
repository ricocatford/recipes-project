import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNavbar = () => {
    return (
        <Nav className="d-flex flex-column flex-shrink-0 p-3 navbar--side">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item nav-item--custom">
                    <i className="fa-solid fa-magnifying-glass me-2" />
                    <Link to="search" className="nav-item__link">
                        Search
                    </Link>
                </li>
                <li className="nav-item nav-item--custom">
                    <i className="fa-solid fa-list me-2" />
                    <Link to="" className="nav-item__link">
                        All Recipes
                    </Link>
                </li>
                <li className="nav-item nav-item--custom">
                    <i className="fa-solid fa-plus me-2" />
                    <Link to="new" className="nav-item__link">
                        Add Recipe
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};

export default SideNavbar;