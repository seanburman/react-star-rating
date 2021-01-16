import React from "react";
import { FaStar } from "react-icons/fa"

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "green" : "grey"} onClick={onSelect}/>
);

export default function StarRating({ 
    totalStars = 5 ,
    selectedStars = 0,
    onRate = f => f
    }) {
    return (
    <React.Fragment>
    {createArray(totalStars).map((n, i) => (
        <Star 
        key={i} 
        selected={selectedStars > i}
        onSelect={() => onRate(i + 1)}
        />
    ))}
    <p>
        {selectedStars} of {totalStars} stars.
    </p>
    </React.Fragment>
);
}
