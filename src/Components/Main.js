import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { Chart } from "react-google-charts";
import {country} from './StateList'
import {GlobalState} from '../Context/Contextapi'


//URL For Fetching
const URL = 'https://data.covid19india.org/v4/min/data.min.json'


export default function Users() {
    // Usage Of Context
    const [userInfo, setuserInfo, states, setstates, database, setdatabase, newdata, setnewdata, date, setDate, newDate, setNewDate]  = useContext(GlobalState);
    

    // Fetching Initial Data From API Using Axios
    useEffect(() => {
        const fetchData = () => {
            var statenames = country.map(country => country.value)
            setstates(statenames)
            axios.get(`${URL}`)
            .then(res => {
                // console.log(res.data);
                var result = Object.keys(res.data).map((key) => [(key), res.data[key]]);
                var result2 = Object.keys(res).map(function(key) {
                    return [ res[key]];
                  });
    
                  var arr1 = Object.values(result2[0])
                //   var arrmain = Object.values(arr1)
                var result1 = Object.values(res.data);
                setuserInfo(arr1)
                var arr2 = this.state.userInfo.map(item =>Object.entries(item).map(item2 => item2[1]).map(item3 => item3.delta))
                var arr3 = arr2.map(stat => stat)
                console.log(arr3);
                setdatabase(arr3)
            })
            .catch(err => console.log(err.message));
        }
        fetchData();
    }, [])

    // componentDidMount() {
       
    // }
    
    
    
    
    // render() {
        // this.state.userInfo.map(states => this.setState({confirmed: states}))

        // Data for State List Visualization Chart
        // const data1 = [ 
        //     ['State:','Tested', 'Confirmed','Recovered'],
            
        //     [(country[0].label)? country[0].label: '', userInfo.map(state => (state.AN.delta.tested) ? state.AN.delta.tested : 0 )[0], userInfo.map(state => (state.AN.delta.confirmed) ? state.AN.delta.confirmed : 0)[0],userInfo.map(state => (state.AN.delta.recovered) ? state.AN.delta.recovered : 0 )[0]],
        //     [(country[1].label)? country[1].label: '', userInfo.map(state => (state.AP.delta.tested) ? state.AP.delta.tested : 0 )[0], userInfo.map(state => (state.AP.delta.confirmed) ? state.AP.delta.confirmed : 0)[0],userInfo.map(state => (state.AP.delta.recovered) ? state.AP.delta.recovered : 0 )[0]],
        //     [(country[2].label)? country[2].label: '', userInfo.map(state => (state.AR.delta.tested) ? state.AR.delta.tested : 0 )[0], userInfo.map(state => (state.AR.delta.confirmed) ? state.AR.delta.confirmed : 0)[0],userInfo.map(state => (state.AR.delta.recovered) ? state.AR.delta.recovered : 0 )[0]],
        //     [(country[3].label)? country[3].label: '', userInfo.map(state => (state.AS.delta.tested) ? state.AS.delta.tested : 0 )[0], userInfo.map(state => (state.AS.delta.confirmed) ? state.AS.delta.confirmed : 0)[0],userInfo.map(state => (state.AS.delta.recovered) ? state.AS.delta.recovered : 0 )[0]],
        //     [(country[4].label)? country[4].label: '', userInfo.map(state => (state.BR.delta.tested) ? state.BR.delta.tested : 0 )[0], userInfo.map(state => (state.BR.delta.confirmed) ? state.BR.delta.confirmed : 0)[0],userInfo.map(state => (state.BR.delta.recovered) ? state.BR.delta.recovered : 0 )[0]],
        //     [(country[5].label)? country[5].label: '', userInfo.map(state => (state.CH.delta.tested) ? state.CH.delta.tested : 0 )[0], userInfo.map(state => (state.CH.delta.confirmed) ? state.CH.delta.confirmed : 0)[0],userInfo.map(state => (state.CH.delta.recovered) ? state.CH.delta.recovered : 0 )[0]],
        //     [(country[6].label)? country[6].label: '', userInfo.map(state => (state.CT.delta.tested) ? state.CT.delta.tested : 0 )[0], userInfo.map(state => (state.CT.delta.confirmed) ? state.CT.delta.confirmed : 0)[0],userInfo.map(state => (state.CT.delta.recovered) ? state.CT.delta.recovered : 0 )[0]],
        //     [(country[7].label)? country[7].label: '', userInfo.map(state => (state.DL.delta.tested) ? state.DL.delta.tested : 0 )[0], userInfo.map(state => (state.DL.delta.confirmed) ? state.DL.delta.confirmed : 0)[0],userInfo.map(state => (state.DL.delta.recovered) ? state.DL.delta.recovered : 0 )[0]],
        //     [(country[9].label)? country[9].label: '', userInfo.map(state => (state.GA.delta.tested) ? state.GA.delta.tested : 0 )[0], userInfo.map(state => (state.GA.delta.confirmed) ? state.GA.delta.confirmed : 0)[0],userInfo.map(state => (state.GA.delta.recovered) ? state.GA.delta.recovered : 0 )[0]],
        //     [(country[10].label)? country[10].label: '', userInfo.map(state => (state.GJ.delta.tested) ? state.GJ.delta.tested : 0 )[0], userInfo.map(state => (state.GJ.delta.confirmed) ? state.GJ.delta.confirmed : 0)[0],userInfo.map(state => (state.GJ.delta.recovered) ? state.GJ.delta.recovered : 0 )[0]],
        //     [(country[11].label)? country[11].label: '', userInfo.map(state => (state.HP.delta.tested) ? state.HP.delta.tested : 0 )[0], userInfo.map(state => (state.HP.delta.confirmed) ? state.HP.delta.confirmed : 0)[0],userInfo.map(state => (state.HP.delta.recovered) ? state.HP.delta.recovered : 0 )[0]],
        //     [(country[12].label)? country[12].label: '', userInfo.map(state => (state.HR.delta.tested) ? state.HR.delta.tested : 0 )[0], userInfo.map(state => (state.HR.delta.confirmed) ? state.HR.delta.confirmed : 0)[0],userInfo.map(state => (state.HR.delta.recovered) ? state.HR.delta.recovered : 0 )[0]],
        //     // [(country[13].label)? country[10].label: '', this.state.userInfo.map(state => (state.JH.delta.tested) ? state.JH.delta.tested : 0 )[0], this.state.userInfo.map(state => (state.JH.delta.confirmed) ? state.JH.delta.confirmed : 0)[0],this.state.userInfo.map(state => (state.JH.delta.recovered) ? state.JH.delta.recovered : 0 )[0]],
        //     [(country[14].label)? country[14].label: '', userInfo.map(state => (state.JK.delta.tested) ? state.JK.delta.tested : 0 )[0], userInfo.map(state => (state.JK.delta.confirmed) ? state.JK.delta.confirmed : 0)[0],userInfo.map(state => (state.JK.delta.recovered) ? state.JK.delta.recovered : 0 )[0]],
        //     [(country[15].label)? country[15].label: '', userInfo.map(state => (state.KA.delta.tested) ? state.KA.delta.tested : 0 )[0], userInfo.map(state => (state.KA.delta.confirmed) ? state.KA.delta.confirmed : 0)[0],userInfo.map(state => (state.KA.delta.recovered) ? state.KA.delta.recovered : 0 )[0]],
        //     [(country[16].label)? country[16].label: '', userInfo.map(state => (state.KL.delta.tested) ? state.KL.delta.tested : 0 )[0], userInfo.map(state => (state.KL.delta.confirmed) ? state.KL.delta.confirmed : 0)[0],userInfo.map(state => (state.KL.delta.recovered) ? state.KL.delta.recovered : 0 )[0]],
        //     [(country[17].label)? country[17].label: '', userInfo.map(state => (state.LD.delta.tested) ? state.LD.delta.tested : 0 )[0], userInfo.map(state => (state.LD.delta.confirmed) ? state.LD.delta.confirmed : 0)[0],userInfo.map(state => (state.LD.delta.recovered) ? state.LD.delta.recovered : 0 )[0]],
        //     [(country[18].label)? country[18].label: '', userInfo.map(state => (state.MH.delta.tested) ? state.MH.delta.tested : 0 )[0], userInfo.map(state => (state.MH.delta.confirmed) ? state.MH.delta.confirmed : 0)[0],userInfo.map(state => (state.MH.delta.recovered) ? state.MH.delta.recovered : 0 )[0]],
        //     [(country[19].label)? country[19].label: '', userInfo.map(state => (state.ML.delta.tested) ? state.ML.delta.tested : 0 )[0], userInfo.map(state => (state.ML.delta.confirmed) ? state.ML.delta.confirmed : 0)[0],userInfo.map(state => (state.ML.delta.recovered) ? state.ML.delta.recovered : 0 )[0]],
        //     [(country[20].label)? country[20].label: '', userInfo.map(state => (state.MN.delta.tested) ? state.MN.delta.tested : 0 )[0], userInfo.map(state => (state.MN.delta.confirmed) ? state.MN.delta.confirmed : 0)[0],userInfo.map(state => (state.MN.delta.recovered) ? state.MN.delta.recovered : 0 )[0]],
        //     [(country[21].label)? country[21].label: '', userInfo.map(state => (state.MP.delta.tested) ? state.MP.delta.tested : 0 )[0], userInfo.map(state => (state.MP.delta.confirmed) ? state.MP.delta.confirmed : 0)[0],userInfo.map(state => (state.MP.delta.recovered) ? state.MP.delta.recovered : 0 )[0]],
        //     [(country[22].label)? country[22].label: '', userInfo.map(state => (state.MZ.delta.tested) ? state.MZ.delta.tested : 0 )[0], userInfo.map(state => (state.MZ.delta.confirmed) ? state.MZ.delta.confirmed : 0)[0],userInfo.map(state => (state.MZ.delta.recovered) ? state.MZ.delta.recovered : 0 )[0]],
        //     [(country[23].label)? country[23].label: '', userInfo.map(state => (state.NL.delta.tested) ? state.NL.delta.tested : 0 )[0], userInfo.map(state => (state.NL.delta.confirmed) ? state.NL.delta.confirmed : 0)[0],userInfo.map(state => (state.NL.delta.recovered) ? state.NL.delta.recovered : 0 )[0]],
        //     [(country[24].label)? country[24].label: '', userInfo.map(state => (state.OR.delta.tested) ? state.OR.delta.tested : 0 )[0], userInfo.map(state => (state.OR.delta.confirmed) ? state.OR.delta.confirmed : 0)[0],userInfo.map(state => (state.OR.delta.recovered) ? state.OR.delta.recovered : 0 )[0]],
        //     [(country[25].label)? country[25].label: '', userInfo.map(state => (state.PB.delta.tested) ? state.PB.delta.tested : 0 )[0], userInfo.map(state => (state.PB.delta.confirmed) ? state.PB.delta.confirmed : 0)[0],userInfo.map(state => (state.PB.delta.recovered) ? state.PB.delta.recovered : 0 )[0]],
        //     [(country[26].label)? country[26].label: '', userInfo.map(state => (state.PY.delta.tested) ? state.PY.delta.tested : 0 )[0], userInfo.map(state => (state.PY.delta.confirmed) ? state.PY.delta.confirmed : 0)[0],userInfo.map(state => (state.PY.delta.recovered) ? state.PY.delta.recovered : 0 )[0]],
        //     [(country[27].label)? country[27].label: '', userInfo.map(state => (state.RJ.delta.tested) ? state.RJ.delta.tested : 0 )[0], userInfo.map(state => (state.RJ.delta.confirmed) ? state.RJ.delta.confirmed : 0)[0],userInfo.map(state => (state.RJ.delta.recovered) ? state.RJ.delta.recovered : 0 )[0]],
        //     [(country[28].label)? country[28].label: '', userInfo.map(state => (state.SK.delta.tested) ? state.SK.delta.tested : 0 )[0], userInfo.map(state => (state.SK.delta.confirmed) ? state.SK.delta.confirmed : 0)[0],userInfo.map(state => (state.SK.delta.recovered) ? state.SK.delta.recovered : 0 )[0]],
        //     [(country[29].label)? country[29].label: '', userInfo.map(state => (state.TG.delta.tested) ? state.TG.delta.tested : 0 )[0], userInfo.map(state => (state.TG.delta.confirmed) ? state.TG.delta.confirmed : 0)[0],userInfo.map(state => (state.TG.delta.recovered) ? state.TG.delta.recovered : 0 )[0]],
        //     [(country[30].label)? country[30].label: '', userInfo.map(state => (state.TN.delta.tested) ? state.TN.delta.tested : 0 )[0], userInfo.map(state => (state.TN.delta.confirmed) ? state.TN.delta.confirmed : 0)[0],userInfo.map(state => (state.TN.delta.recovered) ? state.TN.delta.recovered : 0 )[0]],
        //     [(country[31].label)? country[31].label: '', userInfo.map(state => (state.TR.delta.tested) ? state.TR.delta.tested : 0 )[0], userInfo.map(state => (state.TR.delta.confirmed) ? state.TR.delta.confirmed : 0)[0],userInfo.map(state => (state.TR.delta.recovered) ? state.TR.delta.recovered : 0 )[0]],
        //     // [country[32].label, this.state.userInfo.map(state => (state.TT.delta7.tested) ? state.TT.delta7.tested : 0 )[0], this.state.userInfo.map(state => (state.TT.delta7.confirmed) ? state.TT.delta7.confirmed : 0)[0],this.state.userInfo.map(state => (state.TT.delta7.recovered) ? state.TT.delta7.recovered : 0 )[0]],
        //     [(country[33].label)? country[33].label: '', userInfo.map(state => (state.UP.delta.tested) ? state.UP.delta.tested : 0 )[0], userInfo.map(state => (state.UP.delta.confirmed) ? state.UP.delta.confirmed : 0)[0],userInfo.map(state => (state.UP.delta.recovered) ? state.UP.delta.recovered : 0 )[0]],
        //     [(country[34].label)? country[34].label: '', userInfo.map(state => (state.UT.delta.tested) ? state.UT.delta.tested : 0 )[0], userInfo.map(state => (state.UT.delta.confirmed) ? state.UT.delta.confirmed : 0)[0],userInfo.map(state => (state.UT.delta.recovered) ? state.UT.delta.recovered : 0 )[0]],
        //     [(country[35].label)? country[35].label: '', userInfo.map(state => (state.WB.delta.tested) ? state.WB.delta.tested : 0 )[0], userInfo.map(state => (state.WB.delta.confirmed) ? state.WB.delta.confirmed : 0)[0],userInfo.map(state => (state.WB.delta.recovered) ? state.WB.delta.recovered : 0 )[0]],
            
            
        // ]
        const data2 = [ 
            ['State:','Dose 1', 'Dose 2'],
            
            [(country[0].label)? country[0].label: '', newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.vaccinated1 : 0 )[0],  newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.vaccinated2 : 0 )[0]],
            [(country[1].label)? country[1].label: '', newdata.map(state => (state.AP.dates[`${date}`]) ? state.AP.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.AP.dates[`${date}`]) ? state.AP.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[2].label)? country[2].label: '', newdata.map(state => (state.AR.dates[`${date}`]) ? state.AR.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.AR.dates[`${date}`]) ? state.AR.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[3].label)? country[3].label: '', newdata.map(state => (state.AS.dates[`${date}`]) ? state.AS.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.AS.dates[`${date}`]) ? state.AS.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[4].label)? country[4].label: '', newdata.map(state => (state.BR.dates[`${date}`]) ? state.BR.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.BR.dates[`${date}`]) ? state.BR.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[5].label)? country[5].label: '', newdata.map(state => (state.CH.dates[`${date}`]) ? state.CH.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.CH.dates[`${date}`]) ? state.CH.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[6].label)? country[6].label: '', newdata.map(state => (state.CT.dates[`${date}`]) ? state.CT.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.CT.dates[`${date}`]) ? state.CT.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[7].label)? country[7].label: '', newdata.map(state => (state.DL.dates[`${date}`]) ? state.DL.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.DL.dates[`${date}`]) ? state.DL.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[9].label)? country[9].label: '', newdata.map(state => (state.GA.dates[`${date}`]) ? state.GA.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.GA.dates[`${date}`]) ? state.GA.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[10].label)? country[10].label: '', newdata.map(state => (state.GJ.dates[`${date}`]) ? state.GJ.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.GJ.dates[`${date}`]) ? state.GJ.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[11].label)? country[11].label: '', newdata.map(state => (state.HP.dates[`${date}`]) ? state.HP.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.HP.dates[`${date}`]) ? state.HP.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[12].label)? country[12].label: '', newdata.map(state => (state.HR.dates[`${date}`]) ? state.HR.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.HR.dates[`${date}`]) ? state.HR.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            // [(country[13].label)? country[10].label: '', this.state.newdata.map(state => (state.JH.delta.tested) ? state.JH.delta.tested : 0 )[0], this.state.newdata.map(state => (state.JH.delta.confirmed) ? state.JH.delta.confirmed : 0)[0],this.state.newdata.map(state => (state.JH.delta.recovered) ? state.JH.delta.recovered : 0 )[0]],
            [(country[14].label)? country[14].label: '', newdata.map(state => (state.JK.dates[`${date}`]) ? state.JK.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.JK.dates[`${date}`]) ? state.JK.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[15].label)? country[15].label: '', newdata.map(state => (state.KA.dates[`${date}`]) ? state.KA.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.KA.dates[`${date}`]) ? state.KA.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[16].label)? country[16].label: '', newdata.map(state => (state.KL.dates[`${date}`]) ? state.KL.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.KL.dates[`${date}`]) ? state.KL.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[17].label)? country[17].label: '', newdata.map(state => (state.LD.dates[`${date}`]) ? state.LD.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.LD.dates[`${date}`]) ? state.LD.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[18].label)? country[18].label: '', newdata.map(state => (state.MH.dates[`${date}`]) ? state.MH.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.MH.dates[`${date}`]) ? state.MH.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[19].label)? country[19].label: '', newdata.map(state => (state.ML.dates[`${date}`]) ? state.ML.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.ML.dates[`${date}`]) ? state.ML.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[20].label)? country[20].label: '', newdata.map(state => (state.MN.dates[`${date}`]) ? state.MN.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.MN.dates[`${date}`]) ? state.MN.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[21].label)? country[21].label: '', newdata.map(state => (state.MP.dates[`${date}`]) ? state.MP.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.MP.dates[`${date}`]) ? state.MP.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[22].label)? country[22].label: '', newdata.map(state => (state.MZ.dates[`${date}`]) ? state.MZ.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.MZ.dates[`${date}`]) ? state.MZ.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[23].label)? country[23].label: '', newdata.map(state => (state.NL.dates[`${date}`]) ? state.NL.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.NL.dates[`${date}`]) ? state.NL.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[24].label)? country[24].label: '', newdata.map(state => (state.OR.dates[`${date}`]) ? state.OR.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.OR.dates[`${date}`]) ? state.OR.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[25].label)? country[25].label: '', newdata.map(state => (state.PB.dates[`${date}`]) ? state.PB.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.PB.dates[`${date}`]) ? state.PB.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[26].label)? country[26].label: '', newdata.map(state => (state.PY.dates[`${date}`]) ? state.PY.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.PY.dates[`${date}`]) ? state.PY.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[27].label)? country[27].label: '', newdata.map(state => (state.RJ.dates[`${date}`]) ? state.RJ.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.RJ.dates[`${date}`]) ? state.RJ.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[28].label)? country[28].label: '', newdata.map(state => (state.SK.dates[`${date}`]) ? state.SK.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.SK.dates[`${date}`]) ? state.SK.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[29].label)? country[29].label: '', newdata.map(state => (state.TG.dates[`${date}`]) ? state.TG.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.TG.dates[`${date}`]) ? state.TG.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[30].label)? country[30].label: '', newdata.map(state => (state.TN.dates[`${date}`]) ? state.TN.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.TN.dates[`${date}`]) ? state.TN.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[31].label)? country[31].label: '', newdata.map(state => (state.TR.dates[`${date}`]) ? state.TR.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.TR.dates[`${date}`]) ? state.TR.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            // [country[32].label, this.state.newdata.map(state => (state.TT.delta7.tested) ? state.TT.delta7.tested : 0 )[0], this.state.newdata.map(state => (state.TT.delta7.confirmed) ? state.TT.delta7.confirmed : 0)[0],this.state.newdata.map(state => (state.TT.delta7.recovered) ? state.TT.delta7.recovered : 0 )[0]],
            [(country[33].label)? country[33].label: '', newdata.map(state => (state.UP.dates[`${date}`]) ? state.UP.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.UP.dates[`${date}`]) ? state.UP.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[34].label)? country[34].label: '', newdata.map(state => (state.UT.dates[`${date}`]) ? state.UT.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.UT.dates[`${date}`]) ? state.UT.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            [(country[35].label)? country[35].label: '', newdata.map(state => (state.WB.dates[`${date}`]) ? state.WB.dates[`${date}`].delta.vaccinated1 : 0 )[0], newdata.map(state => (state.WB.dates[`${date}`]) ? state.WB.dates[`${date}`].delta.vaccinated2 : 0)[0]],
            
            
        ]
        // Data For Vaccination Chart
        // const data2 = [
        //     ['State', 'Vaccine 1st Dose', 'Vaccine 2nd Dose'],
        //     [(country[0].label)? country[0].label: '', newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.vaccinated1 : 0 )[0],  newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta : 0 )[0], newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta : 0 )[0]],
        //     [country[1].label, userInfo.map(state => (Object.entries(state.AP.delta7)) ? Object.entries(state.AP.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.AP.delta7)) ? Object.entries(state.AP.delta7)[4] : 0 )[0]],
        //     [country[2].label, userInfo.map(state => (Object.entries(state.AR.delta7)) ? Object.entries(state.AR.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.AR.delta7)) ? Object.entries(state.AR.delta7)[4] : 0 )[0]],
        //     [country[3].label, userInfo.map(state => (Object.entries(state.AS.delta7)) ? Object.entries(state.AS.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.AS.delta7)) ? Object.entries(state.AS.delta7)[4] : 0 )[0]],
        //     [country[4].label, userInfo.map(state => (Object.entries(state.BR.delta7)) ? Object.entries(state.BR.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.BR.delta7)) ? Object.entries(state.BR.delta7)[4] : 0 )[0]],
        //     [country[5].label, userInfo.map(state => (Object.entries(state.CH.delta7)) ? Object.entries(state.CH.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.CH.delta7)) ? Object.entries(state.CH.delta7)[4] : 0 )[0]],
        //     [country[6].label, userInfo.map(state => (Object.entries(state.CT.delta7)) ? Object.entries(state.CT.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.CT.delta7)) ? Object.entries(state.CT.delta7)[4] : 0 )[0]],
        //     [country[7].label, userInfo.map(state => (Object.entries(state.DL.delta7)) ? Object.entries(state.DL.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.DL.delta7)) ? Object.entries(state.DL.delta7)[4] : 0 )[0]],
        //     // [country[8].label, this.state.userInfo.map(state => (Object.entries(state.DN.delta7)) ? Object.entries(state.DN.delta7)[3][1] : 0 )[0],  this.state.userInfo.map(state => (Object.entries(state.DN.delta7)) ? Object.entries(state.DN.delta7)[4][1] : 0 )[0]],
        //     [country[9].label, userInfo.map(state => (Object.entries(state.GA.delta7)) ? Object.entries(state.GA.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.GA.delta7)) ? Object.entries(state.GA.delta7)[4] : 0 )[0]],
        //     [country[10].label, userInfo.map(state => (Object.entries(state.GJ.delta7)) ? Object.entries(state.GJ.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.GJ.delta7)) ? Object.entries(state.GJ.delta7)[4] : 0 )[0]],
        //     [country[11].label, userInfo.map(state => (Object.entries(state.HP.delta7)) ? Object.entries(state.HP.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.HP.delta7)) ? Object.entries(state.HP.delta7)[4] : 0 )[0]],
        //     [country[12].label, userInfo.map(state => (Object.entries(state.GA.delta7)) ? Object.entries(state.HR.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.HR.delta7)) ? Object.entries(state.HR.delta7)[4] : 0 )[0]],
        //     [country[13].label, userInfo.map(state => (Object.entries(state.JH.delta7)) ? Object.entries(state.JH.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.JH.delta7)) ? Object.entries(state.JH.delta7)[4] : 0 )[0]],
        //     [country[14].label, userInfo.map(state => (Object.entries(state.JK.delta7)) ? Object.entries(state.JK.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.JK.delta7)) ? Object.entries(state.JK.delta7)[4] : 0 )[0]],
        //     [country[15].label, userInfo.map(state => (Object.entries(state.KA.delta7)) ? Object.entries(state.KA.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.KA.delta7)) ? Object.entries(state.KA.delta7)[4] : 0 )[0]],
        //     [country[16].label, userInfo.map(state => (Object.entries(state.KL.delta7)) ? Object.entries(state.KL.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.KL.delta7)) ? Object.entries(state.KL.delta7)[4] : 0 )[0]],
        //     [country[17].label, userInfo.map(state => (Object.entries(state.LD.delta7)) ? Object.entries(state.LD.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.LD.delta7)) ? Object.entries(state.LD.delta7)[4] : 0 )[0]],
        //     [country[18].label, userInfo.map(state => (Object.entries(state.MH.delta7)) ? Object.entries(state.MH.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.MH.delta7)) ? Object.entries(state.MH.delta7)[4] : 0 )[0]],
        //     [country[19].label, userInfo.map(state => (Object.entries(state.ML.delta7)) ? Object.entries(state.ML.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.ML.delta7)) ? Object.entries(state.ML.delta7)[4] : 0 )[0]],
        //     [country[20].label, userInfo.map(state => (Object.entries(state.MN.delta7)) ? Object.entries(state.MN.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.MN.delta7)) ? Object.entries(state.MN.delta7)[4] : 0 )[0]],
        //     [country[21].label, userInfo.map(state => (Object.entries(state.MP.delta7)) ? Object.entries(state.MP.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.MP.delta7)) ? Object.entries(state.MP.delta7)[4] : 0 )[0]],
        //     [country[22].label, userInfo.map(state => (Object.entries(state.MZ.delta7)) ? Object.entries(state.MZ.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.MZ.delta7)) ? Object.entries(state.MZ.delta7)[4] : 0 )[0]],
        //     [country[23].label, userInfo.map(state => (Object.entries(state.NL.delta7)) ? Object.entries(state.NL.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.NL.delta7)) ? Object.entries(state.NL.delta7)[4] : 0 )[0]],
        //     [country[24].label, userInfo.map(state => (Object.entries(state.OR.delta7)) ? Object.entries(state.OR.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.OR.delta7)) ? Object.entries(state.OR.delta7)[4] : 0 )[0]],
        //     [country[25].label, userInfo.map(state => (Object.entries(state.PB.delta7)) ? Object.entries(state.PB.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.PB.delta7)) ? Object.entries(state.PB.delta7)[4] : 0 )[0]],
        //     [country[26].label, userInfo.map(state => (Object.entries(state.PY.delta7)) ? Object.entries(state.PY.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.PY.delta7)) ? Object.entries(state.PY.delta7)[4] : 0 )[0]],
        //     [country[27].label, userInfo.map(state => (Object.entries(state.RJ.delta7)) ? Object.entries(state.RJ.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.RJ.delta7)) ? Object.entries(state.RJ.delta7)[4] : 0 )[0]],
        //     [country[28].label, userInfo.map(state => (Object.entries(state.SK.delta7)) ? Object.entries(state.SK.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.SK.delta7)) ? Object.entries(state.SK.delta7)[4] : 0 )[0]],
        //     [country[29].label, userInfo.map(state => (Object.entries(state.TG.delta7)) ? Object.entries(state.TG.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.TG.delta7)) ? Object.entries(state.TG.delta7)[4] : 0 )[0]],
        //     [country[30].label, userInfo.map(state => (Object.entries(state.TN.delta7)) ? Object.entries(state.TN.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.TN.delta7)) ? Object.entries(state.TN.delta7)[4] : 0 )[0]],
        //     [country[31].label, userInfo.map(state => (Object.entries(state.TR.delta7)) ? Object.entries(state.TR.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.TR.delta7)) ? Object.entries(state.TR.delta7)[4] : 0 )[0]],
        //     // [country[32].label, this.state.userInfo.map(state => (Object.entries(state.TT.delta7)) ? Object.entries(state.TT.delta7)[3][1] : 0 )[0],  this.state.userInfo.map(state => (Object.entries(state.TT.delta7)) ? Object.entries(state.TT.delta7)[4][1] : 0 )[0]],
        //     [country[33].label, userInfo.map(state => (Object.entries(state.UP.delta7)) ? Object.entries(state.UP.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.UP.delta7)) ? Object.entries(state.UP.delta7)[4] : 0 )[0]],
        //     [country[34].label, userInfo.map(state => (Object.entries(state.UT.delta7)) ? Object.entries(state.UT.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.UT.delta7)) ? Object.entries(state.UT.delta7)[4] : 0 )[0]],
        //     [country[35].label, userInfo.map(state => (Object.entries(state.WB.delta7)) ? Object.entries(state.WB.delta7)[3] : 0 )[0],  userInfo.map(state => (Object.entries(state.WB.delta7)) ? Object.entries(state.WB.delta7)[4] : 0 )[0]],
            
        // ]
        const newcountry =() =>{
            var index = country.indexOf(2);
            console.log(index);
            country.splice(index, 1)
            
        }
        const data5 = newdata.map(state => state.GJ.dates); 
        // console.log(data5);
        // console.log(date);
        const data6 = data5.map(item=> item )

        const data7 = Object.values(data6)
        
        const data8 = data7.map(ele =>ele[`${date}`]);
        console.log(data8);
        // Data for Date Picker Triggered onDataChange 
        const data3 = [ 
            ['State:','Tested', 'Confirmed','Recovered'],
            
            [(country[0].label)? country[0].label: '', newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.tested : 0 )[0],  newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.confirmed : 0 )[0], newdata.map(state => (state.AN.dates[`${date}`]) ? state.AN.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[1].label)? country[1].label: '', newdata.map(state => (state.AP.dates[`${date}`]) ? state.AP.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.AP.dates[`${date}`]) ? state.AP.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.AP.dates[`${date}`]) ? state.AP.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[2].label)? country[2].label: '', newdata.map(state => (state.AR.dates[`${date}`]) ? state.AR.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.AR.dates[`${date}`]) ? state.AR.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.AR.dates[`${date}`]) ? state.AR.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[3].label)? country[3].label: '', newdata.map(state => (state.AS.dates[`${date}`]) ? state.AS.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.AS.dates[`${date}`]) ? state.AS.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.AS.dates[`${date}`]) ? state.AS.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[4].label)? country[4].label: '', newdata.map(state => (state.BR.dates[`${date}`]) ? state.BR.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.BR.dates[`${date}`]) ? state.BR.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.BR.dates[`${date}`]) ? state.BR.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[5].label)? country[5].label: '', newdata.map(state => (state.CH.dates[`${date}`]) ? state.CH.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.CH.dates[`${date}`]) ? state.CH.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.CH.dates[`${date}`]) ? state.CH.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[6].label)? country[6].label: '', newdata.map(state => (state.CT.dates[`${date}`]) ? state.CT.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.CT.dates[`${date}`]) ? state.CT.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.CT.dates[`${date}`]) ? state.CT.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[7].label)? country[7].label: '', newdata.map(state => (state.DL.dates[`${date}`]) ? state.DL.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.DL.dates[`${date}`]) ? state.DL.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.DL.dates[`${date}`]) ? state.DL.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[9].label)? country[9].label: '', newdata.map(state => (state.GA.dates[`${date}`]) ? state.GA.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.GA.dates[`${date}`]) ? state.GA.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.GA.dates[`${date}`]) ? state.GA.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[10].label)? country[10].label: '', newdata.map(state => (state.GJ.dates[`${date}`]) ? state.GJ.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.GJ.dates[`${date}`]) ? state.GJ.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.GJ.dates[`${date}`]) ? state.GJ.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[11].label)? country[11].label: '', newdata.map(state => (state.HP.dates[`${date}`]) ? state.HP.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.HP.dates[`${date}`]) ? state.HP.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.HP.dates[`${date}`]) ? state.HP.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[12].label)? country[12].label: '', newdata.map(state => (state.HR.dates[`${date}`]) ? state.HR.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.HR.dates[`${date}`]) ? state.HR.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.HR.dates[`${date}`]) ? state.HR.dates[`${date}`].delta.recovered : 0 )[0]],
            // [(country[13].label)? country[10].label: '', this.state.newdata.map(state => (state.JH.delta.tested) ? state.JH.delta.tested : 0 )[0], this.state.newdata.map(state => (state.JH.delta.confirmed) ? state.JH.delta.confirmed : 0)[0],this.state.newdata.map(state => (state.JH.delta.recovered) ? state.JH.delta.recovered : 0 )[0]],
            [(country[14].label)? country[14].label: '', newdata.map(state => (state.JK.dates[`${date}`]) ? state.JK.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.JK.dates[`${date}`]) ? state.JK.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.JK.dates[`${date}`]) ? state.JK.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[15].label)? country[15].label: '', newdata.map(state => (state.KA.dates[`${date}`]) ? state.KA.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.KA.dates[`${date}`]) ? state.KA.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.KA.dates[`${date}`]) ? state.KA.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[16].label)? country[16].label: '', newdata.map(state => (state.KL.dates[`${date}`]) ? state.KL.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.KL.dates[`${date}`]) ? state.KL.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.KL.dates[`${date}`]) ? state.KL.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[17].label)? country[17].label: '', newdata.map(state => (state.LD.dates[`${date}`]) ? state.LD.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.LD.dates[`${date}`]) ? state.LD.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.LD.dates[`${date}`]) ? state.LD.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[18].label)? country[18].label: '', newdata.map(state => (state.MH.dates[`${date}`]) ? state.MH.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.MH.dates[`${date}`]) ? state.MH.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.MH.dates[`${date}`]) ? state.MH.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[19].label)? country[19].label: '', newdata.map(state => (state.ML.dates[`${date}`]) ? state.ML.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.ML.dates[`${date}`]) ? state.ML.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.ML.dates[`${date}`]) ? state.ML.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[20].label)? country[20].label: '', newdata.map(state => (state.MN.dates[`${date}`]) ? state.MN.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.MN.dates[`${date}`]) ? state.MN.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.MN.dates[`${date}`]) ? state.MN.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[21].label)? country[21].label: '', newdata.map(state => (state.MP.dates[`${date}`]) ? state.MP.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.MP.dates[`${date}`]) ? state.MP.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.MP.dates[`${date}`]) ? state.MP.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[22].label)? country[22].label: '', newdata.map(state => (state.MZ.dates[`${date}`]) ? state.MZ.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.MZ.dates[`${date}`]) ? state.MZ.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.MZ.dates[`${date}`]) ? state.MZ.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[23].label)? country[23].label: '', newdata.map(state => (state.NL.dates[`${date}`]) ? state.NL.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.NL.dates[`${date}`]) ? state.NL.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.NL.dates[`${date}`]) ? state.NL.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[24].label)? country[24].label: '', newdata.map(state => (state.OR.dates[`${date}`]) ? state.OR.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.OR.dates[`${date}`]) ? state.OR.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.OR.dates[`${date}`]) ? state.OR.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[25].label)? country[25].label: '', newdata.map(state => (state.PB.dates[`${date}`]) ? state.PB.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.PB.dates[`${date}`]) ? state.PB.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.PB.dates[`${date}`]) ? state.PB.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[26].label)? country[26].label: '', newdata.map(state => (state.PY.dates[`${date}`]) ? state.PY.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.PY.dates[`${date}`]) ? state.PY.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.PY.dates[`${date}`]) ? state.PY.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[27].label)? country[27].label: '', newdata.map(state => (state.RJ.dates[`${date}`]) ? state.RJ.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.RJ.dates[`${date}`]) ? state.RJ.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.RJ.dates[`${date}`]) ? state.RJ.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[28].label)? country[28].label: '', newdata.map(state => (state.SK.dates[`${date}`]) ? state.SK.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.SK.dates[`${date}`]) ? state.SK.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.SK.dates[`${date}`]) ? state.SK.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[29].label)? country[29].label: '', newdata.map(state => (state.TG.dates[`${date}`]) ? state.TG.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.TG.dates[`${date}`]) ? state.TG.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.TG.dates[`${date}`]) ? state.TG.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[30].label)? country[30].label: '', newdata.map(state => (state.TN.dates[`${date}`]) ? state.TN.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.TN.dates[`${date}`]) ? state.TN.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.TN.dates[`${date}`]) ? state.TN.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[31].label)? country[31].label: '', newdata.map(state => (state.TR.dates[`${date}`]) ? state.TR.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.TR.dates[`${date}`]) ? state.TR.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.TR.dates[`${date}`]) ? state.TR.dates[`${date}`].delta.recovered : 0 )[0]],
            // [country[32].label, this.state.newdata.map(state => (state.TT.delta7.tested) ? state.TT.delta7.tested : 0 )[0], this.state.newdata.map(state => (state.TT.delta7.confirmed) ? state.TT.delta7.confirmed : 0)[0],this.state.newdata.map(state => (state.TT.delta7.recovered) ? state.TT.delta7.recovered : 0 )[0]],
            [(country[33].label)? country[33].label: '', newdata.map(state => (state.UP.dates[`${date}`]) ? state.UP.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.UP.dates[`${date}`]) ? state.UP.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.UP.dates[`${date}`]) ? state.UP.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[34].label)? country[34].label: '', newdata.map(state => (state.UT.dates[`${date}`]) ? state.UT.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.UT.dates[`${date}`]) ? state.UT.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.UT.dates[`${date}`]) ? state.UT.dates[`${date}`].delta.recovered : 0 )[0]],
            [(country[35].label)? country[35].label: '', newdata.map(state => (state.WB.dates[`${date}`]) ? state.WB.dates[`${date}`].delta.tested : 0 )[0], newdata.map(state => (state.WB.dates[`${date}`]) ? state.WB.dates[`${date}`].delta.confirmed : 0)[0],newdata.map(state => (state.WB.dates[`${date}`]) ? state.WB.dates[`${date}`].delta.recovered : 0 )[0]],
            
            
        ]
            // JSX 
        return (
            <div className="text-center col-md-10 " id="maincon">
                <div className=" d-flex pl-5 pr-5  justify-content-center justify-content-between inline-block mt-5 mb-5" >
                    <form >
                        <h5>Selected States</h5>
                         <h2> {country.length}</h2> 
                        </form>
                        <form >
                        <h5> Tested</h5>
                         <h2>{newdata.map(state =>(state.TT.dates[`${date}`])? state.TT.dates[`${date}`].delta.tested : "N/A") }</h2> 
                        </form>
                        <form  >
                        <h5> Confirmed</h5>
                        <h2>{newdata.map(state =>(state.TT.dates[`${date}`])? state.TT.dates[`${date}`].delta.confirmed : "N/A")  }</h2>

                        </form>
                        
                        <form >
                        <h5> Recovered</h5>
                        <h2> {newdata.map(state =>(state.TT.dates[`${date}`])? state.TT.dates[`${date}`].delta.tested : "N/A")  }</h2>
                        
                        </form>
                </div>
             <h2 className="mb-5">Graphical Representation</h2>
                <div className="row">
                    {/* If Date picker has user input then display New Data According to Date Choosen */}
                    
                        <div  className="col-md-6">
                        <Chart
                             width={'500px'}
                             height={'200vh'}
                             chartType="BarChart"
                             // style={{marginTop: "-80px"}}
                             loader={<div>Loading Chart</div>}
 
                             data  ={data3}
                      
                             options={{
                                 title: 'Data of Covid Cases(State Wise)',
                                 chartArea: { width: '50%' },
                                 isStacked: true,
                                 hAxis: {
                                 title: 'COVID CASES',
                                 minValue: 0,
                                 },
                                 vAxis: {
                                 title: 'States',
                                 },
                             }}
                             // For tests
                             rootProps={{ 'data-testid': '3' }}
                             />
                    </div>
                
                {/* :
                   <div  className="col-md-6">
                       <Chart
                            width={'500px'}
                            height={'200vh'}
                            chartType="BarChart"
                            // style={{marginTop: "-80px"}}
                            loader={<div>Loading Chart</div>}

                            data  ={data1}
                     
                            options={{
                                title: 'Data of Covid Cases(State Wise)',
                                chartArea: { width: '50%' },
                                isStacked: true,
                                hAxis: {
                                title: 'COVID CASES',
                                minValue: 0,
                                },
                                vAxis: {
                                title: 'States',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '3' }}
                            />
                   </div>
}
                    */}
                   <div  className="col-md-4">
                   <Chart
                    width={'500px'}
                    height={'200vh'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={data2}
                    options={{
                        title: 'Vaccination Doses (Both)',
                        chartArea: { width: '50%' },
                        hAxis: {
                        title: 'Vaccine Doses',
                        minValue: 0,
                        },
                        vAxis: {
                        title: 'City',
                        },
                        
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
                    />
                   </div>
                
                    
                </div>
            </div>
        )
    }

