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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTranslation } from "react-i18next";

// Images
import olgaScott from "assets/images/couples/olga_scott.jpg";
import annaThomas from "assets/images/couples/anna_thomas.jpg";
import ninaGenrih from "assets/images/couples/nina_genrih.jpg";
import defaultImg from "assets/images/couples/default.png";

function CouplesStories() {
  const { t } = useTranslation();
  const couplesData = t("gallery.couples", { returnObjects: true }) || [];

  // Map images to couples
  const imageMap = {
    "olga_scott.jpg": olgaScott,
    "anna_thomas.jpg": annaThomas,
    "nina_genrih.jpg": ninaGenrih,
    "default.png": defaultImg
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} sx={{ mx: "auto", mb: 6 }}>
          <MKBox width="100%" textAlign="center">
            <MKTypography variant="h2" fontWeight="bold" mb={1}>
              {t("gallery.title")}
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              {t("gallery.subtitle")}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container spacing={3}>
          {couplesData.map((couple) => (
            <Grid item xs={12} md={6} lg={4} key={couple.id}>
              <MKBox mb={3}>
                <Card>
                  <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                    <MKBox
                      component="img"
                      src={imageMap[couple.image]}
                      alt={couple.name}
                      borderRadius="lg"
                      width="100%"
                      position="relative"
                      zIndex={1}
                    />
                    <MKBox
                      borderRadius="lg"
                      shadow="md"
                      width="100%"
                      height="100%"
                      position="absolute"
                      left={0}
                      top={0}
                      sx={{
                        backgroundImage: `url(${imageMap[couple.image]})`,
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                      }}
                    />
                  </MKBox>
                  <MKBox p={3} mt={-1} textAlign="center">
                    <MKTypography display="inline" variant="h5" fontWeight="regular">
                      {couple.name}
                    </MKTypography>
                    <MKBox mt={1} mb={2}>
                      <MKTypography variant="body2" component="p" color="text">
                        {couple.story}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Card>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CouplesStories;
