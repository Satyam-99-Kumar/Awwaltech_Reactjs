import { useRef, useState } from "react";
// Components
import Detail from "./Detail";
// Assets
import * as React from "react";
import style from "./GlobalIndustries.module.scss";
import { BsChevronDown } from "react-icons/bs";
import Slider from "react-slick/lib/slider";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};

const settings2 = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

function GlobalIndustries({ data, apiData }) {
  const [option, setOption] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);

  const handleClick = (id) => {
    setOption(id);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setAnimationActive(true);
    setValue(newValue);
    // Trigger the same action as handleClick with the index + 1
    handleClick(newValue + 1);
    setTimeout(() => {
      setAnimationActive(false);
    }, 2000);
  };
  return (
    <div className={style.industries}>
      <div className={style.industries__text}>
        <p>{apiData.IndustriesSection?.Title1}</p>
        <h1>{apiData.IndustriesSection?.Title2}</h1>
        <p>{apiData.IndustriesSection?.Paragraph}</p>
      </div>

      {/* //////////////////////////////////// */}
      {/* ///////////// Options ///////////// */}
      {/* //////////////////////////////////// */}
      <div className={style.optionSliderForMobile}>
        <Slider {...settings2}>
          {apiData.IndustriesSection.Industries?.map((data, index) => (
            <div
              key={`${data._id}_${index}`}
              className={
                option === index
                  ? `${style.option} ${style.active}`
                  : `${style.option}`
              }
              onClick={() => handleClick(index)}
            >
              <div className={style.optionWrapper}>
                {/* <div className={style.logo}>eval{data.optionLogo}</div> */}
                <div className={style.logo}>Icon</div>
                <div className={style.text}>
                  <div>{data.optionName[0]}</div>
                  <div>{data.optionName[1]}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={style.content}>
        {/* ///////////// Options ///////////// */}

        {/* //////////////////////////////////// */}
        {/* ////////////// Detail ////////////// */}
        {/* //////////////////////////////////// */}
        <div className={style.content__detail}>
          <Box
            className={`${style.tabs}`}
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {apiData.IndustriesSection.Industries?.map((data, index) => (
                <Tab
                  key={index}
                  label={
                    <div className={`${style.tab_btn}`} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "8px" }}>
                        <LibraryAddCheckIcon />
                      </div>
                      <div>
                        <div>{data.optionName[0]}</div>
                        <div>{data.optionName[1]}</div>
                      </div>
                    </div>
                  }
                />
              ))}
            </Tabs>
            <div
              className={style.arrowButton}
              onClick={() => setValue(value + 1)}
            >
              <BsChevronDown />
            </div>
          </Box>
          <div
            className={
              animationActive
                ? `${style.wrapper} ${style.activeAnim}`
                : `${style.wrapper}`
            }
          >
            <Detail
              option={option}
              data={apiData.IndustriesSection.Industries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalIndustries;

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function ScrollableTabsButtonForce() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons
//         allowScrollButtonsMobile
//         aria-label="scrollable force tabs example"
//       >
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//         <Tab label="Item Four" />
//         <Tab label="Item Five" />
//         <Tab label="Item Six" />
//         <Tab label="Item Seven" />
//       </Tabs>
//     </Box>
//   );
// }
