import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UpdateDocs = () => {
    const history = useHistory();
    const [gId, setGId] = useState('');
    const [_id, setMId] = useState('');
    const [email, setEmail] = useState('');
    const [dept, setDept] = useState('');
    const [status, setStatus] = useState('');
    const [feedback, setFeedback] = useState('');
    const [Data, setData] = useState({
        date: "", dept: "", email: "", feedback: "", grievance: "", name: "", phone: "", status: "", _id: ""
    });

    const getGrievance = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/grievancelist', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            const obj = thisGrievance(data);
            if (obj) {
                setData(obj);
                setEmail(obj.email);
                setDept(obj.dept);
            }

            if (res.status !== 200) {
                throw new Error(res.err);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/aAbBcC/updatedocs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email, dept, _id, gId, status, feedback
                })
            });

            const data = await res.json();

            if (res.status === 400 || !data) {
                window.alert("Could not connect to backend");
            } else {
                window.alert("Grievance Updated Successfully");
                history.goBack();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const thisGrievance = (d) => {
        for (let i = 0; i < d.length; i++) {
            for (let j = 0; j < d[i].grievances.length; j++) {
                if (d[i].grievances[j]._id === gId) {
                    setMId(d[i]._id);
                    return d[i].grievances[j];
                }
            }
        }
        return null;
    }

    return (
        <div className='mx-3'>
            <br />
            <h1 className="text-center mt-1">Update Grievances</h1>
            <hr />
            <div className='jumbotron'>
                <form method="GET" onSubmit={getGrievance}>
                    <label htmlFor="GId">Enter the Grievance Id:</label>
                    <input type="text" id="GId" name="GId" value={gId} onChange={(e) => setGId(e.target.value)} className='mx-2 col-3' />
                    <br />
                    <input type="submit" value="Get Data" name="submitgid" id="submitgid" className='btn btn-outline-primary' />
                    <br />
                </form>
                <div className="formdata">
                    <br />
                    <div className='row'>
                        <h4 className='text-uppercase' style={{ textDecoration: "underline" }}>Grievance Information</h4>
                    </div>
                    <div className='row'>
                        <h6 className=''>Name:</h6><p className='mx-2'> &nbsp;{Data?.name || "N/A"}</p>
                    </div>
                    <div className='row'>
                        <h6>Phone:</h6><p className='mx-2'>{Data?.phone || "N/A"}</p>
                    </div>
                    <div className='row'>
                        <h6>Grievance:</h6><p className='mx-2'>{Data?.grievance || "N/A"}</p>
                    </div>
                    <form method="POST" onSubmit={updateData}>
                        <div className='row'>
                            <h6>Email:</h6><input name="email" type="text" className='mx-2' value={email} readOnly />
                        </div>
                        <div className='row'>
                            <h6>Department:</h6><input name="dept" type="text" className='mx-2' value={dept} readOnly />
                        </div>
                        <div className='row'>
                            <h6>Main ID:</h6><input className='mx-2 col-3' type="text" value={_id} name="_id" readOnly />
                        </div>
                        <br />
                        <div className='row'>
                            <h6>This ID:</h6><input type="text" className='mx-2 col-3' value={gId} name="gId" readOnly />
                        </div>
                        <br />
                        <div className='row'>
                            <h6>Status:</h6>
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)} className='mx-2 col-3'>
                                <option value="Not Seen">Not Seen</option>
                                <option value="In Process">In Process</option>
                                <option value="Referred to concerned Authority">Referred to concerned Authority</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        <br />
                        <div className='row'>
                            <h6>Feedback:</h6>
                            <input type="text" name="feedback" className='mx-2 col-4' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                        </div>
                        <br />
                        <div className='row'>
                            <h6>Date of Filing:</h6><p>{Data?.date || "N/A"}</p>
                        </div>
                        <br />
                        <div className='row'>
                            <input type="submit" value="Update Status" className='btn btn-outline-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateDocs;
