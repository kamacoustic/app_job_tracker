import react from "react"; 
import "./Position.css"

const Position = ({ title, company, summary, date}) => {



    return (
        <div className="pos_container">
            <div className="pos_content">
                <h1 id="title">{title}</h1>
                <h2 id="company">{company}</h2>
                <p id="summary">{summary}</p>
                <p id="date"> {`Applied on: ${date}`}</p>
            </div>
        </div>
    )
}

export default Position