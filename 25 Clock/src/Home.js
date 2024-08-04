import React, { useEffect, useState } from "react";

const Home = () => {
    
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            if(minute !== 60){
                if(second !== 60){
                    setSecond(second => second+1)
                }else{
                    setMinute(minute => minute+1)
                    setSecond(0)
                }
            }else{
                setHour(hour => hour+1)
                setMinute(0)
            }      
        },1000)   
    })

    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <p className="h2 m-5">Clock</p>
            <div className="border p-5 ">
                <h1 className="display-2">{hour} : {minute} : {second}</h1>
            </div>
        </div>
    );
};

export default Home;