import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Description from './Description';
import Specification from './Specification';
import Review from './Review';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%', margin: "0px auto", justifyContent: "center", alignItems: "center" , background: "#fff"}}>
      <Box sx={{  borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Description" {...a11yProps(0)} style={Text} />
          <Tab label="Specification" {...a11yProps(1)} style={Text} />
          <Tab label="Reviews" {...a11yProps(2)} style={Text} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Description/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Specification/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Review/>
      </TabPanel>
    </Box>
  );
}

const Text = {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "150%",
    textAlign: "justify",
    color: "#256EE4",
    cursor:"pointer",
}