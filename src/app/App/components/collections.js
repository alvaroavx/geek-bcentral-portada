import React from "react";
import { useTranslation } from "react-i18next";

function Collections() {
  const { t } = useTranslation();
  return (
    <div id="colecciones">
      <div className="titulo_container">
        <div className="titulo_portada">{t("colecciones.titulo")}</div>
      </div>
      <div className="coleccion_container">
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/1">
          <div className="coleccion banco">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.bancoCentral")}</div>
            {/* <!--<div className="recursos">250+ recursos</div>--> */}
          </div>
        </a>
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/10/">
          <div className="coleccion actas">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.actasDirectorio")}</div>
            {/* <!--<div className="recursos">250+ recursos</div>--> */}
          </div>
        </a>
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/11/">
          <div className="coleccion estadisticas">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.estadisticas")}</div>
          </div>
        </a>
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/2/">
          <div className="coleccion investigacion">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.investigacionEconomica")}</div>
          </div>
        </a>
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/12/">
          <div className="coleccion libros">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.librosHistoricos")}</div>
            {/* <!--<div className="recursos">250+ recursos</div>--> */}
          </div>
        </a>
        <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4514/">
          <div className="coleccion actas_rpm">
            <div className="imagen"></div>
            <div className="nombre">{t("colecciones.actasPoliticaMonetaria")}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Collections;
