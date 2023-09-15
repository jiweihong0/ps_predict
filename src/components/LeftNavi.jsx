// left navigation bar
import React from 'react';
import './leftnavi.css';
import { useState } from 'react';

export default function LeftNavi() {
    const [selected, setSelected] = useState(true);
    const [selected2, setSelected2] = useState(true);

    const handleSelect = () => {
        console.log(selected);
        setSelected(!selected);
    };
    const handleSelect2 = () => {
        console.log(selected2);
        setSelected2(!selected2);
    };
    return (
        <div className="leftnavi">
            <h1 className='leftnavi_title'>復健清單</h1>
            <h1 className='leftnavi_title_next' onClick={handleSelect}>骨盆復健</h1>
            {selected ? null : (
                <ul className="leftnavi_list" >
                    <li id='1'>下犬式</li>
                    <li id='2'>橋式</li>
                    <li id='3'>屈膝伸展</li>
                </ul>
            )}
            <h1 className='leftnavi_title_next' onClick={handleSelect2}>脊椎復健</h1>
            {selected2 ? null : (
                <ul className="leftnavi_list">
                    <li id="1" >橋式</li>
                    <li id="2" >嬰兒式</li>
                    <li id="3" >鳥狗式</li>
                    <li id="4" >屈膝抱胸</li>
                </ul>
            )}
        </div>

    );
}

