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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import { useTranslation } from "react-i18next";

// Images
import team1 from "assets/images/team/vika1.jpg";
import team2 from "assets/images/team/olya2.jpg";

function Team() {
  const { t } = useTranslation();

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="primary"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Venus Team
            </MKTypography>
            {/*<MKTypography variant="body2" color="white" opacity={0.8}>*/}
            {/*  There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good*/}
            {/*  at. That&apos;s my skill.*/}
            {/*</MKTypography>*/}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name={t("about.viktoria.name")}
                position={{ color: "info", label: t("about.viktoria.title") }}
                description={t("about.viktoria.description")}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name={t("about.olga.name")}
                position={{ color: "info", label: t("about.olga.title") }}
                description={t("about.olga.description")}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
