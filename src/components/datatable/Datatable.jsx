import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import { fetchEmployeesData, userColumns } from "../../datatablesource2";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";


const Datatable = () => {

  const apiRef = useRef(null);


  const [data, setData] = useState([]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesData = await fetchEmployeesData();
        const flattenedData = flattenEmployeesData(employeesData);
        setData(flattenedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const flattenEmployeesData = (employees) => {
    const flattenedData = [];

    const flattenEmployee = (employee) => {
      flattenedData.push(employee);
      employee.children.forEach((child) => {
        flattenEmployee(child);
      });
    };

    employees.forEach((employee) => {
      flattenEmployee(employee);
    });

    return flattenedData;
  };


  // const handleDownload = () => {
  //   // Convert data to Excel workbook
  //   if (apiRef.current) {
  //     // Get the displayed rows from the DataGrid
  //     const displayedRows = apiRef.current.api.current.getRowModels();

  //     // Map the displayed rows to the selected columns
  //     const dataToDownload = displayedRows.map((row) =>
  //       userColumns.reduce((data, column) => {
  //         data[column.field] = row.data[column.field];
  //         return data;
  //       }, {})
  //     );
  //   const workbook = convertDataToWorkbook(dataToDownload);
  //   const filename = "employees.xlsx";
  //   const excelBlob = workbookToBlob(workbook);
  //   saveAs(excelBlob, filename);
  // };


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // const convertDataToWorkbook = (data) => {
  //   const worksheet = XLSX.utils.json_to_sheet(data, { header: userColumns });
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
  //   return workbook;
  // };




  // const workbookToBlob = (workbook) => {
  //   // Convert workbook to binary representation
  //   const excelBinary = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });

  //   // Convert binary to Blob
  //   const excelBlob = new Blob([s2ab(excelBinary)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  //   return excelBlob;
  // };

  // const s2ab = (s) => {
  //   const buf = new ArrayBuffer(s.length);
  //   const view = new Uint8Array(buf);
  //   for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  //   return buf;
  // };


  const actionColumn = 
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    }

    const columns = [...userColumns, actionColumn];

    const rows = data.map((row) => ({ ...row, id: row.emp_id}));


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employee List
        <Link to="/users/new" className="link">
          Add New
        </Link>
        <button >Download as Excel</button>

      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        apiRef={apiRef}
      />
    </div>
  );
};

export default Datatable;
