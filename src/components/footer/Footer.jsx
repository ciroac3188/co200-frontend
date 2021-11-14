import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://github.com/ciroac3188/co200" rel="noreferrer" target="_blank">
                  Equipo 13 MisionTic 2022 
                </a>
              </li>
              <li>
                <a href="https://lms.misiontic2022udea.com/login/index.php" rel="noreferrer" target="_blank">
                  UDEA.
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()}, Elaborador por CO200 {""}
              <i className="fab fa-react" /> Equipo 13 CO200
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
