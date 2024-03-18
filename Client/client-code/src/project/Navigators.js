import {Route, Routes } from "react-router-dom"
import HomePage from "./HomePage";
import AssistDetails from "./AssistDetails"
import AssistantDetails from "./AssistantDetails"

export default function Navigators() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={< HomePage/>} />
                <Route exact path="/assist_details" element={< AssistDetails />}/>
                <Route exact path="/assistant_details" element={<AssistantDetails/>} />
            </Routes>
        </>
    );
};

