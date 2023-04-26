import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectC.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SelectC = ({ options, onChange, cntry }) => {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    
    
    const handleChange = (e) => {
        if (cntry) {
            let newCountry = options.filter((item, index) => index === e.target.value);
            setCountry(newCountry);
            onChange(newCountry, cntry);
        } else {
            let newState = options.filter((item, index) => index === e.target.value);
            setState(newState);
            onChange(newState, cntry);
        }
        setOpen(false);
    }

    return (
        <div className="select-cont">
            <div className="select-content">
                {cntry && <span>{country ? country : "select..."}</span>}
                {!cntry && <span>{state ? state : "select..."}</span> }
                <span onClick={()=>setOpen(!open)}
                    style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000", }} />
                </span>
            </div>
            {open && <ul className="dropdown">
                {options.map((item, index) => (
                    <li key={index} value={index} onClick={handleChange}>
                        {item}
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default SelectC;
