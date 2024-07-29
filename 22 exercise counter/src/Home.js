import { useState } from "react";

const Home = () => {

    const [num, setNum] = useState(0);

    const handleMax = ()=>{
        setNum(num+1);
        console.log(num)
    }

    const handleMin = ()=>{
        setNum(num-1)
    }

    return (
        <div className="border d-flex flex-column align-items-center justify-content-center" style={{height:'100vh'}}>
            <p className="display-3">{num}</p>
            <div className="">
                <button className="btn btn-primary btn-cir btn-lg m-2" onClick={handleMin}>-</button>
                <button className="btn btn-primary btn-cir btn-lg m-2" onClick={handleMax}>+</button>
            </div>
        </div>
    );
}
 
export default Home;