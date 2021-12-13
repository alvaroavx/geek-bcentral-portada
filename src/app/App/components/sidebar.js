import React from "react";
import { useTranslation } from "react-i18next";
import handleClick from "./utils/links"

function SideBar() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="seccion home only-mobile">
        <ul id="languageSelection" className="nav">
          <li><button onClick={() => handleClick("es")}><div className="flag es_ES"></div></button></li>
          <li><button onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
        </ul>
        <div className="titulo">{t("principal.titulo")}</div>
        <ul className="listado">
          <li><a href="https://repositoriodigital.bcentral.cl">{t("principal.repositorio")}</a></li>
          <li><a href="https://www.bcentral.cl/web/banco-central/inicio">{t("principal.bancoCentral")}</a></li>
          <li><a href="https://www.bcentral.cl/contacto">{t("principal.contacto")}</a></li>
        </ul>
      </div>
      <div className="seccion home">
        <div className="titulo">{t("sidebar.explorar")}</div>
        <ul className="listado">
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/community-list">{t("sidebar.colecciones")}</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/browse?type=author">{t("sidebar.autores")}</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/browse?type=dateissued">{t("sidebar.fechaPublicacion")}</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/browse?type=subject">{t("sidebar.temas")}</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/browse?type=title">{t("sidebar.titulos")}</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/browse?type=typedoc">{t("sidebar.tiposDocumento")}</a></li>
        </ul>
      </div>
      {/* <div className="seccion home">
              <div className="titulo">Estadísticas</div>
              <ul className="listado">
                <li><a href="/xmlui/browse?type=author&resetOffset=true">Autores más populares</a></li>
                <li><a href="/xmlui/search-statistics">Términos más buscados</a></li>
                <li><a href="/xmlui/statistics-home">Publicaciones más populares</a></li>
                <li><a href="#">Estadísticas del país</a></li>
              </ul>
            </div> */}
      <div className="seccion home">
        <div className="titulo">{t("sidebar.actasHistoricas")}</div>
        <ul className="listado">
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/499">{t("sidebar.actas")} 1925-1929</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/500">{t("sidebar.actas")} 1930-1932</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/34">{t("sidebar.actas")} 1933-1938</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/33">{t("sidebar.actas")} 1939-1945</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4890">{t("sidebar.actas")} 1946-1952</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4891">{t("sidebar.actas")} 1953-1958</a></li>
          <li><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4892">{t("sidebar.actas")} 1959-1967</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
