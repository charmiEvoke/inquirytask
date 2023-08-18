
import "./Enquiry.css"

import MultipleSelectCheckmarks from "./dropdown"
import { useEffect, useState } from "react";
import SimpleDialogDemo from "./EnquiryPopUp"


import { addItems } from "../src/store/cartSlice";
import { useDispatch ,useSelector} from "react-redux";

import { useNavigate } from 'react-router-dom';

function Enquiry(){


const [travellers,setTravellers] = useState([])
const [budget,setBudget] = useState([])
const [interest,setInterest] = useState([])
const [country,setCountry] = useState([])
const [selectedData,setSelectedData] = useState([])
function getCountry(){
    var countriessAr = ["India","US","canada"]
    setCountry(countriessAr)
}

function getTravellers(){
       var travellersAr = [1,2,3,4,5,6]
       setTravellers(travellersAr)
}
function getInterest(){
    var interestAr = ["Heritage & Culture","Nature & Landscapes","Wildlife & Safaris","Wine & Food","Beaches"]
    setInterest(interestAr)
}
function getBudget(){
    var budgetAr = ['$4000 to $5000','$5000 to $6000','$6000 to $7000','$7000 to $8000','$8000 to $10000','$10000+']
    setBudget(budgetAr)
}

useEffect(function(){
    getTravellers()
   getBudget()
   getInterest()
   getCountry()

},[])

var ar = [travellers,budget,interest,country]


const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedTravellers, setSelectedTravellers] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');
 const [userInfo,setUserInfo] = useState({})
  const navigate = useNavigate();

  const handlepopUpPersonalInfo = (value) => {
    console.log("value",value);
    var userObj = value
    console.log("value",userObj,typeof userObj);
    setUserInfo(userObj);
   
    var tm = Number(selectedTravellers)
    setSelectedTravellers(tm);

    console.log("userInfo",userInfo);
    var obj = {
      "country": selectedCountry,
      "budget": selectedBudget,
      "travellers": tm,
      "interest": selectedInterest
    }
    console.log("obj",obj);
    var resultobj = { ...obj, ...value };
    console.log("resultobj",resultobj);
     addEnquiry(resultobj)
    navigate('../ThankyouPage', { replace: true });
    
  };
  const dispatch = useDispatch()
  const dataStore = useSelector(store=>store.cart.items)
  function addEnquiry(obj){
    console.log(JSON.stringify(obj))
      fetch('http://localhost:4000/api/product/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
        // ,
        // mode: 'no-cors'
      })
      .then(response => response.json())
      .then(result => {

        var finalLength = dataStore + 1
         dispatch(addItems(finalLength))
        // Handle the response
      })
      .catch(error => {
        // Handle errors
      });

  }

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
  };

  const handleTravellersSelect = (value) => {
    setSelectedTravellers(value);
  };

  const handleBudgetSelect = (value) => {
    setSelectedBudget(value);
  };

  const handleInterestSelect = (value) => {
    setSelectedInterest(value);
  };


    return(
        <div className="enquiryContainer">
          <div className="gridContainer">
          
             <div>
               <label className="labelCss"> Add country</label>
                <MultipleSelectCheckmarks arrData={country}  parentCallback={handleCountrySelect}>
                </MultipleSelectCheckmarks>
            </div>
            <div>
               <label className="labelCss"> Add Travellers</label>
                <MultipleSelectCheckmarks arrData={travellers}  parentCallback={handleTravellersSelect}>
                </MultipleSelectCheckmarks>
            </div>
            <div>
               <label className="labelCss"> Add Budget</label>
                <MultipleSelectCheckmarks arrData={budget}  parentCallback={handleBudgetSelect}>
                </MultipleSelectCheckmarks>
            </div>
            <div>
                <label className="labelCss">Add Interest</label>
                <MultipleSelectCheckmarks arrData={interest}  parentCallback={handleInterestSelect}>
                </MultipleSelectCheckmarks>
            </div>
            <SimpleDialogDemo parentCallback = {handlepopUpPersonalInfo}></SimpleDialogDemo>
          </div>
         
        </div>

    )
}
export default Enquiry