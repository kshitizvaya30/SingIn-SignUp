import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/1.jpg";
import img5 from "../../assets/5.jpg";
import moment from "moment";
import UserActions from "./UserActions";

function Table() {
  const [rowId, setRowId] = useState();
  const [pageSize, setpageSize] = useState(5);

  const columns = [
    {
      field: "photoUrl",
      headerName: "Avatar",
      width: "100",
      renderCell: (params) => <Avatar src={params.row.photoUrl} />,
      sortable: false,
      filterable: false,
    },
    {
      field: "name",
      headerName: "Item Name",
      width: "300",
    },
    {
      field: "price",
      headerName: "Price",
      width: "100",
    },

    {
      field: "quantity",
      headerName: "Quantity",
      width: "100",
    },
    {
      field: "category",
      headerName: "Category",
      width: "300",
    },
    {
      field: "availability",
      headerName: "Available from",
      width: "400",
      renderCell: (params) =>
        moment(params.row.availability).format("DD-MM-YYYY"),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
    },
    [rowId],
  ];

  const rows = [
    {
      id: 1,
      photoUrl: img1,
      name: "kshitiz",
      price: "20000",
      quantity: 2,
      category: "label",
      availability: "2023-05-13T15:30:45.000Z",
    },
    {
      id: 2,
      photoUrl: img2,
      name: "aakash",
      price: "20000",
      quantity: 2,
      category: "label",
      availability: "2023-05-13T15:30:45.000Z",
    },
    {
      id: 3,
      photoUrl: img3,
      name: "bhavi",
      price: "20000",
      quantity: 2,
      category: "label",
      availability: "2023-05-13T15:30:45.000Z",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          height: "400",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        ></Typography>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </div>
  );
}

export default Table;
