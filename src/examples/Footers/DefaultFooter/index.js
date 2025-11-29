/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// DefaultFooter.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, partners = [], socials = [], copyright } = content;

  return (
      <MKBox component="footer">
        <Container>
          <Grid container spacing={3} alignItems="flex-start">
            {/* Ліворуч — оригінальне лого */}
            <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
              <MKBox display="flex" alignItems="center" gap={2} mb={2}>
                <Link to={brand.route} aria-label={brand.name}>
                  <MKBox
                      component="img"
                      src={brand.image}
                      alt={brand.name}
                      sx={{
                        height: { xs: 96, md: 128 },
                        width: "auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                  />
                </Link>
              </MKBox>

              {/* Соціальні іконки (залишив; якщо не треба — видали цей блок) */}
              {socials?.length > 0 && (
                  <MKBox display="flex" alignItems="center" mt={1}>
                    {socials.map(({ icon, link }, i) => (
                        <MKTypography
                            key={link}
                            component="a"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            variant="h5"
                            color="dark"
                            opacity={0.8}
                            mr={i === socials.length - 1 ? 0 : 2.5}
                        >
                          {icon}
                        </MKTypography>
                    ))}
                  </MKBox>
              )}
            </Grid>

            {/* Праворуч — Partners */}
            <Grid item xs={12} md={9} sx={{ mb: 3 }}>
              <MKTypography
                  variant="button"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing={0.6}
                  mb={1}
                  display="block"
              >
                Partners
              </MKTypography>

              <MKBox
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  gap={3}
                  sx={{ mt: 1 }}
              >
                  {partners.map((p) =>
                      p.href ? (
                          <MKBox
                              key={p.name}
                              component="a"
                              href={p.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={p.name}
                              sx={{ display: "inline-block" }}
                          >
                              <MKBox
                                  component="img"
                                  src={p.image}
                                  alt={p.name}
                                  sx={{
                                      height: { xs: 80, md: 112 },
                                      width: "auto",
                                      display: "block",
                                      objectFit: "contain",
                                      opacity: 0.9,
                                      transition: "opacity .2s ease",
                                      "&:hover": { opacity: 1 },
                                  }}
                              />
                          </MKBox>
                      ) : (
                          <Link key={p.name} to={p.route} aria-label={p.name}>
                              <MKBox component="img" src={p.image} alt={p.name} sx={{ height: { xs: 80, md: 112 }, width: "auto", display: "block", objectFit: "contain" }} />
                          </Link>
                      )
                  )}
              </MKBox>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
              {copyright}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
    partners: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired,
        })
    ),
    socials: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node.isRequired,
          link: PropTypes.string.isRequired,
        })
    ),
    copyright: PropTypes.node,
  }).isRequired,
};

export default DefaultFooter;
