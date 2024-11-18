import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cohort from "./Cohort";
import { motion, AnimatePresence } from "framer-motion";

function TeamPage() {
  const theme = useTheme();

  // Dynamically import all images from the specified directory
  const importAll = (r) =>
    r.keys().map((key, index) => ({
      id: index + 1,
      url: r(key),
      alt: `Carousel Slide ${index + 1}`,
    }));

  const images = importAll(
    require.context(
      "../../assets/socialImages",
      false,
      /\.(png|jpg|jpeg|svg|JPG|JPEG)$/i
    )
  );

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true, // Consider keeping infinite regardless of image count for a continuous feel
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        sx={{
          height: "110vh",
          background: `
          linear-gradient(0deg, rgba(236, 145, 62, 0.7), rgba(236, 145, 62, 0) 65%),
          #1A202C`, // Dark background as the base layer
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "3.8vw",
                color: theme.palette.text.primary,
                marginBottom: "20px",
                marginTop: "12%",
                marginLeft: "5vw",
                width: "30%",
                textAlign: "left",
              }}
            >
              Introducing Team TPEO
            </Typography>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Box
            sx={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mt: "5vh",
            }}
          >
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id} onClick={() => handleOpen(image.url)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{
                      width: "100%",
                      maxWidth: "25vw",
                      height: "25vw",
                      borderRadius: "15px",
                      overflow: "hidden",
                      margin: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </Box>
        </motion.div>
      </Box>
      <Cohort />
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
          backdropFilter: "none",
        }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              >
                {selectedImage && (
                  <motion.div
                    whileHover={{ scale: 1.02 }} // Hover animation on modal image
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{
                        width: "auto",
                        height: "90vh", // Height fits within the viewport height
                        maxWidth: "100%", // Ensure width fits within the viewport width
                        objectFit: "contain",
                        display: "block",
                        margin: "auto",
                        borderRadius: "12px",
                      }}
                    />
                  </motion.div>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}

export default TeamPage;
