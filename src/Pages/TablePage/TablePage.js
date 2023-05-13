import React from "react";
import Table from "../../components/Table/Table";
import "./TablePage.scss";
import background from "../../assets/backgroundImg.jpg";

function TablePage() {
  return (
    <div className="tableContainer">
      <div className="backgroundImage">
        <img src={background} alt="background" className="imgContainer" />
      </div>
      <div className="heading">Item Data</div>
      <div className="tableData">
        <Table />
      </div>
    </div>
  );
}

export default TablePage;
