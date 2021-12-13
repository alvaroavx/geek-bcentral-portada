import React from "react";
import { useTranslation } from "react-i18next";
//import Iframe from 'react-iframe';

function Recientes() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="titulo_container">
        <div className="titulo_portada">{t("recientes.documentosRecientes")}</div>
      </div>
      <div className="documento_container">
        <iframe src="https://repositoriodigital.bcentral.cl/banco/recientes.html"
          width="100%"
          height="900px"
          id="target-div"
          title="target-div"
          display="initial"
          position="relative"></iframe>
      </div>
      <div className="button_container">  
        <a href="https://repositoriodigital.bcentral.cl/xmlui/recent-submissions">
          <div className="ver">{t("recientes.verMas")}</div>
        </a>
      </div>
    </div>
  );
}
export default Recientes;
