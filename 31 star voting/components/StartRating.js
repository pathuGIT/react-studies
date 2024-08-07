import { useState } from "react";
import Star from "./Star";

const StartRating = ({totalString}) => {

    const [selectedStars, setSelectedStars] = useState(4);

    const createArr = (length) => [
        ...Array(length)
    ];

    return (
        createArr(totalString).map((n,i)=>(
            <Star key={i} selected={selectedStars > i+1} onSelect={()=>setSelectedStars(i+1)}/>
        ))
        
    )
}
 
export default StartRating;