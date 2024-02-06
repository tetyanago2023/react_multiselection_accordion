import { useState } from "react";
import data from "./data";  // Import the data
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    console.log(selected)
    return (
        <div className="acc-wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                <div className="title-line1">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id
                                        ? <div className="acc-content">{dataItem.answer}</div>
                                        : null
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
