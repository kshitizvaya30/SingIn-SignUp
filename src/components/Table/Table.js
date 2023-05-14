import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import UserActions from "./UserActions";
import { Button } from "react-bootstrap";
import PopUpEdit from "./PopUpEdit";
import { Context } from "../../context/AppContext";
import Scrollbars from "react-custom-scrollbars";

function Table() {
  const [rowId, setRowId] = useState();
  const [pageSize, setPageSize] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const { getItems, rowData } = useContext(Context);
  const [row, setRow] = useState(true);

  useEffect(() => {
    if (row) {
      getItems();
      setRow(false);
    }
  }, [row]);

  const columns = [
    {
      field: "item_image",
      headerName: "Avatar",
      width: "100",
      renderCell: (params) => <Avatar src={params.row.photoUrl} />,
      sortable: false,
      filterable: false,
    },
    {
      field: "item_name",
      headerName: "Item Name",
      width: "100",
    },
    {
      field: "selling_price",
      headerName: "Price",
      width: "60",
    },

    {
      field: "item_quantity",
      headerName: "Quantity",
      width: "80",
    },
    {
      field: "item_category",
      headerName: "Category",
      width: "200",
    },
    {
      field: "item_available_from",
      headerName: "Available from",
      width: "200",
      renderCell: (params) =>
        moment(params.row.availability).format("DD-MM-YYYY"),
    },
    {
      field: "edit",
      headerName: "Edit",
      type: "actions",
      renderCell: (params) => (
        <UserActions
          {...{ params, rowId, setRowId,updateModal: setShowModal,updateRow: setRow, action: "edit" }}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "actions",
      renderCell: (params) => (
        <UserActions
          {...{ params, rowId, setRowId,updateModal: setShowModal,updateRow: setRow, action: "delete" }}
        />
      ),
    },

    [rowId],
  ];

  const handleAddRow = () => {
    setShowModal(true);
    setRow(false);
  };

  return (
    <div>
      {showModal && (
        <PopUpEdit
          action="Add Row"
          show={setShowModal}
          updateTable={setRow}
          onHide={() => setShowModal(false)}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "700",
            textAlign: "center",
            flexGrow: 1,
            color: "black",
          }}
        >
          Items
        </Typography>
        <div style={{ marginRight: "20px", marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={() => handleAddRow()}
            sx={{ marginRight: "20px" }}
          >
            Add Row
          </Button>
        </div>
      </Box>
      <Scrollbars style={{ width: "1000px", height: "400px" }}>
        <DataGrid
          columns={columns}
          rows={rowData}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      </Scrollbars>
    </div>
  );
}

export default Table;
