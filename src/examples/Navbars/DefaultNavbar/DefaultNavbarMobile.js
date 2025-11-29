import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import LanguageSwitcher from "components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function DefaultNavbarMobile({ routes, open, onClose }) {
    const { t } = useTranslation();
    const safeRoutes = Array.isArray(routes) ? routes : [];
    const labelKeyByPath = {
        "/": "nav.home",
        "/about-us": "nav.about",
        "/services": "nav.services",
        "/gallery": "nav.gallery",
        "/blog": "nav.blog",
        "/contact": "nav.contact",
    };

    return (
        <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
            <MKBox
                width="100%"
                px={2}
                py={1}
                sx={(theme) => ({
                    bgcolor: theme.palette.background.paper,
                    borderRadius: "12px",
                    boxShadow: theme.shadows[8],
                })}
            >
                <MKBox display="flex" justifyContent="flex-end" mb={1}>
                    <LanguageSwitcher size="medium" />
                </MKBox>

                <List dense disablePadding>
                    {safeRoutes
                        .filter((r) => r && (r.route || r.href))
                        .map(({ name, route, href }) => {
                            const label = t(labelKeyByPath[route] || name);
                            const linkProps = route
                                ? { component: Link, to: route, onClick: onClose }
                                : { component: MuiLink, href, target: "_blank", rel: "noreferrer", onClick: onClose };

                            return (
                                <ListItemButton
                                    key={route || href || label}
                                    {...linkProps}
                                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                                        borderRadius: borderRadius.md,
                                        mb: 0.5,
                                        "&:hover": { backgroundColor: grey[200], "& *": { color: dark.main } },
                                    })}
                                >
                                    <ListItemText
                                        primary={<MKTypography variant="button" textTransform="capitalize">{label}</MKTypography>}
                                    />
                                </ListItemButton>
                            );
                        })}
                </List>
            </MKBox>
        </Collapse>
    );
}

DefaultNavbarMobile.defaultProps = {
    onClose: () => {},
};

DefaultNavbarMobile.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    onClose: PropTypes.func,
};

export default DefaultNavbarMobile;






// /**
// =========================================================
// * Material Kit 2 React - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/material-kit-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)
//
// Coded by www.creative-tim.com
//
//  =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */
//
// import { useState } from "react";
//
// // react-router components
// import { Link } from "react-router-dom";
//
// // prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";
//
// // @mui material components
// import Collapse from "@mui/material/Collapse";
// import MuiLink from "@mui/material/Link";
//
// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
//
// // Material Kit 2 React example components
// import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
//
// function DefaultNavbarMobile({ routes, open }) {
//   const [collapse, setCollapse] = useState("");
//
//   const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));
//
//   const renderNavbarItems = routes.map(
//     ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
//       <DefaultNavbarDropdown
//         key={name}
//         name={name}
//         icon={icon}
//         collapseStatus={name === collapse}
//         onClick={() => handleSetCollapse(name)}
//         href={href}
//         route={route}
//         collapse={Boolean(navCollapse)}
//       >
//         <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
//           {routeCollapses &&
//             routeCollapses.map((item) => (
//               <MKBox key={item.name} px={2}>
//                 {item.collapse ? (
//                   <>
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       fontWeight="bold"
//                       textTransform="capitalize"
//                       py={1}
//                       px={0.5}
//                     >
//                       {item.name}
//                     </MKTypography>
//                     {item.collapse.map((el) => (
//                       <MKTypography
//                         key={el.name}
//                         component={el.route ? Link : MuiLink}
//                         to={el.route ? el.route : ""}
//                         href={el.href ? el.href : ""}
//                         target={el.href ? "_blank" : ""}
//                         rel={el.href ? "noreferrer" : "noreferrer"}
//                         minWidth="11.25rem"
//                         display="block"
//                         variant="button"
//                         color="text"
//                         textTransform="capitalize"
//                         fontWeight="regular"
//                         py={0.625}
//                         px={2}
//                         sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
//                           borderRadius: borderRadius.md,
//                           cursor: "pointer",
//                           transition: "all 300ms linear",
//
//                           "&:hover": {
//                             backgroundColor: grey[200],
//                             color: dark.main,
//                           },
//                         })}
//                       >
//                         {el.name}
//                       </MKTypography>
//                     ))}
//                   </>
//                 ) : (
//                   <MKBox
//                     key={item.key}
//                     display="block"
//                     component={item.route ? Link : MuiLink}
//                     to={item.route ? item.route : ""}
//                     href={item.href ? item.href : ""}
//                     target={item.href ? "_blank" : ""}
//                     rel={item.href ? "noreferrer" : "noreferrer"}
//                     sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
//                       borderRadius: borderRadius.md,
//                       cursor: "pointer",
//                       transition: "all 300ms linear",
//                       py: 1,
//                       px: 1.625,
//
//                       "&:hover": {
//                         backgroundColor: grey[200],
//                         color: dark.main,
//
//                         "& *": {
//                           color: dark.main,
//                         },
//                       },
//                     })}
//                   >
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       fontWeight="bold"
//                       textTransform="capitalize"
//                     >
//                       {item.name}
//                     </MKTypography>
//                     <MKTypography
//                       display="block"
//                       variant="button"
//                       color="text"
//                       fontWeight="regular"
//                       sx={{ transition: "all 300ms linear" }}
//                     >
//                       {item.description}
//                     </MKTypography>
//                   </MKBox>
//                 )}
//               </MKBox>
//             ))}
//         </MKBox>
//       </DefaultNavbarDropdown>
//     )
//   );
//
//   return (
//     <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
//       <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
//         {renderNavbarItems}
//       </MKBox>
//     </Collapse>
//   );
// }
//
// // Typechecking props for the DefaultNavbarMobile
// DefaultNavbarMobile.propTypes = {
//   routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
//   open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
// };
//
// export default DefaultNavbarMobile;
