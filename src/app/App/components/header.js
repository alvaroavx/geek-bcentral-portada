import React from "react";
import { useTranslation } from "react-i18next";
import handleClick from "./utils/links"

function myFunction() {
  var x = document.getElementById("sidebar-left");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Header() {
  /*
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const lang = urlParams.get('locale-attribute')
  console.log('lang',lang);
  if(document.getElementById(lang) !== null) {
    document.getElementById(lang).click();
    console.log('estoy dentro del if deberia cambiar');
  }
  */

  const { t } = useTranslation();
  return (
    <div
      id="navportada"
      role="navigation"
      className="navbar navbar-default navbar-static-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            data-toggle="home"
            className="navbar-toggle"
            type="button"
            onClick={myFunction}
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="brand">
            <div id="logo" className="transparent">
              <a className="navbar-brand" href="https://repositoriodigital.bcentral.cl/">
                <img
                  src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/logo_dorado_vertical.png"
                  alt="Logo Institucional"
                  className="logo"
                />
              </a>
            </div>
            <div id="title">
              <div className="repositorio">{t("principal.repositorioDigital")}</div>
              <div className="banco">{t("principal.bancoCentralChile")}</div>
            </div>
          </div>
        </div>
        <div className="navbar-header pull-right hidden-xs" id="topbar">
          <ul id="languageSelection" className="nav navbar-nav pull-left">
            <li><button id="es" onClick={() => handleClick("es_ES")}><div className="flag es_ES"></div></button></li>
            <li><button id="en" onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
          </ul>
          <ul id="menu-principal">
            {/*<li><a href="https://repositoriodigital.bcentral.cl/">{t("principal.repositorio")}</a></li>*/}
            <li><a href="https://www.bcentral.cl/web/banco-central/inicio/">{t("principal.bancoCentral")}</a></li>
            <li><a href="https://portalbiblioteca.bcentral.cl/">{t("principal.biblioteca")}</a></li>
            <li><a href="https://www.bcentral.cl/contacto/">{t("principal.contacto")}</a></li>
            {/* <li><a href="/?locale-attribute=en" title="Ver en inglés"><div className="flag en"></div></a></li>
                <li><a href="/?locale-attribute=es_ES" title="Ver en español"><div className="flag es_ES"></div></a></li> */}
          </ul>
          <button
            type="button"
            className="navbar-toggle visible-sm"
            data-toggle="offcanvas"
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
