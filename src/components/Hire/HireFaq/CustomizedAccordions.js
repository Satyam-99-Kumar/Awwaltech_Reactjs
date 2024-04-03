import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./HireFaq.module.scss";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState(false);
  const [changeBackFor, setChangeBackFor] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setChangeBackFor(panel);
    } else {
      setChangeBackFor("");
    }

    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={
            changeBackFor === "panel1"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>How can I start developing my IoT application?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Acc - 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={
            changeBackFor === "panel2"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>Why should I invest in IoT application development?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Acc - 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={
            changeBackFor === "panel3"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>What kind of services are offered by IoT service providers?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Acc - 4 */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={
            changeBackFor === "panel4"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>What time does it take to develop an IoT mobile app?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Acc - 5 */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className={
            changeBackFor === "panel5"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>How much does it cost to develop an IoT app?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Acc - 6 */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className={style.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className={
            changeBackFor === "panel6"
              ? `${style.accordion__summary} ${style.ash}`
              : `${style.accordion__summary}`
          }
        >
          <h3>What’s your pricing model?</h3>
        </AccordionSummary>
        <AccordionDetails className={style.accordion__details}>
          <Typography>
            Use the Preview in Designer option to make any edits to the template
            pages and preview how the layout would fit your content. Changes in
            preview mode won't be saved.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
