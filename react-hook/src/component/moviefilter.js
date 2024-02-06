// Filter.js
import React from 'react';

const Filter = ({ filterTitle, filterRating, onTitleChange, onRatingChange }) => {
    return (
        <div className="filter">
        <input type="text" placeholder="Filter by title" value={filterTitle} onChange={onTitleChange} />
        <input type="number" placeholder="Filter by rating" value={filterRating} onChange={onRatingChange} />
        </div>
    );
};

export default Filter;
