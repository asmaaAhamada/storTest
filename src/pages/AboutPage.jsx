import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Avatar,
  useTheme,
  Button
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { darkblue, pink, white } from "../color-main/color";
import r1 from '../assets/image/image.png'
import r2 from '../assets/image/22.jpg'

export default function AboutPage() {
  const theme = useTheme();
  
  const isLight = theme.palette.mode === 'light';
  const headerColor = theme.palette.primary.textheadr; 
  const cardBg = theme.palette.primary.card;

  // --- CSS Animations ---
  const animations = {
    "@keyframes fadeInUp": {
      "0%": { opacity: 0, transform: "translateY(40px) scale(0.95)" },
      "100%": { opacity: 1, transform: "translateY(0) scale(1)" }
    },
    "@keyframes slideInLeft": {
      "0%": { opacity: 0, transform: "translateX(-60px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    },
    "@keyframes slideInRight": {
      "0%": { opacity: 0, transform: "translateX(60px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    },
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" }
    }
  };

  return (
    <Box sx={{ 
      bgcolor: "background.default", 
      py: 10, 
      transition: '0.3s',
      overflow: 'hidden', // لمنع ظهور شريط التمرير أثناء الحركة
      ...animations 
    }}>
      <Container maxWidth="lg">
        
        {/* --- Section 1: Hero Header (Fade In First) --- */}
        <Box 
          textAlign="center" 
          mb={10}
          sx={{ animation: "fadeInUp 1s ease-out forwards" }}
        >
          <Typography
            variant="overline"
            sx={{ color: "primary.button", fontWeight: "bold", letterSpacing: 2 }}
          >
            Our Journey
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: isLight ? pink : darkblue,
              mt: 1,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            About <span style={{ color: isLight ? darkblue : pink }}>Our Brand</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.primary", mt: 2, maxWidth: "750px", mx: "auto", fontWeight: 400 }}
          >
            We believe that true beauty begins with self-care. Our store is curated to be your ultimate destination for everything that enhances your natural glow.
          </Typography>
        </Box>

        {/* --- Section 2: Who We Are (Slide In Effects) --- */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={6} sx={{ animation: "slideInLeft 1.2s ease-out 0.2s backwards" }}>
            <Box
              sx={{
                position: "relative",
                animation: "float 4s ease-in-out infinite", // إضافة حركة طفو مستمرة للصورة
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${theme.palette.primary.button}`,
                  borderRadius: "40px",
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src={r1}
                sx={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  borderRadius: "40px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ animation: "slideInRight 1.2s ease-out 0.4s backwards" }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Avatar sx={{ bgcolor: "primary.main1", color: "primary.button" }}>
                <SpaIcon />
              </Avatar>
              <Typography variant="h4" fontWeight="bold" color={headerColor}>
                Who We Are
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "text.primary" }}>
              We are more than just a beauty store; we are a sanctuary for confidence. 
              Our mission is to bring you a handpicked selection of premium skincare and makeup products 
              that blend luxury with effectiveness, designed to fit your unique lifestyle and personality.
            </Typography>
          </Grid>
        </Grid>

        {/* --- Section 3: Story & Vision (Delayed Zoom-In) --- */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ animation: "fadeInUp 1s ease-out 0.6s backwards" }}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: "30px",
                bgcolor: cardBg,
                border: `1px solid ${theme.palette.primary.chip}`,
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": { 
                  transform: "translateY(-15px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }
              }}
            >
              <FavoriteIcon sx={{ fontSize: 40, color: "primary.button", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" mb={2} color={headerColor}>
                Our Story
              </Typography>
              <Typography color="text.primary" lineHeight={1.7}>
                Our journey started with a simple passion: helping every woman feel empowered in her own skin. 
                We searched for products that combine quality and elegance to build a space where beauty 
                is not just seen, but truly felt and celebrated.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} sx={{ animation: "fadeInUp 1s ease-out 0.8s backwards" }}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: "30px",
                position: "relative", 
                overflow: "hidden", 
                backgroundImage: `linear-gradient(135deg, rgba(187, 23, 146, 0.85), rgba(123, 132, 155, 0.85)), url(${r2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: white, 
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": { 
                  transform: "translateY(-15px) scale(1.02)",
                },
                ...( !isLight && {
                  backgroundImage: `linear-gradient(135deg, rgba(255, 192, 203, 0.8), rgba(152, 25, 210, 0.8)), url(${r2})`,
                })
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 40, mb: 2, color: isLight ? "primary.main1" : "inherit" }} />
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Our Vision
              </Typography>
              <Typography lineHeight={1.7} sx={{ opacity: 0.9 }}>
                To become the most trusted beauty destination that inspires self-love and individuality. 
                We aim to empower every woman to express her femininity through products that 
                enhance her natural beauty and elevate her daily routine.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* --- Final CTA (Pop Up) --- */}
        <Box 
          textAlign="center" 
          mt={12}
          sx={{ animation: "fadeInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s backwards" }}
        >
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: 'primary.button', 
              px: 6, py: 2, 
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 1,
              transition: "0.3s",
              '&:hover': { 
                bgcolor: 'primary.logo',
                transform: "scale(1.1)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }
            }}
          >
            Discover the Collection
          </Button>
        </Box>

      </Container>
    </Box>
  );
}