/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import BlogPost from "pages/LandingPages/Blog/BlogPost";

// Material Kit 2 React routes
import routes from "routes";
import "./i18n";

export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    // Плоске розгортання в <Route/>
    const flatRoutes = useMemo(
        () =>
            Array.isArray(routes)
                ? routes
                    .filter((r) => r && r.route && r.component)
                    .map((r) => (
                        <Route key={r.route} path={r.route} element={r.component} />
                    ))
                : [],
        []
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                {flatRoutes}
                <Route path="/blog/:slug" element={<BlogPost />} />
                {/* редірект на домашню (налаштовано на "/") */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ThemeProvider>
    );
}











// export default function App() {
//   const { pathname } = useLocation();
//
//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);
//
//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }
//
//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }
//
//       return null;
//     });
//
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="/presentation" element={<Presentation />} />
//         <Route path="*" element={<Navigate to="/presentation" />} />
//       </Routes>
//     </ThemeProvider>
//   );
// }
