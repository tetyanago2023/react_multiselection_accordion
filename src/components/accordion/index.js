import { useState } from "react";
import data from "./data";  // Import the data
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const[enableMultiSelect, setEnableMultiSelect] = useState(false);
    const[multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMutiple);
    }
    console.log(selected, multiple)
    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
                Enable Multiselect
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div onClick={ enableMultiSelect
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)}
                                 className="title"
                            >
                                <div className="title-line1">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {enableMultiSelect
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )
                                    : selected === dataItem.id && (
                                    <div className="acc-content ">{dataItem.answer}</div>
                                )}
                                {/*{*/}
                                {/*    selected === dataItem.id ||*/}
                                {/*    multiple.indexOf(dataItem.id) !== -1 ? (*/}
                                {/*        <div className="acc-content">{dataItem.answer}</div>*/}
                                {/*        ) : null*/}
                                {/*}*/}
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
