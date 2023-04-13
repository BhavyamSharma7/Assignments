import {Accessible, AirplanemodeActive, DirectionsBus} from "@mui/icons-material";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <section className="header-section">
                <MultiStepForm />
            </section>
            <section>
                <div className="bus-div">
                    <p>Enjoy comfortable ride in Maxi Taxi, Outstation maxi taxi and Airport taxi.
                        Book Maxi Taxi Perth hassle free at fixed price</p>
                    <img src="https://callmaxicab.com.au/Asset23CallMaxiCab.webp" alt="bus" />
                </div>
            </section>
            <section className="services">
                <span className="services-heading">
                    <h1>Our <span style={{color: "#4C74B9"}}>Services</span></h1>
                    <hr />
                </span>
                <div className="service-items">
                    <div className="item">
                        <span style={{backgroundColor: "#8bf1d3c2"}}><DirectionsBus style={{fontSize: "40px"}} /></span>
                        <h6>Maxi Taxi Perth</h6>
                    </div>
                    <div className="item">
                        <span style={{backgroundColor: "#ffd14657"}}><AirplanemodeActive style={{fontSize: "40px"}} /></span>
                        <h6>Airport Taxi Perth</h6>
                    </div>
                    <div className="item">
                        <span style={{backgroundColor: "#ff89bf78"}}></span>
                        <h6>Fermantle Taxi</h6>
                    </div>
                    <div className="item">
                        <span style={{backgroundColor: "#8bf1d3c2"}}><Accessible style={{fontSize: "40px"}} /></span>
                        <h6>Wheelchair Taxi Perth</h6>
                    </div>
                    <div className="item">
                        <span style={{backgroundColor: "#8bf1d3c2"}}><DirectionsBus style={{fontSize: "40px"}} /></span>
                        <h6>Baby Capsule Taxi</h6>
                    </div>
                </div>
            </section>
            <section className="info-container">
                <div className="info">
                    <img src="https://callmaxicab.com.au/wheelchair.webp" alt="TaxiImg" />
                    <span>
                        <h1>Wheelchair Taxi Perth</h1>
                        <p>We offer transportation services that are truly for everyone. This includes same-day wheelchair accessible taxi, on-demand wheelchair transport, and any other special needs. Whether it’s helping a customer in a wheelchair, assisting a visually impaired customer, or making sure that a customer with special needs feels comfortable and safe Maxi Taxi is here to assist.</p>
                    </span>
                </div>
                <div className="info">
                    <img src="https://callmaxicab.com.au/airport-transfer.webp" alt="TaxiImg" />
                    <span>
                        <h1>Airport Taxi Perth</h1>
                        <p>A better way for your airport transfer is to travel by maxi taxi since you don’t need to worry about taking the car to Perth airport. Your airport transfer will be hassle-free if you choose a good service for your transport, We also provide airport taxi services in Perth Just book a ride with Call Maxi Cab to ensure a maxi taxi is waiting for you when your flight arrives.</p>
                    </span>
                </div>
                <div className="info">
                    <img src="https://callmaxicab.com.au/MaxiTaxiPerth.webp" alt="TaxiImg" />
                    <span>
                        <h1>Maxi Taxi Perth</h1>
                        <p>Travelling with a large group is a hassle, especially when you choose a normal taxi for your ride, When you are travelling with a large group, maxi taxis are the right choice for your ride since the maxis taxis are spacious and it has plenty of room for everyone to fit comfortably and there is space for your luggage. CallMaxiCab is among the leading maxi taxi service providers in Perth so whenever travelling with a large group always consider maxi taxis as your first choice.</p>
                    </span>
                </div>
                <div className="info">
                    <img src="https://callmaxicab.com.au/fremantle.webp" alt="TaxiImg" />
                    <span>
                        <h1>Perth Airport to Fremantle</h1>
                        <p>Fremantle is a very famous port city that's part of the Perth metropolitan area, Thousands of visitors go there every year. It is well-known for its maritime history and the largest convict-built prison in Australia, Perth's port city of Fremantle is also well-known for supporting the arts, from local to national (and some international) artists. We offer our pick-up and drop-off taxi service from Perth airport to Fremantle and vice versa, No Need To Walk Miles Carrying Heavy Bags! Just cab it with Call Maxi Cab! And enjoy your ride with us.</p>
                    </span>
                </div>
            </section>
            <hr />
            <section className="about">
                <p>CallMaxiCab always offers you the best maxi taxi service in Perth with our cognitive and reliable driver make your trip easy and hassle-free, Whether you are going for a night out with a large group or need a city tour with your friends and family we are always there to assist you and make your travel comfortable and reliable with our maxi taxis.
                    <br /><br />
                    Our fleet is driven by our friendly and experienced drivers and they take all the safety measures to make your travel safer and convenient makes us one of the leading maxi taxi service providers in Perth.
                    <br /><br />
                    You can book our maxi taxi service anytime using our booking form which will take a few seconds you can also call us.
                    <br /><br />
                    CallMaxiCab offers fixed fares based on our vehicle types and pick-up locations there is no hidden or extra charge for your luggage and travel time, we provide you with the best quote. Our punctual and polite drivers understand you and your needs and they are always committed to your safety and comfort. Enjoy Safe and hassle-free maxi taxi perth ride with CallMaxiCab.
                    <br />
                    Grace. Space. Peace, Choose the best wheelchair taxi service in Perth…. Call Maxi Cab top is the rated and reviewed maxi taxi service in Perth with Over 10 Years of Trust & Thousands of Satisfied Customers we provide you with the best quote so book your ride hassle-free with us.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default Home;