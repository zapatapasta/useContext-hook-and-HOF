import React from "react";
import CourseHoc from "../HOCs/CourseHoc";
function Javascript({title, increasePrice, price}) {
    return(
        <div>
            <h3>course title: {title}</h3>
            <button onClick={increasePrice}>increase course price (price = {price})</button>
        </div>
    )
};

export default CourseHoc(Javascript, 'java', 2000)