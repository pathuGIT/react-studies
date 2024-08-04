import React, { useEffect, useState } from "react";

const Home = () => {
    
    const [display, setDisplay] = useState(true);
    const [display_R, setDisplayR] = useState(true);
    const [display_L, setDisplayL] = useState(true);

    // const handleBoth = ()=>{
    //     if(display === false){
    //         setDisplayL(true)
    //         setDisplayR(true)
    //         setDisplay(true)
    //     }else{
    //         setDisplay(false)
    //     }
    // }
    // const handleRight = ()=>{
    //     if(display_R === false){
    //         setDisplay(true)
    //         setDisplayR(true)
    //     }else{
    //         setDisplayR(false)
    //     }
    // }
    // const handleLeft = ()=>{
    //     if(display_L === false){
    //         setDisplayL(true)
    //     }else{
    //         setDisplayL(false)
    //     }
    // }
    const handleBoth = ()=>{
        if(display_L === false && display_R === false){
            setDisplayL(true)
            setDisplayR(true)
        }else{
            setDisplayL(false)
            setDisplayR(false)

        }
    }
    const handleRight = ()=>{
        if(display_R === false){
            setDisplayR(true)
        }else{
            setDisplayR(false)
        }
    }
    const handleLeft = ()=>{
        if(display_L === false){
            setDisplayL(true)
        }else{
            setDisplayL(false)
        }
    }
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center border ">
            <div style={{height:'10vh'}}></div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-5" onClick={handleLeft}>Toggle Left</button>
                <button className="btn btn-primary m-5" onClick={handleRight}>Toglle Right</button>
                <button className="btn btn-primary m-5" onClick={handleBoth}>Toggle Both</button>
            </div>

            <div className="d-flex">
                <div className="w-50 border">{display_L  && ( <p className="p-5">Mauris malesuada libero sapien, nec dapibus lorem rutrum et. Suspendisse gravida nisi diam, vel ultrices tellus fringilla rhoncus. Mauris tempus nisi vel augue gravida, in faucibus massa tincidunt. Nunc dapibus ex sit amet tempor tincidunt. In porttitor, elit viverra aliquam consequat, lacus nunc pharetra metus, vitae laoreet lectus diam ut nulla. Sed commodo consectetur gravida.</p> )}</div>
                <div className="w-50 border">{display_R  && ( <p className="p-5">Vestibulum congue augue ac ligula tristique, auctor varius ante vestibulum. Proin auctor turpis id aliquam ullamcorper. Ut ut arcu eu nisi commodo dignissim non a nisi. Donec consequat, ligula vitae efficitur vulputate, erat nunc fermentum diam, tempor lacinia arcu nunc non massa.</p> )}</div>
            </div>
        </div>
    );
};

export default Home;