import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const rows = [
  { id: 1, country: 'Snow', budget: 'Jon', travellers: 35,interest:'interst' },
  { id: 2, country: 'Snow', budget: 'Jon', travellers: 45,interest:'interst' },
  

];

export default function DataTable(props) {
    console.log("props",props);
    var colm = props?.tableColumns
    var row = props?.rowData
  return (
    <div style={{ height: 400, width: '100%',background:'#f5f2f2' }}>
      <DataGrid
        rows={row}
        columns={colm}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
}