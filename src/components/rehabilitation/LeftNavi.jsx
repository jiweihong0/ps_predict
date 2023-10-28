import React, { useEffect, useState } from 'react';
import './leftnavi.css';

export default function LeftNavi(props) {
    const     {sport,startdefault,selectedCategories, setSelectedCategories, handleSelect, handleItemClick, rehabCategories} = props;

    const handleslelects = async(index) => {
        await handleSelect(index);
        await startdefault();
    }
    console.log(sport);
    return (
        <div className="leftnavi">
            <h1 className='leftnavi_title'>復健清單</h1>
            {sport.map((category, index) => (
                <div className='leftnavidropbox' key={index}>
                    <div className='leftnavi_title_next' onClick={() => handleslelects(index)}>
                        {category.title}
                    </div>
                    {selectedCategories[index] ? null : (
                        <ul className="leftnavi_list">
                            {category.items.map((item, i) => (
                                <button className='leftnavi_title_nexta' key={i} onClick={() => handleItemClick(item)}>
                                    {item}
                                </button>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
