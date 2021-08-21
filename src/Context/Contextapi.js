import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://data.covid19india.org/v4/min/data.min.json'
const URL1 = 'https://data.covid19india.org/v4/min/timeseries.min.json'
//Create Context uses to create create context provider
export const GlobalState = createContext();


export default function Provider(props) {

    var yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
    var result = yesterday.toISOString().split('T')[0];

   
    // state
    const [date, setDate] = useState(result);
  

    const [newDate, setNewDate] = useState(false);
    const [userInfo, setuserInfo] = useState([])
    const [states, setstates] = useState([])
    const [database, setdatabase] = useState([])
    const [newdata, setnewdata] = useState([])
    // If New date is Not same as Today's Date then setNewDate(True)
    useEffect(() => {
       const newdatchange = () => {
        if( date !== result ) {
            setNewDate(true)
        }
        else return ''
       }
       newdatchange();
    }, [date])


   // Fetching Data after Date Change for Chart
    useEffect(() => {
        const getnewdata = () =>{
            
         axios.get(`${URL1}`)
         .then(res =>  {
            var result2 = Object.keys(res).map(function(key) {
                return [ res[key]];
              });

              var arr1 = Object.values(result2[0])
              setnewdata(arr1)
         })
         .catch(err => console.log(err))
        }
        getnewdata();
    }, [])

    //Context Provider having all components as children (index.js)
    return (
        <GlobalState.Provider  value={[userInfo, setuserInfo, states, setstates, database, setdatabase, newdata, setnewdata,date,setDate, newDate, setNewDate]}>
            {props.children}  
        </GlobalState.Provider>
    )
}