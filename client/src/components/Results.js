import React from "react";

const Results = props =>
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div className="card">
    <div>
      <hr />
      <h4>
        <em>{props.title}</em>
      </h4>

      <p>Date Published: {props.date}</p>

      <span className="btn-group">
        <a href={props.url} target="_blank">
          <button className="btn viewArticleButton ">View Article</button>
        </a>
        <button className="btn saveButton" onClick={() => props.handleSaveButton(props._id)}>Save</button>
      </span>
    </div>

    
  </div>

export default Results;
