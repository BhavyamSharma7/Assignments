import { useState } from 'react';
import './App.css';
import SelectC from './components/SelectC/SelectC';

function App() {
    const [submitted, setSubmitted] = useState(false);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("")
    const [error, setError] = useState("");

    const countryOptions = ["India", "China", "USA"];
    const stateOptions = {
        India: ["Himachal Pradesh", "Delhi", "Mumbai"],
        China: ["Beijing", "Sichuan", "Shandong"],
        USA:["Alabama", "Alaska", "Arizona"],
    }


    const onChange = (item, cntry) => {
        if (cntry) {
            setCountry(item[0]);
            setState(stateOptions[item[0]]);
            setError("");
        } else {
            setState(item[0]);
            setError("");
        }
    }

    const handleSubmit = () => {
        if (country === "") {
            setError("Please select a country!");
            return;
        }
        let st = stateOptions[country].filter((item) => item === state);
        if (st.length<1) {
            setError("Please select valid State!!");
        } else {
            setError(false)
            setSubmitted(true);
        }
    }

    return (
        <div className="App">
            {!submitted && <div style={{ display: "flex", gap: "15px" }}>
                <SelectC
                    options={countryOptions}
                    onChange={onChange}
                    cntry={true}
                />
                {country && <SelectC
                    options={stateOptions[country]}
                    onChange={onChange}
                    cntry={false}
                    stateOptions={stateOptions}
                />}
            </div>}
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            {!submitted && <button onClick={handleSubmit}>Submit</button>}
            {submitted && 
                <div className="result">
                    <span><b>Country: </b> { country}</span><br />
                    <span><b>State: </b> { state}</span>
                </div>
            }
        </div>
    );
}

export default App;
