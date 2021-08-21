import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://data.covid19india.org/v4/min/data.min.json'
const URL1 = 'https://data.covid19india.org/v4/min/timeseries.min.json'
//Create Context is uses to create create context provider
export const GlobalState = createContext();


export default function Provider(props) {

    var today = new Date(Date());
    var result = today.toISOString().split('T')[0];

    // state
    const [date, setDate] = useState(result);
  

    const [newDate, setNewDate] = useState(true);
    const [userInfo, setuserInfo] = useState([])
    const [states, setstates] = useState([])
    const [database, setdatabase] = useState([])
    const [newdata, setnewdata] = useState([])
    useEffect(() => {
       const newdatchange = () => {
        if( date !== result ) {
            setNewDate(true)
        }
        else return ''
       }
       newdatchange();
    }, [date])

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

    return (
        <GlobalState.Provider  value={[userInfo, setuserInfo, states, setstates, database, setdatabase, newdata, setnewdata,date,setDate, newDate, setNewDate]}>
            {props.children}  
        </GlobalState.Provider>
    )
}