import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import convo from '../images/convo.png';

const Home = () => {
    const { state, dispatch } = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const [show, setShow] = useState(false);

    const userHome = async () => {
        try {
            // const res = await fetch("/getdata", {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/getdata`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 200) {
                const data = await res.json();
                setUserName(data.name);
                setShow(true);
                dispatch({ type: "USER", payload: true }); // Update global state
            } else {
                setUserName("");
                setShow(false);
                dispatch({ type: "USER", payload: false });
            }
        } catch (err) {
            console.log("Error:", err);
            setUserName("");
            setShow(false);
            dispatch({ type: "USER", payload: false });
        }
    };

    useEffect(() => {
        userHome();
    }, []);

    return (
        <div className="row">
            <div className="col-md-5">
                <img src={convo} alt="not found" />
            </div>
            <p className='maintext'>
                {userName ? `Hello ${userName}! Welcome Back!!` : "Please login to file a grievance"}
            </p>
        </div>
    );
};

export default Home;
