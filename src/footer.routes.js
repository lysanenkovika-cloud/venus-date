// @mui icons
// footerContent.js
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import MKTypography from "components/MKTypography";

import venusLogo from "assets/images/logo/logo.png";
import matchmakersLogo from "assets/images/logo/ukranian-matchmakers-logo.png";
import maguraLogo from "assets/images/logo/magura_logo.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Venus",
    image: venusLogo,
    route: "/",
  },

  // partners
  partners: [
    {
      name: "Ukrainian Matchmakers Alliance",
      image: matchmakersLogo,
      href: "https://www.ukrainianmatchmakersalliance.com/",
    },
    {
      name: "Magura Poltava",
      image: maguraLogo,
      href: "https://www.instagram.com/magura_poltava/",
    }
  ],

  // Facebook and Instagram
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/yourpage", // todo change fb page
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/venus_date",
    },
  ],

  copyright: (
      <MKTypography variant="button" color="text" fontWeight="regular">
        © {date} Venus. All rights reserved.
      </MKTypography>
  ),
};
