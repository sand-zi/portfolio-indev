// Import Icons

import clock from '../assets/images/clock.svg'
import diaphragm from '../assets/images/diaphragm.svg'
import money from '../assets/images/money.svg'
import teamwork from '../assets/images/teamwork.svg'

// Import Image
import home2 from '../assets/images/home2.png'
export const ServiceSection = () => {


    return (
        <section className="service-section">
            <div className="descriprion">
                <h2> High <span>quality </span> services</h2>

                <div className="cards-container">

                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <img src={home2} alt="canon-camera" />
            </div>
        </section>
    )
}