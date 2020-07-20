import React from "react";
import "./Toggler.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";

function Toggler({
  toggle,
  dateItems,
  addbackToShowList,
  deleteSaveIndex,
  thefullDate,
  clearAllhistory,
}) {
  if (thefullDate.length === 0)
    return <h1 style={{ color: "black" }}>You got no items in history.</h1>;

  return (
    <Collapse collapsedHeight={0} in={toggle} timeout={1000}>
      {dateItems.map((key, index) => {
        return (
          <Accordion key={index} spacing={10}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              style={{
                backgroundColor: "#4caf50",
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
              }}
            >
              <Grid container m={1} spacing={5}>
                <Grid item xs={3}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ color: "white" }}
                  >
                    {key.date}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    align="right"
                    style={{ color: "white" }}
                    variant="h6"
                  >
                    {key.name}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            {key.items.map((zac, index) => {
              return (
                <AccordionDetails key={index}>
                  {zac.text}
                  <div style={{ marginLeft: "10px" }}>{zac.gender}</div>
                </AccordionDetails>
              );
            })}
            <div>
              <button onClick={() => addbackToShowList(index)}>Use</button>
              <button onClick={() => deleteSaveIndex(index)}>
                Clear index
              </button>
            </div>
          </Accordion>
        );
      })}
      <button onClick={clearAllhistory}>Clear aLL</button>
    </Collapse>
  );
}

export default Toggler;
