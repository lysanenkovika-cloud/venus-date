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
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useTranslation } from "react-i18next";

function Achievements() {
  const { t } = useTranslation();
  const a = t("achievements", { returnObjects: true }) || {};
  const order = ["pairs", "babies", "meets"]; // фіксуємо порядок

  const parseValue = (val) => {
    const s = String(val ?? "");
    const m = s.match(/^(\d+)(\+?)$/);
    return {
      count: m ? Number(m[1]) : 0,
      suffix: m ? m[2] : "",
    };
  };

  return (
      <MKBox component="section" pt={3} pb={8}>
        <Container>
          <Grid container justifyContent="center" spacing={3} sx={{ textAlign: "center" }}>
            {order.map((key) => {
              const item = a[key] || {};
              const { count, suffix } = parseValue(item.value);
              return (
                  <Grid item xs={12} md={3} key={key}>
                    <DefaultCounterCard
                        count={count}
                        suffix={suffix}
                        separator=","
                        title={item.title}
                        description={item.description}
                    />
                  </Grid>
              );
            })}
          </Grid>
        </Container>
      </MKBox>
  );
}

export default Achievements;


// function Achievements() {
//   const { t } = useTranslation();
//   return (
//     <MKBox component="section" pt={3} pb={8}>
//       <Container>
//         <Grid container spacing={3} sx={{ mb: 12 }}>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.7} />
//           </Grid>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
//           </Grid>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
//           </Grid>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
//           </Grid>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
//           </Grid>
//           <Grid item xs={6} md={4} lg={2}>
//             <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
//           </Grid>
//         </Grid>
//         <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
//           <Grid item xs={12} md={3}>
//             <DefaultCounterCard
//               count={50}
//               suffix="+"
//               separator=","
//               title={t('achievements.pairs.title')}
//               description="Of “high-performing” level are led by a certified project manager"
//             />
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <DefaultCounterCard
//               count={17}
//               separator=","
//               title={t('achievements.babies.title')}
//               description="That meets quality standards required by our users"
//             />
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <DefaultCounterCard
//               count={20}
//               suffix="+"
//               title={t('achievements.meets.title')}
//               description="Actively engage team members that finishes on time"
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }
//
// export default Achievements;
