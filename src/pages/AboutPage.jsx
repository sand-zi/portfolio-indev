import { AboutSection } from "../components/AboutSection"
import { FaqSection } from "../components/FaqSection"
import { ServiceSection } from "../components/ServiceSection"



export const AboutPage = () => {

    return (
        <section className="about-page">
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </section>
    )

}