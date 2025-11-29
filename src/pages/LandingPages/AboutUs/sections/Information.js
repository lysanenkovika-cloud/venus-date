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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { useTranslation } from "react-i18next";
import informationImg from "assets/images/home/information.jpg"

function Information() {
  const { t } = useTranslation();

  // Беремо масив фіч із локалізації: about.features[]
  const features = t("about.features", { returnObjects: true }) || [];

    const heading = t("about.heading");
    const tagline = t("about.tagline");
    const full = t("about.full", { returnObjects: true }) || [];
    const paragraph = full[0] || "";

    const image = informationImg;

  return (
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={8}>
              <Grid container justifyContent="flex-start" spacing={3}>
                {(features).map((f, i) => (
                    <Grid item xs={12} md={6} key={f.id || i}>
                      <MKBox mb={{ xs: 5, md: 0 }}>
                        <DefaultInfoCard
                            icon={f.icon || "info"}
                            title={f.title}
                            description={f.description}
                        />
                      </MKBox>
                    </Grid>
                ))}
              </Grid>
            </Grid>
              <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                  <MKBox
                      component="img"
                      src={image}
                      alt={heading}
                      width="100%"
                      borderRadius="lg"
                      shadow="xl"
                      sx={{ objectFit: "cover", maxHeight: 380, mb: 2 }}
                  />
                  <MKTypography variant="h4" fontWeight="bold" mb={1}>
                      {heading}
                  </MKTypography>
                  <MKTypography variant="body1" color="text" mb={1.5}>
                      {tagline}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                      {paragraph}
                  </MKTypography>
              </Grid>
          </Grid>
        </Container>
      </MKBox>
  );
}

export default Information;
