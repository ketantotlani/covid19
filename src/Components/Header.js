import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../Context/Contextapi'

export default function Header()   {
    const [userInfo, setuserInfo, states, setstates, database, setdatabase, newdata, setnewdata, date, setDate, newDate, setNewDate]  = useContext(GlobalState);

    
// Header
        return (
             <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand ml-5">COVID-19 INDIA - Daily Report</Link>
                <form className="form-inline">
                    <input onChange={(e) =>  setDate(e.target.value) } value={date} className="form-control" type="date" name="date" id="date" />
                </form>
                
            </nav>
        )
    }

