import React, { useEffect, useState } from 'react';

const MyProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/myprofile`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error(error);
                setUserData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p className="loading-text">Loading...</p>;
    }

    if (!userData) {
        return <p className="error-text">Unable to load data. Please try again later.</p>;
    }

    const { name, address, year, phone, email, grievances } = userData;

    return (
        <>
            <style>{`
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #0b212d;
                    margin: 0;
                    padding: 0;
                }

                .profile-container {
                    padding: 20px;
                    margin: 0 auto;
                    max-width: 900px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                }

                h1, h2, h3, h4 {
                    font-family: 'Times New Roman', serif;
                    color: #333;
                    text-align: ;
                }

                .section-title {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                    color: #ff0000;
                    text-decoration: underline;
                }

                .personal-info h2 {
                    font-size: 1.5em;
                    color: #ff0000);
                }

                .personal-info h3 {
                    font-size: 1.5em;
                    color:rgb(31, 8, 234);
                }

                .personal-info span {
                    font-size: 1em;
                    color:rgb(31, 8, 234);
                }

                .contact-info h4 {
                    font-size: 1.2em;
                    color:rgb(31, 8, 234);
                }

                .grievance-table {
                    width: 100%;
                    background: #f3e5f5;
                    color: #333;
                    border-radius: 10px;
                    border-collapse: collapse;
                    overflow: hidden;
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                    margin-top: 20px;
                    transition: transform 0.2s ease-in-out;
                }

                .grievance-table th, .grievance-table td {
                    padding: 15px;
                    text-align: left;
                    font-size: 1em;
                    color: #333;
                    border: 1px solid #ddd;
                }

                .grievance-table th {
                    background: linear-gradient(135deg,rgb(140, 247, 240) 0%,rgb(0, 187, 255) 100%);
                    color: white;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                }

                .grievance-table td {
                    background: #fff;
                    color: #333;
                    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
                }

                .grievance-table tr {
                    transition: transform 0.2s ease-in-out;
                }

                .grievance-table tr:hover {
                    transform: scale(1.02);
                    background-color: #f9f9f9;
                }

                .loading-text, .error-text {
                    text-align: center;
                    font-size: 1.5em;
                    color: #555;
                }

                .text-center {
                    text-align: center;
                }

                hr {
                    border: 2px solid #0b212d;
                    border-radius: 5px;
                    margin: 20px 0;
                }
            `}</style>

            <div className="profile-container">
                <h1 className="text-center">My Profile</h1>
                <hr />
                <div className="personal-info">
                    <h2 className="section-title">Personal Information</h2>
                    <h3>Name: <span>{name}</span></h3>
                    <h3>Address: {address}</h3>
                    <h3>Year: {year}</h3>
                </div>

                <div className="contact-info">
                    <h3 className="section-title">Contact Information</h3>
                    <h4>Phone: {phone}</h4>
                    <h4>Email: {email}</h4>
                </div>

                <div className="grievances">
                    <h3 className="section-title">Grievances</h3>
                    <table className="grievance-table">
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Date</th>
                                <th>Topic</th>
                                <th>Grievance</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievances.map((grievance, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{grievance.date}</td>
                                    <td>{grievance.dept}</td>
                                    <td>{grievance.grievance}</td>
                                    <td>{grievance.status}</td>
                                    <td>{grievance.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
