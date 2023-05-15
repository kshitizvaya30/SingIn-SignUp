import { Avatar, Box, makeStyles, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import UserActions from "./UserActions";
import { Button, Container } from "react-bootstrap";
import PopUpEdit from "./PopUpEdit";
import { Context } from "../../context/AppContext";
import Scrollbars from "react-custom-scrollbars";

function Table() {
  const [rowId, setRowId] = useState();
  const [showModal, setShowModal] = useState(false);
  const { getItems, rowData, rowCount, setRowCount } = useContext(Context);
  const [row, setRow] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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
          {...{
            params,
            rowId,
            setRowId,
            updateModal: setShowModal,
            updateRow: setRow,
            action: "edit",
          }}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "actions",
      renderCell: (params) => (
        <UserActions
          {...{
            params,
            rowId,
            setRowId,
            updateModal: setShowModal,
            updateRow: setRow,
            action: "delete",
          }}
        />
      ),
    },

    // [rowId],
  ];

  useEffect(() => {
    if (row) {
      getItems(page, pageSize);
      setRow(false);
      if(rowCount < 0)setRowCount(1);
    }
  }, [row]);

  const handleAddRow = () => {
    setShowModal(true);
    getItems(page, pageSize);
    setRow(true);
  };

  const handlePageSizeChange = (event) => {
    const selectedPageSize = parseInt(event.target.value);
    setPageSize(selectedPageSize);
    setPage(1);
    getItems(1, selectedPageSize);
    setRow(true);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setRow(true);
  };

  return (
    <Container style={{ width: "90%" }}>
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
        <div style={{ marginTop: "5%" }}>
          <Button
            variant="primary"
            onClick={() => handleAddRow()}
            sx={{ marginRight: "20px" }}
          >
            Add Row
          </Button>
        </div>
      </Box>
      <Scrollbars style={{ width: "100%", height: "400px" }}>
        <DataGrid
          columns={columns}
          rows={rowData}
          hideFooterPagination
          hideFooterSelectedRowCount
          autoHeight
          // paginationModel={paginationModel}
          // onPaginationModelChange={handlePageSizeChange}
        />
      </Scrollbars>
      <Box
        pt={3}
        pb={2}
        mb={2}
        display="flex"
        justifyContent="center"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <Container style={{ display:"flex", justifyContent:"center" ,alignItems:"center"}}>
          <Typography
            variant="body2"
            component="span"
            sx={{ marginRight: "10px" }}
          >
            Rows per page:
          </Typography>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            style={{ borderRadius: "2px", borderColor: "#808080" }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </Container>
        <Container>
          <Pagination
            count={rowCount}
            color="primary"
            onChange={(event, newPage) => handlePageChange(newPage)}
            page={page}
          />
        </Container>
      </Box>
    </Container>
  );
}
export default Table;
