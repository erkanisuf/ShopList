import React from "react";
import "./SaveList.css";
import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Save";
import SaveIcon from "@material-ui/icons/Save";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import UndoIcon from "@material-ui/icons/Undo";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import CheckCircleSharpIcon from "@material-ui/icons/CheckCircleSharp";

const SaveButton = withStyles((theme) => ({
  root: {
    color: "#FEFEFE",
    marginLeft: "-25px",
    width: "20px",
    fontSize: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(172, 145, 94)",
    "&:hover": {
      backgroundColor: "#F7BC56",
    },
  },
}))(Button);

const CheckButton = withStyles((theme) => ({
  root: {
    color: "#FEFEFE",
    width: "100px",
    margin: "0 5px",
    fontSize: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(64, 167, 73)",
    "&:hover": {
      backgroundColor: "rgb(83, 211, 94)",
    },
  },
}))(Button);

const UncheckButton = withStyles((theme) => ({
  root: {
    color: "#FEFEFE",
    width: "120px",
    fontSize: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(64, 167, 73)",
    "&:hover": {
      backgroundColor: "rgb(83, 211, 94)",
    },
  },
}))(Button);

const DeleteButton = withStyles((theme) => ({
  root: {
    color: "#FEFEFE",
    width: "100px",
    fontSize: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(167, 64, 64)",
    "&:hover": {
      backgroundColor: "rgb(209, 81, 81)",
    },
  },
}))(Button);

const GreenTypography = withStyles({
  root: {
    color: "#FEFEFE",
    fontWeight: "bold",
  },
})(Typography);

const SaveList = ({
  saverValue,
  setsaverValue,
  saveUpShit,
  checkAll,
  uncheckAll,
  clearAll,
  savesmallText,
}) => {
  return (
    <div className="saveList">
      <div>
        <input
          className="smallInput "
          maxLength="20"
          type="text"
          value={saverValue}
          onChange={(e) => setsaverValue(e.target.value)}
        />

        <SaveButton
          size="small"
          variant="contained"
          onClick={saveUpShit}
          startIcon={<SaveIcon />}
        >
          Save
        </SaveButton>
        <div style={{ margin: "5px" }}>
          <Fade timeout={1000} in={savesmallText.transition}>
            <GreenTypography align="center">
              <CheckCircleSharpIcon />
              {savesmallText.text}
            </GreenTypography>
          </Fade>
        </div>
      </div>
      <div>
        <DeleteButton
          size="small"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={clearAll}
        >
          Clear List
        </DeleteButton>
        <CheckButton
          startIcon={<PlaylistAddCheckIcon />}
          size="small"
          variant="contained"
          onClick={checkAll}
        >
          Check all
        </CheckButton>
        <UncheckButton
          startIcon={<UndoIcon />}
          size="small"
          variant="contained"
          onClick={uncheckAll}
        >
          Uncheck all
        </UncheckButton>
      </div>
    </div>
  );
};

export default SaveList;
