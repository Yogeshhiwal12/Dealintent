import React, { useState } from "react";
import { Typography, Button, Card, CardContent, Paper, IconButton, Tabs, Tab, Box, Divider } from "@mui/material";
import { VisibilityOff, Delete, Download, Fullscreen, ZoomIn, ZoomOut, Comment, Share } from "@mui/icons-material";
import image1 from "../assets/image1.jpg";
import Image from "next/image";
import LinearProgress from '@mui/material/LinearProgress';
import { Hidden } from "@mui/material";

const Project: React.FC = () => {
  const [value, setValue] = useState(0);
  const progress = 3;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: { xs: '250px', md: '100px' } }}>
        <Typography variant="h5">Project Scope Recap</Typography>
        <Box sx={{flexDirection:"column",justifyContent:"flex-end", marginRight:"30px"}}>
        <span style={{marginLeft:"10px"}}> Mutual Action Plan</span>
        <span style={{marginLeft:"20px"}}>{progress}%</span>
        <Box width="100%" mx={2} >
        <LinearProgress variant="determinate" value={progress} />
      </Box>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between">
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Basic Info" />
      <Tab label="Files" />
      <Tab label="Mutual Action Plan" />
      <Tab label="Contact" />
    </Tabs>

    <Hidden smDown>
      <Button variant="contained" color="primary">Internal Actions</Button>
    </Hidden>
</Box>
      {value === 0 && (
        <Box display="flex" justifyContent="space-between">
          <Box flexBasis={{ md: '20%' }} pr={2} display={{ xs: 'none', md: 'block' }}>
  <Typography variant="body1">Overview</Typography>
  <hr />
  <Typography variant="body1">Welcome</Typography>
  <hr />
  <Typography variant="body1">Product Capabilities</Typography>
  <hr />
  <Typography variant="body1">Customer Success Stories</Typography>
  <hr />
  <Typography variant="body1">File Sharing</Typography>
  <hr />
  <Typography variant="body1">Our Deck</Typography>
  <hr />
</Box>


          <Box flexBasis={{ xs: '100%', md: '80%' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Company Profile</Typography>
              <Box>
                <IconButton>
                  <Download />
                </IconButton>
                <IconButton>
                  <VisibilityOff />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>

            <Card>
            <Box style={{ width: '100%', maxWidth: '1050px', height:'50%' }}>
  <Image
    src={image1}
    alt="Company Image"
    layout="responsive"
    width={1050}
    height={500}
  />
</Box>

<Paper
    sx={{
      position: "absolute",
      right: { xs: '30%', md: '25%' },
      top: { xs: '78%', md: '95%' },
      width: { xs: '30%', md: '20%' },
      height: { xs: '3%', md: '10%' },
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      p: 2,
    }}
  >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <IconButton>
                    <Download />
                  </IconButton>
                  <Divider />
                  <IconButton>
                    <Fullscreen />
                  </IconButton>
                  <Divider />
                  <IconButton>
                    <ZoomIn />
                  </IconButton>
                  <Divider />
                  <IconButton>
                    <ZoomOut />
                  </IconButton>
                </Box>
              </Paper>

              <Paper
    sx={{
      position: "absolute",
      right: { xs: '10%', md: '20%' },
      top: { xs: '87%', md: '125%' },
      width: { xs: '70%', md: '30%' },
      height: { xs: '10', md: '20%' },
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      p: 2,
    }}
  ><Box   >
                  <Typography variant="h4" component="div" style={{ textAlign: "center" }}>
                    WeWork
                  </Typography>
                  <Typography variant="h5" color="text.secondary" style={{ textAlign: "center" }}>
                    For all the ways you work, we're here
                  </Typography>
                </Box>
              </Paper>

              <Box display="flex" alignItems="center">
                <IconButton>
                  <Comment />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
              </Box>
            </Card>
          </Box>
        </Box>
      )}

      {/* Add similar blocks for when value is 1, 2, and 3 to handle other tabs. */}
    </Box>
  );
};

export default Project;
