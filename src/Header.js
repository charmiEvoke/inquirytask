import "./Header.css"
import Badge from '@mui/material/Badge';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from "axios";
import { useSelector ,useDispatch} from 'react-redux'


import { addItems } from "../src/store/cartSlice";

function Header(){
    const dataStore = useSelector(store=>store.cart.items)
    const [rowDataLength,setrowDataLength] =useState([])
const dispatch = useDispatch()
    useEffect(()=>{
        getEnquiryData()
    },[])
    function getEnquiryData(){
        var url = "http://localhost:4000/api/product/"
        axios.get(url).then(res=>{
            console.log("res",res.data.data);
          
            var resAr = res.data.data.length
            setrowDataLength(resAr)
            dispatch(addItems(resAr))
    })
   }


    return(
        <header>
        <Link to="/AdminPage" >
                <Badge badgeContent={dataStore} color="primary" className="badgeCss" >
            
                <AddShoppingCartIcon color="action" />
                </Badge>
        </Link>
        
        <Link to="/" ><label className="homeLink">Home</label></Link>
        </header>
    )
}

export default Header