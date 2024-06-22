import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage";
import AssistDetails from "./assistMethods/AssistDetails"
import AssistantDetails from './assistantsMethods/AssistantDetails'
import About from "./About";
import CreateAssist from './assistMethods/CreateAssist'
import DeleteAssist from './assistMethods/DeleteAssist'
import AddAssistantSuccessfully from "./assistantsMethods/AddAssistantSuccessfully";
import CreateAssistant from "./assistantsMethods/CreateAssistant";
import GetAssistsById from './assistMethods/GetAssistsById';
import UpdateAssist from './assistMethods/UpdateAssist'
import DeleteAssistant from './assistantsMethods/DeleteAssistant';
import UpdateAssistant from "./assistantsMethods/UpdateAssistant";
import GetAssistantById from "./assistantsMethods/GetAssistantById";

export default function Navigators() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={< HomePage />} />
                <Route exact path="/about" element={<About />} />

                <Route exact path="/assist_details" element={< AssistDetails />} />
                <Route exact path="/assist_form" element={<CreateAssist />} />
                <Route exact path="/update_assist/:id" element={<UpdateAssist />} />
                <Route exact path="/create_new_assist" element={<CreateAssist />} />
                <Route exact path='/delete_assist/:id' element={<DeleteAssist />} />
                <Route exact path='/get_assist_by_id' element={<GetAssistsById />} />

                <Route exact path="/assistant_details" element={<AssistantDetails />} />
                <Route exact path='/delete_assistant/:id' element={<DeleteAssistant />} />
                <Route exact path='/update_assistant/:id' element={<UpdateAssistant />} />
                <Route exact path='/get_assistant_by_id/:id' element={<GetAssistantById />} />
                <Route exact path='/add_assistant_successfully' element={<AddAssistantSuccessfully />} />
                <Route exact path="/assistant_form" element={<CreateAssistant />} />


                {/* <Route exact path="/assist_details" element={< Bb />}/> */}
                {/* <Route exact path="/assistant_form" element={<CreateAssistantComponent/>}/> */}


            </Routes>
        </>
    );
};

