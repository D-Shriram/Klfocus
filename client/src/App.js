import React, { createContext, useReducer } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Grievance from './components/Grievance';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/Myprofile';
import Logout from './components/Logout';
import Error from './components/Error';
import UpdateDocs from './components/UpdateDocs';
import GrievanceStatus from './components/GrievanceStatus';
import Education from './components/Education';
import Health from './components/Health';
import Service from './components/Service';
import Footer from './components/Footer';
import AcadamicsProgressions from './components/AcademicsProgression'
import ERPorLMS from './components/ERPorLMS';
import ClassroomAmenties from './components/ClassroomEminities';
import SocialImmersiveLearning from './components/SocialImmersiveLearning';
import GolbalChallenges from './components/GlobalChallenges';
import PlacementRelation from './components/PlacementRelations';
import HostelAccommodation from './components/HostelAccommodation';
import TransportationServices from './components/TransportationServices';
import CampusSecurityConcern from './components/CampusSecurity';
import CareerCounselling from './components/CareerCounselling';
import PersonalConcernandSelfDevelopment from './components/PersonalConcern';
import Wel from './components/Wel';
import Slideshow from './components/Slideshow';







import { initialState, reducer } from "./reducer/UseReducer";
import AdminLogin from './components/AdminLogin';
import Myprofile from './components/Myprofile';
import AboutUs from './components/AboutUs';
import { platform } from 'os';


//we need to create context API for toggling
export const UserContext = createContext();

  const Routing = ()=>{
    return(
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/grievance" component={Grievance}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/myprofile" component={Myprofile}/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/AdminLogin" component={AdminLogin}/>
      <Route exact path="/education" component={Education}/>
      <Route exact path="/health" component={Health}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/acadamicsprogression" component={AcadamicsProgressions}/>
      <Route exact path="/erporlms" component={ERPorLMS}/>
      <Route exact path="/classroomamenties" component={ClassroomAmenties}/>
      <Route exact path="/socialimmersivelearning" component={SocialImmersiveLearning}/>
      <Route exact path="/globalchallenges" component={GolbalChallenges}/>
      <Route exact path="/placementrelation" component={PlacementRelation}/>
      <Route exact path="/hostelaccommodation" component={HostelAccommodation}/>
      <Route exact path="/transportationservices" component={TransportationServices}/>
      <Route exact path="/campussecurity" component={CampusSecurityConcern}/>
      <Route exact path="/careercounselling" component={CareerCounselling}/>
      <Route exact path="/personalconcern" component={PersonalConcernandSelfDevelopment}/>
      <Route exact path="/wel" component={Wel}/>
      <Route exact path="/aAbBcC" component={GrievanceStatus}/>
      <Route exact path="/aAbBcC/updatedocs" component={UpdateDocs}/>
      <Route exact path="/" component={Slideshow}/>
      <Route component={Error} />
      </Switch>
    );
  }
  
const App=()=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return(
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <Routing />
    <Footer />

    </UserContext.Provider>
    </>
  )
};

export default App;
