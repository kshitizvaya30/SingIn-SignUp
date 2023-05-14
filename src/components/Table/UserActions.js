import { Add, Check, Delete, Edit, Save, Update } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import PopUpEdit from "./PopUpEdit";

function UserActions({
  params,
  rowId,
  setRowId,
  updateModal,
  updateRow,
  action,
}) {
  const [modalShow, setModalShow] = useState(false);

  const handleAction = (action) => {
    if (action === "edit") {
      return (
        <div>
          <div onClick={() => setModalShow(true)}>
            <Edit />
          </div>
          <PopUpEdit
            show={modalShow}
            updateModal={updateModal}
            updateRow={updateRow}
            action="Update Row"
            onHide={() => setModalShow(false)}
            params={params}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div onClick={() => setModalShow(true)}>
            <Delete />
          </div>
          <PopUpEdit
            updateRow={updateRow}
            action="Confirm Delete"
            show={modalShow}
            onHide={() => setModalShow(false)}
            params={params}
          />
        </div>
      );
    }
  };

  return <Box sx={{ m: 1, position: "relative" }}>{handleAction(action)}</Box>;
}

export default UserActions;
