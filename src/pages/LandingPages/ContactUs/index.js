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
import Grid from "@mui/material/Grid";
import React, { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { useTranslation } from "react-i18next";
// Images
import bgImage from "assets/images/contact_us_img.png";
import venusLogo from "assets/images/logo/logo.png";

function ContactUs() {
  const { t } = useTranslation();
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  // Email validation function - more strict
  const validateEmail = (email) => {
    // RFC 5322 compliant email regex (simplified but robust)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Additional checks
    if (!emailRegex.test(email)) {
      return false;
    }

    // Check email length
    if (email.length > 254) {
      return false;
    }

    // Check domain part has at least one dot
    const parts = email.split('@');
    if (parts.length !== 2) {
      return false;
    }

    const domain = parts[1];
    if (!domain.includes('.')) {
      return false;
    }

    // Check TLD is at least 2 characters
    const tld = domain.split('.').pop();
    if (tld.length < 2) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email on change
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setEmailError(t("contact_us.email_invalid") || "Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final email validation
    if (!validateEmail(formData.email)) {
      setEmailError(t("contact_us.email_invalid") || "Please enter a valid email address");
      return;
    }

    // Check if hCaptcha token exists (if hCaptcha is enabled in Web3Forms)
    if (!captchaToken && process.env.REACT_APP_HCAPTCHA_SITE_KEY) {
      setStatus({
        type: "error",
        message: t("contact_us.captcha_required") || "Please complete the captcha verification"
      });
      return;
    }

    setStatus({ type: "info", message: t("contact_us.sending") || "Sending..." });

    try {
      // Web3Forms API
      const payload = {
        access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
      };

      // Add hCaptcha token if available
      if (captchaToken) {
        payload["h-captcha-response"] = captchaToken;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: t("contact_us.success") || "Message sent successfully!"
        });
        setFormData({ fullName: "", email: "", message: "" });
        setCaptchaToken("");
        // Reset hCaptcha
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({
        type: "error",
        message: t("contact_us.error") || "Failed to send message. Please try again."
      });
      // Reset hCaptcha on error
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }
      setCaptchaToken("");
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          brand={{ name: "Venus", image: venusLogo, route: "/" }}
          routes={routes}
          // action={{
          //   type: "external",
          //   route: "https://www.creative-tim.com/product/material-kit-react",
          //   label: "free download",
          //   color: "info",
          // }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="primary"
              coloredShadow="primary"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {t("contact_us.title")}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                {t("contact_us.desc")}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label={t("contact_us.fullname")}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label={t("contact_us.email")}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      required
                      error={!!emailError}
                    />
                    {emailError && (
                      <MKTypography variant="caption" color="error" sx={{ mt: 0.5, display: "block" }}>
                        {emailError}
                      </MKTypography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={t("contact_us.content")}
                      placeholder={t("contact_us.placeholder")}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      required
                    />
                  </Grid>
                </Grid>
                {status.message && (
                  <MKBox mt={3}>
                    <MKTypography
                      variant="body2"
                      color={status.type === "success" ? "success" : status.type === "error" ? "error" : "info"}
                      textAlign="center"
                    >
                      {status.message}
                    </MKTypography>
                  </MKBox>
                )}
                {/* hCaptcha - only show if site key is configured */}
                {process.env.REACT_APP_HCAPTCHA_SITE_KEY && (
                  <MKBox mt={3} display="flex" justifyContent="center">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken("")}
                      onError={() => setCaptchaToken("")}
                    />
                  </MKBox>
                )}
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="primary">
                    {t("contact_us.button_text")}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
