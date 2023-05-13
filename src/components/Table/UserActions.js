import { Check, Edit, Save } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import PopUpEdit from "./PopUpEdit";

function UserActions({ params, rowId, setRowId }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      const result = true;
      if (result) {
        setSuccess(true);
        setRowId(null);
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <div>
        <div className="editBtn" onClick={() => setModalShow(true)}><Edit/></div>
        <PopUpEdit show={modalShow} onHide={() => setModalShow(false)} params={params}/>
      </div>
    </Box>
  );
}

export default UserActions;
