/* eslint-disable no-param-reassign */
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

/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
import LanguageSwitcher from "components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function DefaultNavbar({ brand, routes, transparent, light, action, sticky, relative }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  const labelKeyByPath = {
    "/": "nav.home",
    "/about-us": "nav.about",
    "/services": "nav.services",
    "/gallery": "nav.gallery",
    "/blog": "nav.blog",
    "/contact": "nav.contact",
  };

  const items = (Array.isArray(routes) ? routes : []).map(({ name, icon, href, route }) => {
    const displayName = t(labelKeyByPath[route] || name);
    return (
        <DefaultNavbarDropdown
            key={route || href || name}
            name={displayName}
            icon={icon}
            href={href}
            route={route}
            light={light}
        />
    );
  });

  const brandObj =
      typeof brand === "string"
          ? { name: brand, image: null, route: "/" }
          : { route: "/", ...brand };

  return (
      <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
        <MKBox
            py={1}
            px={{ xs: 2, lg: transparent ? 0 : 2 }}
            my={relative ? 0 : 2}
            mx={relative ? 0 : 3}
            width={relative ? "100%" : "calc(100% - 48px)"}
            borderRadius="xl"
            shadow={transparent ? "none" : "md"}
            color={light ? "white" : "dark"}
            position={relative ? "relative" : "absolute"}
            left={0}
            zIndex={3}
            sx={(theme) => ({
              backgroundColor: transparent ? "transparent" : theme.palette.background.paper,
              backdropFilter: "none", // disable glass
              border: transparent ? "none" : `1px solid ${theme.palette.divider}`,
            })}
        >
          <MKBox display="flex" justifyContent="space-between" alignItems="center">
            <MKBox component={Link} to={brandObj.route || "/"} lineHeight={1} py={transparent ? 1.5 : 0.75}>
              {brandObj.image ? (
                  <MKBox
                      component="img"
                      src={brandObj.image}
                      alt={brandObj.name || "Brand"}
                      sx={{
                        height: { xs: 72, md: 88 }, // підгони за потреби
                        width: "auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                  />
              ) : (
                  <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
                    {brandObj.name || "Venus"}
                  </MKTypography>
              )}
            </MKBox>

            {/* desktop */}
            <MKBox display={{ xs: "none", lg: "flex" }} alignItems="center" gap={2}>
              <Grid container wrap="nowrap" alignItems="center" columnGap={2} flexWrap="nowrap">
                {items}
              </Grid>
              <LanguageSwitcher light={light} />
              {action && (
                  action.type === "internal" ? (
                      <MKButton
                          component={Link}
                          to={action.route}
                          variant={["white", "default"].includes(action.color) ? "contained" : "gradient"}
                          color={action.color || "info"}
                          size="small"
                      >
                        {action.label}
                      </MKButton>
                  ) : (
                      <MKButton
                          component="a"
                          href={action.route}
                          target="_blank"
                          rel="noreferrer"
                          variant={["white", "default"].includes(action.color) ? "contained" : "gradient"}
                          color={action.color || "info"}
                          size="small"
                      >
                        {action.label}
                      </MKButton>
                  )
              )}
            </MKBox>

            {/* mobile burger */}
            <MKBox
                display={{ xs: "inline-block", lg: "none" }}
                lineHeight={0}
                py={1}
                pl={1}
                color={transparent ? "white" : "inherit"}
                sx={{ cursor: "pointer" }}
                onClick={toggleMobile}
            >
              <Icon fontSize="default">{mobileOpen ? "close" : "menu"}</Icon>
            </MKBox>
          </MKBox>

          {/* mobile menu */}
          <MKBox sx={{ position: "relative", zIndex: 1200 }}>
            {isMobile && (
                <DefaultNavbarMobile
                    routes={routes}
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                />
            )}
          </MKBox>
        </MKBox>
      </Container>
  );
}

DefaultNavbar.defaultProps = {
  brand: "Venus",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
};

DefaultNavbar.propTypes = {
  brand: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string, // шлях до зображення
      route: PropTypes.string, // куди веде клік по лого
    }),
  ]),
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary","secondary","info","success","warning","error","dark","light","default","white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
};

export default DefaultNavbar;
