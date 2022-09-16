
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
 
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'city',
    type: 'number',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'city',
  //   headerName: 'city',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1,  Name: 'Jon', age: 35 ,city:'Lahore'},
  { id: 2,  Name: 'Cersei', age: 42,city:'Karachi' },
  { id: 3, Name: 'Jaime', age: 45 ,city:'okara' },
  { id: 4, Name: 'Arya', age: 16,city:'islamabad' },
  { id: 5,  Name: 'Daenerys', age: 13 ,city:'Peshawar' },
  { id: 6, Name: 'Ali', age: 150 ,city:'Uk' },
  { id: 7, Name: 'Ferrara', age: 44 ,city:'USA'},
  { id: 8, Name: 'Rossini', age: 36 ,city:'Dehli'},
  { id: 9, Name: 'Harvey', age: 65 ,city:'FSd' },
  { id: 10, Name: 'Fahad', age: 20 ,city:'Dubia' },
  { id: 11, Name: 'Naveed', age: 21 ,city:'Mumbia' },
  { id: 12, Name: 'Nadeem', age: 24 ,city:'' },
  { id: 13, Name: 'Muskan', age: 30 ,city:'FSd' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <Typography variant="h2" gutterBottom style={{textAlign: "center" ,marginTop:"10px", color:"red"}}>
        User Table
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
