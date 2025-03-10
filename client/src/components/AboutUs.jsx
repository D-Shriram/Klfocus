import React, { useContext, useEffect } from 'react';
import './AboutUs.css'; // Import the corresponding CSS file for animations
import hodh from '../images/hodh.jpeg';
import hodr from '../images/hodr.jpeg';
import profincharge from '../images/profincharge.jpg';
import dean from '../images/dean.jpeg';
import { UserContext } from '../App'; // Import UserContext

const AboutUs = () => {
    const { state, dispatch } = useContext(UserContext);

    // Check if the user is logged in based on localStorage
    useEffect(() => {
        const loggedIn = localStorage.getItem("user");
        if (loggedIn) {
            dispatch({ type: "USER", payload: true });
        } else {
            dispatch({ type: "USER", payload: true });
        }
    }, [dispatch]); // Adding dispatch as dependency to trigger it properly

    return (
        <div className="about-us">
            <h1 className="heading">About Focus - Resolvance</h1>
            <p className="intro">
                Focus - Resolvance is a sub-wing within Focus, responsible for tackling challenges, problem-solving, 
                and resolving conflicts across the student body. Here’s more about the people who lead and drive Resolvance:
            </p>

            <ul className="resolvance-points">
                <li>⚡ Engages actively with students to understand their issues.</li>
                <li>💡 Focuses on quick and effective problem resolution.</li>
                <li>🤝 Collaborates with university administration to enhance the student experience.</li>
                <li>🚀 Leads innovative initiatives for improvement across campus.</li>
                <li>🔍 Provides transparency in the grievance resolution process.</li>
            </ul>

            {/* Leadby Section */}
            <h2 className="section-heading">Leadby</h2>
            <div className="card-container">
                <div className="card">
                    <img src={dean} alt="Dean Academics" />
                    <h3>Addl. Dean of Academics</h3>
                    <p>Dr. HariKiran Vege</p>
                </div>
            </div>

            {/* HODs Section */}
            <h2 className="section-heading">HODs of Our Branch</h2>
            <div className="card-container">
                <div className="card">
                    <img src={hodh} alt="HOD A Senthil" />
                    <h3>HOD (Honours)</h3>
                    <p>Dr. A Senthil</p>
                </div>
                <div className="card">
                    <img src={hodr} alt="HOD T Pavan Kumar" />
                    <h3>HOD (Regulars)</h3>
                    <p>Dr. T Pavan Kumar</p>
                </div>
            </div>

            {/* Professor Incharge Section */}
            <h2 className="section-heading">Mentor</h2>
            <div className="card-container">
                <div className="card">
                    <img src={profincharge} alt="Prof Incharge" />
                    <h3>Deputy HOD Student Affairs</h3>
                    <p>T Santhi Sri</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
