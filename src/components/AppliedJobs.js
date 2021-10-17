import React, { useState } from "react";
import './AppliedJobs.css'
import Position from "./Position";
import Form from './Form'

const AppliedJobs = () => {

    const [openForm, setOpenForm ] = useState(false)

    const handleFormOpen = () => {
        setOpenForm(true)
    }


    return (
        <div className="appliedjobs">
            
            
            <Position
                title="Trainer"  
                company="SIC INC."
                summary="Seeking technical trainer" 
                date="10-6-2021"
            />
            <Position 
                title="Jr. Front End Developer"  
                company="Option Select Inc." 
                summary="Looking for 15 years experience with ReactJS" 
                date="10-6-2021"
            />
            <button className="addPositionButton" onClick={handleFormOpen}>Add Position</button>
            {openForm && <Form closeForm={setOpenForm} /> }
        </div>
    )
}

export default AppliedJobs