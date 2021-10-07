import React from "react";
import './AppliedJobs.css'
import Position from "./Position";

const AppliedJobs = () => {
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
        </div>
    )
}

export default AppliedJobs