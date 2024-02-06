import { useState } from "react";
import data from "./data";  // Import the data
// import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                {
                                    selected === dataItem.id ? <div>
                                        <p>{dataItem.answer}</p>
                                    </div> : null
                                }
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
