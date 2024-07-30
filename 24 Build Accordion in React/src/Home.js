import React, { useEffect, useState } from "react";

const Home = () => {
    const [datas, setDatas] = useState([
        {
            line: 'Line 1',
            name: ['Namal', 'Kamal', 'Gayan']
        },
        {
            line: 'Line 2',
            name: ['Nadun', 'Jayani', 'Malmi']
        },
        {
            line: 'Line 3',
            name: ['Muial', 'Walmi', 'Asooka']
        }
    ]);

    const [indexList, setIndexList] = useState([]);
    const [ispublic, setIspublic] = useState(false);

    const handleClick = (index1) => {
        const newIndexList = [...indexList];
        newIndexList[index1] = !newIndexList[index1];
        setIndexList(newIndexList);
        setIspublic(newIndexList[index1]);
    };

    useEffect(() => {
        const initialIndexList = datas.map(() => false);
        setIndexList(initialIndexList);
    }, [datas]);

    return (
        <div>
            {datas.map((x, index1) => (
                <div key={index1}>
                    <button onClick={() => handleClick(index1)}>{x.line}</button>
                    {indexList[index1] && (
                        <ul id={index1}>
                            {x.name.map((y, index2) => (
                                <li key={index2}>{y}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Home;