/* eslint-disable react/jsx-no-duplicate-props */
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

// @mui material components
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import ukrMatchmakerLabel from "assets/images/logo/ukranian-matchmakers-logo.png";

function Newsletter() {
  return (
      <MKBox component="section" pt={6} my={6}>
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 3, md: 0 } }}>
              <MKTypography variant="h4">Be the first to see the news</MKTypography>
              {/*<MKTypography variant="body2" color="text" mb={3}>*/}
              {/*  Your company may not be in the software business, but eventually, a software company*/}
              {/*  will be in your business.*/}
              {/*</MKTypography>*/}

              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <MKInput type="email" label="Email Here..." fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                    Subscribe
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
              <MKBox position="relative" textAlign="center">
                <MKBox
                    component={Link}
                    to="https://www.ukrainianmatchmakersalliance.com/members"
                    aria-label="Learn more about us"
                    sx={{ display: "inline-block", cursor: "pointer" }}
                >
                  <MKBox
                      component="img"
                      src={ukrMatchmakerLabel}
                      alt="Ukrainian matchmakers label"
                      sx={{
                        width: { xs: "70%", md: "50%" },
                        maxWidth: 420,
                        transition: "transform 160ms ease, opacity 160ms ease",
                        "&:hover": { transform: "scale(1.02)", opacity: 0.95 },
                        display: "block",
                        mx: "auto",
                      }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
  );
}

export default Newsletter;