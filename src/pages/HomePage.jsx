import { Box } from "@mui/material";
import PublicPage from "./publicPage";
import AboutPage from "./AboutPage";

export default function HomePage() {
  return (
    <>
      {/* Section 1 */}
      <Box
        sx={{
          opacity: 0,
          transform: "translateY(60px)",
          animation: "fadeUp 1s ease forwards",
          animationDelay: "0.2s",

          "@keyframes fadeUp": {
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <PublicPage />
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          opacity: 0,
          transform: "translateY(60px)",
          animation: "fadeUp 1s ease forwards",
          animationDelay: "0.6s",

          "@keyframes fadeUp": {
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <AboutPage />
      </Box>
    </>
  );
}