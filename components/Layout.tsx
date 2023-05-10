import React from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import { Web } from "@mui/icons-material";
import image1 from "../assets/image1.jpg";
import salesforce from "../assets/salesforce.png";
import Image from "next/image";

const Layout: React.FC = () => {
  const imageAspectRatio = 0.15; // Replace with the aspect ratio of your image (height / width)

  return (
    <Box>
      <Grid container alignItems="center" spacing={2} padding={2}>
        <Grid item xs={6} md={6} sx={{ textAlign: { xs: 'left', md: 'left' } }}>
          <Typography variant="h5">WeWork + SalesForce</Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-end', md: 'flex-end' } }}>
          <Button variant="contained" color="primary">
            Publish/Share
          </Button>
        </Grid>
      </Grid>

      <Box  sx={{ width: "100%", overflow: "hidden", paddingTop: `${imageAspectRatio * 100}%`  }}>
        <Box
          sx={{
            position: "absolute",
            width: "97%",
            height: "30%",
            top:"150px",
            left:"10px",
          
            zIndex: -1,

           
            
          }}
        >
          <Image
            src={image1}
            alt="Your image"
            layout="fill"
            objectFit="cover"
            className="rounded-image"
          />
          <style jsx global>{`
            .rounded-image {
              border-radius: 20px;
            }
          `}</style>
        </Box>

        <Box
          position="absolute"
          left={{ xs: "20px", md: "50px" }}
          bottom={{ xs: "260px", md: "270px" }}
          width={{ xs: "150px", md: "200px" }}
          height={{ xs: "100px", md: "100px" }}
          bgcolor="#fff"
          zIndex="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="20px"
        >
          <Box sx={{
            position: "absolute",
            width: "40%",
            height: "40%",
           
            left:"0px",
          
            zIndex: -1,

           
            
          }}><Image src={salesforce} alt="Your image" layout="fill"
          objectFit="cover"
          className="rounded-image"
        />
        <style jsx global>{`
          .rounded-image {
            border-radius: 20px;
          }
        `}</style></Box>
          +
          <Box sx={{
            position: "absolute",
            width: "40%",
            height: "40%",
           
            left:"100px",
          
            zIndex: -1,

           
            
          }}><Image src={salesforce} alt="Your image" layout="fill"
          objectFit="cover"
          className="rounded-image"
        />
        <style jsx global>{`
          .rounded-image {
            border-radius: 20px;
          }
        `}</style></Box>
          
        </Box>

        <Paper
          sx={{
            position: "absolute",
            right:"0px",
            top: { xs: "151px", md: "150px" },
            width: { xs: "43%", md: "43%" },
            height: { xs: "25%", md: "30%", },
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
            p: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Typography variant="h6" style={{marginLeft:"50px"}}>Workspace Proposal</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Layout;
