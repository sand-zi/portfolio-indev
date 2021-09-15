import home1 from '../assets/images/home1.png'


export const AboutSection = () => {

    return (
        <section className="about-section">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work hard to make</h2>
                    </div>
                    <div className="hide">
                        <h2>my <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                    <p>Contact me for any website ideas that you have. </p>
                    <button> Contact me</button>
                </div>
                <div className="image">
                    <img src={home1} alt="" />
                </div>
            </div>
        </section>
    )

}