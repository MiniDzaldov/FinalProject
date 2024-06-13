import {Route, Routes } from "react-router-dom"
import HomePage from "./HomePage";
import AssistDetails from "./AssistDetails"
import AssistantDetails from "./AssistantDetails"
import AssistantForm from "./form/AssistantForm"
import AssistForm from "./form/AssistForm"
import Bb from './BB';
import SearchAssistById from './assistMethods/GetAssistsById';
import About from "./About";
import CreateAssist from './assistMethods/CreateAssist'
import DeleteAssist from './assistMethods/DeleteAssist'
import AddAssistantSuccessfully from "./assistantsMethods/AddAssistantSuccessfully";
import CreateAssistantComponent from "./assistantsMethods/CreateAssistant";
import CreateAssistant from "./assistantsMethods/CreateAssistant";

export default function Navigators() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={< HomePage/>} />
                <Route exact path="/assist_details" element={< AssistDetails />}/>
                {/* <Route exact path="/assist_details" element={< Bb />}/> */}
                <Route exact path="/assistant_details" element={<AssistantDetails/>} />
                <Route exact path="/assistant_form" element={<CreateAssistant/>}/>
                {/* <Route exact path="/assistant_form" element={<CreateAssistantComponent/>}/> */}

                <Route exact path="/assist_form" element={<AssistForm/>}/>
                <Route exact path='/search_assist_byID/:assistId' element={< SearchAssistById />}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/create_new_assist" element={<CreateAssist/>}/>
                <Route exact path='/delete_assist/:assistId' element={<DeleteAssist/>}/>
                <Route exact path='/add_assistant_successfully' element={<AddAssistantSuccessfully/>}/>

                
                
            </Routes>
        </>
    );
};

