import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function Footer() {
    return (
      <Router>
        <div id="footer">
          <div className="left">
            <div className="logo"></div>
            <div className="terminos">
              {/* <Link to="https://repositoriodigital.bcentral.cl/terminos.html">Términos y condiciones</Link> */}
              <a href="https://repositoriodigital.bcentral.cl/banco/terminos.html" title="Términos y condiciones">
              Términos y condiciones
            </a> 
            </div>
          </div>
          <div className="right">
            <div className="rrss">
              <a
                href="https://www.youtube.com/user/BancoCentralChile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="youtube link"></div>
              </a>
              <a
                href="https://www.flickr.com/photos/bancocentraldechile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flickr link"></div>
              </a>
              <a
                href="https://twitter.com/bcentralchile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="twitter link"></div>
              </a>
            </div>
            <div className="info">
              <div className="brand">Banco Central de Chile</div>
              <div className="direccion">
                Agustinas 1180, Santiago, Chile (+56 2) 2670 2000
                <a href="https://repositoriodigital.bcentral.cl/xmlui/login">
                  <span
                    aria-hidden="true"
                    className="glyphicon glyphicon-log-in"
                  ></span>
                </a>
              </div>
              <div id="opengeek">
                <span className="theme-by">Implementado por</span>
                <a
                  href="https://opengeekservice.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="OpenGeek"
                >
                  <img
                    src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/opengeek-white.png"
                    alt="OpenGeek"
                    className="opengeek"
                  />
                </a>
                {/* <Switch>
                  <Route exact path="/terminos">
                    <Terminos />
                  </Route>
                </Switch> */}
              </div>
            </div>
          </div>
          <script src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/vendor/modernizr/modernizr.js"> </script>
          <script src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/scripts/theme.js"> </script>
          <script src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/scripts/bcentral.js"> </script>
        </div>
      </Router>
    );
  /*}*/
};

export default Footer;
