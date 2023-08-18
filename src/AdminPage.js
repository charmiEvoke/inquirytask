import axios from 'axios'
import TableAdmin from './TableAdmin';
import { useEffect , useState} from 'react';
function AdminPage(){

const [rowData,setRowData] =useState([])
const [pendingState,setpendingState] =useState(false)
    useEffect(()=>{
        getEnquiryData()
    },[])
    function getEnquiryData(){
        setpendingState(true)
        var url = "http://localhost:4000/api/product/"
        axios.get(url).then(res=>{
            setpendingState(false)
        console.log("res",res.data.data);
        var resAr = res.data.data
        setRowData(resAr)
    }).catch = (e)=>{
        setpendingState(false)
        console.log("error",e);
    }
   }



const tableColumns = [
    { field: 'country', headerName: 'Country', width: 70 },
    { field: 'budget', headerName: 'Budget', width: 130 },
    { field: 'travellers', headerName: 'Travellers', width: 90 },
    {
      field: 'interest',
      headerName: 'Interest',
      type: 'number',
      width: 190,
    },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'fullName', headerName: 'FullName', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 90 },
    { field: 'phoneNumber', headerName: 'PhoneNumber', width: 130 },
    { field: 'timeLine', headerName: 'TimeLine', width: 90 },
    { field: 'tripDuration', headerName: 'TripDuration', width: 130 },
    { field: 'tripStatus', headerName: 'TripStatus', width: 130 }
   
  ];

    return(
        <div>
            <h4>Admin Page</h4>
            {pendingState != true? <TableAdmin tableColumns={tableColumns} rowData={rowData}></TableAdmin>:'Data comming soon...'}
        </div>
    )
}

export default AdminPage