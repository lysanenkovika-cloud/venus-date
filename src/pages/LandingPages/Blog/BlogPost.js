import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";
import venusLogo from "assets/images/logo/logo.png";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const posts = t("blog.posts", { returnObjects: true }) || [];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <DefaultNavbar
          brand={{ name: "Venus", image: venusLogo, route: "/" }}
          routes={routes}
          transparent
          light
        />
        <MKBox component="section" py={12}>
          <Container>
            <MKTypography variant="h3" mb={3}>
              Post not found
            </MKTypography>
            <MKButton color="info" onClick={() => navigate("/blog")}>
              {t("blog.back_to_blog")}
            </MKButton>
          </Container>
        </MKBox>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }

  return (
    <>
      <DefaultNavbar
        brand={{ name: "Venus", image: venusLogo, route: "/" }}
        routes={routes}
        sticky
      />
      <MKBox component="section" py={12}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={10}>
              <Card>
                {/* Hero Image */}
                <MKBox
                  position="relative"
                  borderRadius="lg"
                  mx={2}
                  mt={-3}
                  mb={3}
                  sx={{ overflow: "hidden" }}
                >
                  <MKBox
                    component="img"
                    src={require(`assets/images/blog/${post.image}`)}
                    alt={post.title}
                    width="100%"
                    borderRadius="lg"
                    shadow="md"
                    sx={{
                      maxHeight: 500,
                      objectFit: "cover",
                    }}
                  />
                </MKBox>

                {/* Content */}
                <MKBox p={4}>
                  {/* Back Button */}
                  <MKButton
                    variant="text"
                    color="info"
                    onClick={() => navigate("/blog")}
                    sx={{ mb: 2 }}
                  >
                    ← {t("blog.back_to_blog")}
                  </MKButton>

                  {/* Title */}
                  <MKTypography variant="h2" fontWeight="bold" mb={1}>
                    {post.title}
                  </MKTypography>

                  {/* Meta Info */}
                  <MKBox display="flex" alignItems="center" mb={4}>
                    <MKTypography variant="body2" color="text" mr={2}>
                      {post.author}
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      •
                    </MKTypography>
                    <MKTypography variant="body2" color="text" ml={2}>
                      {new Date(post.date).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </MKTypography>
                  </MKBox>

                  {/* Article Content */}
                  {post.content.map((block, index) => {
                    if (block.type === "heading") {
                      return (
                        <MKTypography
                          key={index}
                          variant="h4"
                          fontWeight="bold"
                          mt={4}
                          mb={2}
                        >
                          {block.value}
                        </MKTypography>
                      );
                    }

                    if (block.type === "text") {
                      return (
                        <MKTypography
                          key={index}
                          variant="body1"
                          color="text"
                          mb={3}
                          sx={{ lineHeight: 1.8 }}
                        >
                          {block.value}
                        </MKTypography>
                      );
                    }

                    if (block.type === "message") {
                      return (
                        <MKBox
                          key={index}
                          mb={2}
                          p={2}
                          sx={{
                            backgroundColor:
                              block.sender === "male"
                                ? "rgba(33, 150, 243, 0.1)"
                                : "rgba(233, 30, 99, 0.1)",
                            borderLeft: `4px solid ${
                              block.sender === "male"
                                ? "#2196F3"
                                : "#E91E63"
                            }`,
                            borderRadius: "8px",
                          }}
                        >
                          <MKTypography
                            variant="body1"
                            color="text"
                            sx={{
                              lineHeight: 1.8,
                              whiteSpace: "pre-line",
                            }}
                          >
                            {block.value}
                          </MKTypography>
                        </MKBox>
                      );
                    }

                    if (block.type === "image") {
                      return (
                        <MKBox key={index} my={4}>
                          <MKBox
                            component="img"
                            src={require(`assets/images/blog/${block.src}`)}
                            alt={block.alt || ""}
                            width="100%"
                            borderRadius="lg"
                            shadow="md"
                          />
                        </MKBox>
                      );
                    }

                    return null;
                  })}

                  {/* Back Button at Bottom */}
                  <MKBox mt={6}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      onClick={() => navigate("/blog")}
                    >
                      ← {t("blog.back_to_blog")}
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BlogPost;
