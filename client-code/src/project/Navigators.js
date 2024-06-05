import {Route, Routes } from "react-router-dom"
import HomePage from "./HomePage";
import AssistDetails from "./AssistDetails"
import AssistantDetails from "./AssistantDetails"
import AssistantForm from "./form/AssistantForm"
import AssistForm from "./form/AssistForm"
import Aa from './AA';
import Bb from './BB';
import Search from '../project/assistMethods/GetById';

export default function Navigators() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={< HomePage/>} />
                {/* <Route exact path="/assist_details" element={< AssistDetails />}/> */}
                <Route exact path="/assist_details" element={< Bb />}/>

                <Route exact path="/assistant_details" element={<AssistantDetails/>} />
                <Route exact path="/assistant_form" element={<AssistantForm/>}/>
                <Route exact path="/assist_form" element={<AssistForm/>}/>
                <Route exact path="/search_assist_byID" element={< Search />}/>
                
            </Routes>
        </>
    );
};

