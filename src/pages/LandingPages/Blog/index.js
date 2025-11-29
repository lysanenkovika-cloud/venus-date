import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import routes from "routes";
import footerRoutes from "footer.routes";
import venusLogo from "assets/images/logo/logo.png";
import bgImage from "assets/images/bg-about-us.jpg";

export default function Blog() {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true }) || [];

  return (
    <>
      <DefaultNavbar
        brand={{ name: "Venus", image: venusLogo, route: "/" }}
        routes={routes}
        transparent
        light
      />

      {/* Hero Section */}
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="body1" color="white" opacity={0.8} mt={2}>
              {t("blog.page_subtitle")}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      {/* Blog Posts Grid */}
      <MKBox component="section" py={8}>
        <Container>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <CenteredBlogCard
                  image={require(`assets/images/blog/${post.image}`)}
                  title={post.title}
                  description={post.excerpt}
                  action={{
                    type: "internal",
                    route: `/blog/${post.slug}`,
                    color: "info",
                    label: t("blog.read_more"),
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}