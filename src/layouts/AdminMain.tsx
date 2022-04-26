import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MaterialTable from "material-table";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
// import { Link } from '@material-ui/core';
// import Switch from "@mui/material/Switch";
// import Datatable from "../dataTable/AdminTable";
// import { DataGrid } from "@mui/x-data-grid";

const AdminMain = () => {
  const [data, setData] = useState([]);
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  const columns = [
    // { field: "Id", title: "id" },
    // { field: "Name", title: "name" },
    { title: "ID", field: "tableData.id" },
    { title: "Email", field: "email" },
    { title: "Name", field: "name" },
    { title: "Role", field: "role", searchable: false },
    {
      title: "Active",
      field: "active",
      filtering: false,
      render: (row: { active: boolean }) => (
        <div>
          {/* <Switch
            checked={row.active}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          /> */}
          {row.active ? "Active" : "Deactive"}
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/admin/users")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  return (
    <>
      <Header />
      <div>
        <br />
        <MaterialTable
          title="Employee Data"
          columns={columns}
          data={data}
          actions={[
            {
              icon: () => (
                <Link to={`/admin/edit`}>
                  {" "}
                  <EditIcon />{" "}
                </Link>
              ),
              tooltip: "Edit Employee",
              onClick: (e, data) => console.log(data),
            },
            {
              icon: () => (
                <Link to="/admin/user">
                  {" "}
                  <PersonIcon />{" "}
                </Link>
              ),
              tooltip: "Show Employee",
              onClick: (e, data) => console.log(data),
            },
          ]}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchFieldVariant: "outlined",
            tableLayout: "auto",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20],
            pageSize: 2,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            exportAllData: true,
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </>
  );
};

export default AdminMain;
