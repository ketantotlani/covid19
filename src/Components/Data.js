import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Data = () => {
    const [state, setstate] = useState([])
    useEffect(() => {
        function getdata() {
        axios.get('https://data.covid19india.org/v4/min/data.min.json')
        .then(res => setstate(res))
        .catch(err => console.log(err))
    }
    getdata();
    }, [])

    {state.map(item => console.log(item))}
    return (
        <div>
            
        </div>
    )
}

export default Data
