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

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarDropdown({ name, icon, href, route, light, ...rest }) {
  const linkProps = href
      ? { component: MuiLink, href, target: "_blank", rel: "noreferrer" }
      : { component: Link, to: route || "/" };

  return (
      <MKBox
          {...rest}
          display="flex"
          alignItems="center"
          color={light ? "white" : "dark"}
          opacity={light ? 1 : 0.8}
          px={1}
          sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
            borderRadius: borderRadius.md,
            cursor: "pointer",
            "&:hover": { backgroundColor: grey[200], "& *": { color: dark.main } },
          })}
          {...linkProps}
      >
        {icon && (
            <MKTypography variant="body2" lineHeight={1} color="inherit" sx={{ mr: 0.75 }}>
              {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
            </MKTypography>
        )}
        <MKTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color="inherit"
            sx={{ whiteSpace: "nowrap" }}
        >
          {name}
        </MKTypography>
      </MKBox>
  );
}

DefaultNavbarDropdown.defaultProps = {
  icon: null,
  href: "",
  route: "",
  light: false,
};

DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
  route: PropTypes.string,
  light: PropTypes.bool,
};

export default DefaultNavbarDropdown;
