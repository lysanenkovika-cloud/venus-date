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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { useTranslation } from "react-i18next";

function Information() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true }) || [];

  const icons = [
    "favorite",                // matchmaking
    "assignment_turned_in",    // contract
    "support_agent",           // free consultation
    "badge",                   // profile setup
    "style",                   // style & photoshoot
    "public",                  // cultural coaching
    "rocket_launch",           // visa/migration support
    "translate",               // translation
    "psychology",              // Cupid game
    "gavel",                   // legal support
    "search",                  // background check
    "lock",                    // confidentiality
    "supervisor_account",      // personal manager
    "travel_explore",          // offline tours
    "home_work"                // post-marriage support
  ];

  return (
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            {(services.slice(0, 15)).map((svc, i) => (
                <Grid
                    item
                    key={svc.id || i}
                    xs={12}
                    sm={6}
                    md={4}
                >
                  <MKBox mb={5} textAlign="center">
                    <DefaultInfoCard
                        icon={icons[i] || "info"}
                        color="primary"
                        title={svc.title}
                        description={svc.description}
                    />
                  </MKBox>
                </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
  );
}

export default Information;
