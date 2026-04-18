import { Outlet } from "react-router-dom";
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { alpha } from "@mui/material";
import r1 from "../assets/image/12.avif";
import { Link } from "react-router-dom";

export default function PublicPage() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 2 },
          minHeight: "70vh",
        }}
      >
        {/* النص */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 45%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.button,
            }}
          >
            Welcome to Our Store
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "1.1rem",
              color: theme.palette.text.secondary,
            }}
          >
            Where beauty begins and confidence shines.
            <br />
            Discover a world of premium skincare and makeup products designed
            to enhance your natural glow and elevate your everyday look.
          </Typography>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                px: 4,
                py: 1.2,
                backgroundColor: theme.palette.primary.button,

                // Glow أساسي
                boxShadow: `0 0 0px ${theme.palette.primary.button}`,
                transition: "all 0.3s ease",

                // Hover glow
                "&:hover": {
                  backgroundColor: theme.palette.primary.button,
                  boxShadow: `0 0 20px 6px ${alpha(
                    theme.palette.primary.button,
                    0.6
                  )}`,
                },

                // Pulse animation
                animation: "pulse 2s infinite",

                "@keyframes pulse": {
                  "0%": {
                    boxShadow: `0 0 0 0 ${alpha(
                      theme.palette.primary.button,
                      0.7
                    )}`,
                  },
                  "70%": {
                    boxShadow: `0 0 25px 10px transparent`,
                  },
                  "100%": {
                    boxShadow: `0 0 0 0 transparent`,
                  },
                },
              }}
            >
              Get Started
            </Button>
          </Link>
        </Box>

        {/* الصورة */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            flex: { xs: "1 1 100%", md: "1 1 45%" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <img
            src={r1}
            alt="Tech products"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Box>
    </>
  );
}