import { useEffect, useState, useRef } from "react";

const Home = () => {

    const [list, setItems] = useState(['banana','kamal','yello','red','nadun']);
    const [copylist, setCopylist] = useState([]);
    const [isokay, setIsokay] = useState(false)
    const divRef = useRef(null);

    const handleSearch = ()=>setIsokay(true)

    const handleAdd = (index)=>{
        let demoList = []

        copylist.push(list[index])
        console.log(copylist)
        list.map((item, x)=>{
            if(list[index] != item){
                demoList.push(item);
            }
        })

        setItems(demoList)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                // Clicked outside the div
                setIsokay(false)
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const hem = (isokay, list, handleAdd) => {
        if (isokay === true) {
            return list.map((item, index) => (
                <li key={index} className="list-group-item btn btn-secondary">
                    <button className="mybtn" onClick={() => handleAdd(index)}>{item}{index}</button>
                </li>
            ));
        }
        return null;
    };

    return (
        <div className="my-div d-flex justify-content-center align-items-center ">
            <div class="d-flex flex-column" ref={divRef}>
                <input type="text" onClick={handleSearch} placeholder={copylist.map((x)=>x)}/>
                <ul className="list-group" >
                    {hem(isokay, list, handleAdd)}
                </ul>
            </div>
        </div>
    );
}
 
export default Home;