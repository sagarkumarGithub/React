import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordian = ({items}) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    }

    return ( <div>
        <div className="accordion">
            {items.map((item,index) => {
                return <div className="accordion-item" key={index} onClick={() => handleToggle(index)}>
                    <button className="accordion-title">
                        {item.title}
                        {openIndex === index ? <FaChevronUp className="right"/> : <FaChevronDown className="right"/>}
                    </button>
                    {
                        openIndex === index && 
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    }
                </div>
            })}

        </div>
    </div> );
}
 
export default Accordian;