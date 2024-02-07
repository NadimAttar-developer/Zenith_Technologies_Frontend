import { CssBaseline } from "@mui/material";
import Layout from "./layout/Layout";
import { Suspense, useEffect } from "react";
import RoutingLoadingIndicator from "./layout/RoutingLoadingIndicator";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import MaterialThemeProvider from "themes/MaterialThemeProvider";
import { I18nextProvider, useTranslation } from "react-i18next";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import reacti18n from "locales/i18n";
import { CacheProvider } from "@emotion/react";

function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const cacheRtl = createCache({
    key: `mui-style-${lang === "ar" && "rtl"}`,
    stylisPlugins: [prefixer, ...(lang === "ar" ? [stylisRTLPlugin] : [])],
  });

  useEffect(() => {
    const newDir = lang === "ar" ? "rtl" : "ltr";
    document.querySelector("html")?.setAttribute("dir", newDir);
    document.querySelector("html")?.setAttribute("lang", lang);
  }, [lang]);

  return (
    <CacheProvider value={cacheRtl}>
      <BrowserRouter>
        <I18nextProvider i18n={reacti18n}>
          <MaterialThemeProvider>
            <CssBaseline />
            <Layout>
              <Suspense fallback={<RoutingLoadingIndicator />}>
                <Routes />
              </Suspense>
            </Layout>
          </MaterialThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </CacheProvider>
  );
}

export default App;
