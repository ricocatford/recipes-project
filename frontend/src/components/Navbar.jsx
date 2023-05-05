import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" variant="light" expand="lg" expanded={expanded}>
            <Container>
            <Navbar.Brand as={Link} to="/">
                <h2>
                    Recipes App
                </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="link text-uppercase" >
                        Home
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;