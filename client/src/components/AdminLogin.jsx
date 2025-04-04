import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const history=useHistory();
    
    const getAccess=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
            window.alert("Login Successful");
            history.push("/aAbBcC");
        }
        else if(email==="admin.acad@gmail.com" && password==="acadamicsprogression"){
           window.alert("Login Successful");
            history.push("/acadamicsprogression"); 
        }
        else if(email==="admin.erp@gmail.com" && password==="erporlms"){
            window.alert("Login Successful");
             history.push("/erporlms"); 
         }
         else if(email==="admin.cls@gmail.com" && password==="classroomamenties"){
            window.alert("Login Successful");
             history.push("/classroomamenties"); 
         }
         else if(email==="admin.sil@gmail.com" && password==="socialimmersivelearning"){
            window.alert("Login Successful");
             history.push("/socialimmersivelearning"); 
         }
         else if(email==="admin.glbc@gmail.com" && password==="globalchallenges"){
            window.alert("Login Successful");
             history.push("/globalchallenges"); 
         }
         else if(email==="admin.place@gmail.com" && password==="placementrelation"){
            window.alert("Login Successful");
             history.push("/placementrelation"); 
         }
         else if(email==="admin.hstl@gmail.com" && password==="hostelaccommodation"){
            window.alert("Login Successful");
             history.push("/hostelaccommodation"); 
         }
         else if(email==="admin.transport@gmail.com" && password==="transportationservices"){
            window.alert("Login Successful");
             history.push("/transportationservices"); 
         }
         else if(email==="admin.cmps@gmail.com" && password==="campussecurity"){
            window.alert("Login Successful");
             history.push("/campussecurity"); 
         }
         else if(email==="admin.cc@gmail.com" && password==="careercounselling"){
            window.alert("Login Successful");
             history.push("/careercounselling"); 
         }
         else if(email==="admin.pc@gmail.com" && password==="personalconcern"){
            window.alert("Login Successful");
             history.push("/personalconcern"); 
         }
        else{
            window.alert("You don't have this access");
        }
    }
    return(
        <>
        <h1 className="text-center my-1">Admin Login</h1>
        <hr />

        <form method="GET">
        <div className="form-group text-center jumbotron mx-5">
        
        <div >
                <label htmlFor="email">
                Email ID:
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here" className='mx-2'></input>
              </div>
              
              <br />
              <div className="form-group">
                <label htmlFor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" className='mx-1'></input>
              </div>
<br />
             <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit btn btn-outline-primary"
                onClick={getAccess} value="Log In"/>
              </div>
              </div>
        </form>
        
        </>
    )
} 

export default AdminLogin;