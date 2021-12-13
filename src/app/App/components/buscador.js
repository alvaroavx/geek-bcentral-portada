import React from "react";
import { useTranslation } from "react-i18next";

function Buscador() {
  const { t } = useTranslation();
  return (
    <div id="buscador">
      <div className="form_container">
        <form
          method="post"
          className=""
          id="ds-search-form"
          action="https://repositoriodigital.bcentral.cl/xmlui/discover"
        >
          <fieldset>
            <div className="input-group">
              <input
                placeholder={t("buscador.buscar")}
                type="text"
                className="ds-text-field form-control"
                id="searcher"
                name="query"
              />
              <span className="input-group-btn">
                <button
                  title="Ir"
                  className="ds-button-field btn btn-primary"
                  id="btnsearcher"
                >
                  <span
                    aria-hidden="true"
                    className="glyphicon glyphicon-search"
                  ></span>
                </button>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="avanzada">
        <a href="https://repositoriodigital.bcentral.cl/xmlui/discover">{t("buscador.busquedaAvanzada")}</a>
      </div>
    </div>
  );
}

export default Buscador;
