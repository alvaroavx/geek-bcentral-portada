import React from "react";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <div id="articulos">
      <div className="articulo destacado">
        <div className="imagen">
          <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/6146">
            <div className="contenedor_imagen">
              <div className="fondo_portada"></div>
              <div className="portada">
                <img
                  src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/6365/Acta%20Comit%c3%a9%20Ejecutivo%20N%c2%b0%201.pdf.jpg"
                  alt="Portada de artículo"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="informacion">
          <div className="titulo">
            <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/6146">
              {t("banner.titulo")}
            </a>
          </div>
          <div className="bajada only-desktop">
            {t("banner.parrafo1")}<b><i>{t("banner.parrafo2")}</i></b>{t("banner.parrafo3")}
          </div>
          {/* <!--<div className="ver" onClick="GoTo('/xmlui/handle/20.500.12580/10')">Ver más</div>--> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
