import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import HeroVideoBackground from "../../../components/HeroVideoBackground";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";
import heroMp4 from "assets/video/golden_kiss_moment_2.mp4";
import { useTranslation } from "react-i18next";
import venusLogo from "../../../assets/images/logo/logo.png";

// Gallery sections
import CouplesStories from "./sections/CouplesStories";


export default function Gallery() {
    const { t } = useTranslation();
    return (
        <>
            <DefaultNavbar
                brand={{ name: "Venus", image: venusLogo, route: "/" }}
                routes={routes}
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/product/material-kit-react",
                //   label: "free download",
                //   color: "default",
                // }}
                transparent
                light
            />
            <HeroVideoBackground
                srcMp4={heroMp4}
                height="80vh"
            >
                <div>
                    <MKTypography variant="h2" color="white" fontWeight="bold" mb={2}>
                        {t('gall.title')}
                    </MKTypography>
                </div>
            </HeroVideoBackground>

            {/* Couples Stories Section */}
            <CouplesStories />
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}