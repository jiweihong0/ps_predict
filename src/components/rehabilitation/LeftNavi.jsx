import React, { useState } from 'react';
import './leftnavi.css';

export default function LeftNavi(props) {
    const     {selectedCategories, setSelectedCategories, handleSelect, handleItemClick, rehabCategories} = props;

    return (
        <div className="leftnavi">
            <h1 className='leftnavi_title'>復健清單</h1>
            {rehabCategories.map((category, index) => (
                <div className='leftnavidropbox' key={index}>
                    <div className='leftnavi_title_next' onClick={() => handleSelect(index)}>
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
