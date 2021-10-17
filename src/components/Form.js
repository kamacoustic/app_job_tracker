import React, { useState } from 'react' 
import ReactDom from 'react-dom'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'


const Form = ({ closeForm }) => {

const [jobInfo, setJobInfo] = useState ({
    title: "" ,
    company: "",
    summary: "" ,
    date:"",
})

const handleChange = (e) => {
    setJobInfo({...jobInfo, [e.target.name]: e.target})
    console.log(jobInfo)
}

return ReactDom.createPortal (
    <div className="formContainer">
        <div className="head">
            <ClearRoundedIcon onClick={() => closeForm(false)} />
            <h3>Add Job details here!</h3>
        </div>

        <div className="formContent" id="formBox">
            <form className="form">
                <div>
                    <label htmlFor="title">Job title</label>
                    <input 
                        className="form-input"
                        type="text"
                        name="title"
                        value={jobInfo.title}
                        onChange={handleChange}
                        placeholder="Enter Job Title"
                        />
                </div>
                <div>
                <label htmlFor="company">Company</label>
                <input 
                    className="form-input"
                    type="text"
                    name="company"
                    value={jobInfo.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    />
                </div>
                <div>
                <label htmlFor="summary">Job Summary</label>
                <input 
                    className="form-input"
                    type="text"
                    name="summary"
                    value={jobInfo.summary}
                    onChange={handleChange}
                    placeholder="Enter Job Summary"
                    />
                </div>
                <div>
                <label htmlFor="date">Job title</label>
                <input 
                    className="form-input"
                    type="text"
                    name="date"
                    value={jobInfo.date}
                    onChange={handleChange}
                    placeholder="Enter date applied"
                    />
                </div>
                <button>Add</button>
            </form>
        </div>
    </div>, document.getElementById('burger')
)

}

export default Form