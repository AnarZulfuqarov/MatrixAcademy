import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function MyNavbar({ currentUser }) {
  const { isDark, setIsDark} = useContext(MyContext);
  const { t, i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link className="link logo" to={"/"}>
              Navbar
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="link" to={"/about"}>
                {t("about")}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={"/blogs"}>
                Blog
              </Link>
            </Nav.Link>
            {!currentUser && (
              <>
                <Nav.Link>
                  <Link className="link" to={"/"}>
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to={"/register"}>
                    Register
                  </Link>
                </Nav.Link>{" "}
              </>
            )}
          </Nav>
          <button
            className={`switch-theme ${isDark ? "dark-button" : ""}`}
            onClick={() => setIsDark(!isDark)}
          >
            Switch theme
          </button>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
Select Language            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>handleChangeLang("az")}>Az</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleChangeLang("en")}>En</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleChangeLang("ru")}>Ru</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
