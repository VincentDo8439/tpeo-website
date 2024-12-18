import React from "react";
import {
  Divider,
  Box,
  Typography,
  useTheme,
  Button,
  IconButton
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email"; // Replace with actual icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GroupIcon from "@mui/icons-material/Group";
import TPEOLogoGradient from "../assets/TPEOLogoGradient.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Create motion-enabled components
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Divider sx={{ backgroundColor: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "48vh",
          backgroundColor: theme.palette.background.default,
          color: "#FFFFFF",
          padding: "20px",
        }}
      >
        {/* Left content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "flex-start", // Aligns items to the left
            marginLeft: "6.7vw",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "3.8vw",
              mb: "5vh",
            }}
          >
            Interested?
          </Typography>
          <img
            src={TPEOLogoGradient}
            alt="TPEO Logo"
            style={{
              width: "12vw",
              height: "auto",
              maxWidth: "100%",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0); // Scroll to the top after navigation
            }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.8vw",
              maxWidth: "100%",
              textAlign: "left",
              marginY: 3,
              color: "grey",
            }}
          >
            © 2024 Texas Product Engineering Organization. All rights reserved
          </Typography>
        </Box>
        {/* Right content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingLeft: "20px", // Adds spacing between the two main columns
            marginRight: "6.7vw",
            marginTop: "10vh",
          }}
        >
          <MotionButton
            variant="contained"
            onClick={() => {
              navigate("/join");
              window.scrollTo(0, 0); // Scroll to the top after navigation
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              width: "16.4vw",
              height: "10vh",
              color: theme.palette.text.primary,
              fontSize: "2vw",
              fontWeight: 700,
              borderRadius: "10px",
              padding: "10px 30px",
              backgroundColor: "#FB8C14",
              boxShadow: "none",
              transition:
                "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              "&:hover": {
                backgroundColor: "#FB8C14",
                letterSpacing: "0.03em",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              },
            }}
          >
            Join TPEO
          </MotionButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10vh",
              gap: "2vw",
            }}
          >
            <MotionIconButton
              color="inherit"
              href="mailto:tpeoteam@gmail.com"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                width: "4.8vw",
                height: "4.8vw",
                backgroundColor: theme.palette.primary.main, // Set the background color to orange
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark, // Darker on hover
                },
              }}
            >
              <EmailIcon sx={{ width: "80%", height: "80%" }} />
            </MotionIconButton>
            <MotionIconButton
              color="inherit"
              href="https://www.instagram.com/txproduct"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                width: "4.8vw",
                height: "4.8vw",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transition:
                    "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
                },
              }}
            >
              <InstagramIcon sx={{ width: "80%", height: "80%" }} />
            </MotionIconButton>
            <MotionIconButton
              color="inherit"
              href="https://www.linkedin.com/in/tpeo"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                width: "4.8vw",
                height: "4.8vw",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <LinkedInIcon sx={{ width: "80%", height: "80%" }} />
            </MotionIconButton>
            <MotionIconButton
              color="inherit"
              href="https://www.youtube.com/channel/tpeo"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                width: "4.8vw",
                height: "4.8vw",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <YouTubeIcon sx={{ width: "80%", height: "80%" }} />
            </MotionIconButton>
            <MotionIconButton
              color="inherit"
              href="https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                width: "4.8vw",
                height: "4.8vw",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              <GroupIcon sx={{ width: "80%", height: "80%" }} />
            </MotionIconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;