import React from "react";
import { useState } from "react";
function CourseHoc(OriginalComponent ,courseTitle, coursePrice ){
    function NewComponent(props){
        const [title,setTitle] = useState(courseTitle)
        const [price,setPrice] = useState(coursePrice)
        
        const increasePrice = () =>{
            setPrice(PrevPrice => PrevPrice*2 )
        }
        return <OriginalComponent title={title} increasePrice={increasePrice} price={price} />
    }
    return NewComponent;
}

export default CourseHoc