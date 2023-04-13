import {useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import "./MultiStepForm.css";


const MultiStepForm = () => {
    const steps = ['', '', ''];
    const [activeStep, setActiveStep] = useState(0);
    const [oneway, setOneway] = useState(true);

    const [pickAddress, setPickAddress] = useState("");
    const [dropAddress, setDropAddress] = useState("");
    const [date, setDate] = useState(null);
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState(1);
    const [maxiType, setMaxiType] = useState("Maxi Taxi 7 seater");
    const [specialreq, setSpecialreq] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setPassengers(1);
        setActiveStep(0);
    };

    return (
        <div className="form-container">
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
        
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === 0 && 
                <div className="trip-options">
                    <button onClick={()=>setOneway(true)}>Oneway</button>
                    <button onClick={()=>setOneway(false)}>Roundtrip</button>
                </div>
            }
            <div className="form-details-container">
                {activeStep === steps.length ? (
                    <div className="form-details">
                        <span>
                            <p>All steps completed - you&apos;re finished!</p>
                            <h2>Details:</h2>
                            <h5>PickUp Address: </h5>{pickAddress}
                            <br />
                            <h5>Drop Location: </h5>{dropAddress}
                            <br />
                            <h5>Date: </h5>{date}
                            <br />
                            {!oneway && <><h5>Return Date: </h5>{returnDate}<br /></>}
                            <h5>No. of Passengers: </h5>{passengers}
                            <br />
                            <h5>Maxi Type: </h5>{maxiType}
                            <br />
                            <h5>Special Requirements: </h5>{
                                specialreq.length === 0 ? "none" :
                                specialreq.map(req=>{return req+" "})
                            }
                            <br />
                            <h5>Name: </h5>{name}
                            <br />
                            <h5>Email: </h5>{email}
                            <br />
                            <h5>Phone Number: {phone}</h5>
                        </span>
                        <div>
                            <button className="reset-btn" style={{color: "blue"}} onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="form-details">
                            {activeStep === 0 && 
                                <>
                                    <span className="form-input">
                                        <label htmlFor="pickupAddress">PICKUP ADDRESS</label>
                                        <input id="pickupAddress" type="text" onChange={(e)=>setPickAddress(e.target.value)} placeholder="Enter a Location" />
                                    </span>
                                    <span className="form-input">
                                        <label htmlFor="dropLocation">DROP LOCATION</label>
                                        <input id="dropLocation" type="text" onChange={(e)=>setDropAddress(e.target.value)} placeholder="Enter a Location" />
                                    </span>    
                                    <span className="form-input">
                                        <label htmlFor="dateTime">DATE/TIME</label>
                                        <input id="dateTime"  type="datetime-local" onChange={(e)=>setDate(e.target.value)}/> 
                                    </span>            
                                    {(activeStep === 0 && !oneway) &&
                                        <span className="form-input">
                                            <label htmlFor="returndateTime">RETURN DATE/TIME</label>
                                            <input id="returndateTime" type="datetime-local" onChange={(e)=>setReturnDate(e.target.value)} /> 
                                        </span>
                                    }    
                                </>
                            } 
                            {activeStep === 1 &&
                                <>
                                    <span className="form-input">
                                        <label htmlFor="passengers">NUMBER OF PASSENGERS</label>
                                        <input value={passengers} id="passengers" type="Number" onChange={(e)=>setPassengers(e.target.value)} />
                                    </span>
                                    <span className="form-input">
                                        <select onChange={(e)=>setMaxiType(e.target.value)} >
                                            <option value="Maxi Taxi 7 seater">Maxi Taxi 7 seater</option>
                                            <option value="Maxi Taxi 10 seater" >Maxi Taxi 10 seater</option>
                                        </select>
                                    </span>
                                    <span className="form-input">
                                        <label htmlFor="specialreq">SPECIAL REQUIREMENTS</label>
                                        <input  onChange={(e)=>setSpecialreq(e.target.value.split(","))} id="specialreq" type="text" placeholder="Fitting Wheelchair, Surfboard, bicycle, etc." />
                                    </span>
                                </>
                            }
                            {activeStep === 2 && 
                                <>
                                    <span className="form-input">
                                        <label htmlFor="name">NAME</label>
                                        <input id="name" type="text" onChange={(e)=>setName(e.target.value)} required />
                                    </span>
                                    <span className="form-input">
                                        <label htmlFor="email">EMAIL</label>
                                        <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} required />
                                    </span>
                                    <span className="form-input">
                                        <label htmlFor="phone">MOBILE NUMBER</label>
                                        <input id="phone" type="text" onChange={(e)=>setPhone(e.target.value)} required />
                                    </span>
                                </>    
                            }        
                        </div>
                        <div className="btn-container">
                            <button disabled={activeStep === 0} className="prev-btn" onClick={handleBack}>
                                Back
                            </button>
                            <button className="forward-btn" onClick={handleNext}>
                                {activeStep === steps.length - 1 && 'Submit'}
                                {activeStep === 0 && 'Get Quick Quote'}
                                {(activeStep > 0 && activeStep < steps.length-1) && 'Next'}    
                            </button>
                        </div>        
                    </>
                )}
            </div>
        </div>
    );
}

export default MultiStepForm;