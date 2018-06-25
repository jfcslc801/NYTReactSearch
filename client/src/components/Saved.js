import React from "react";

const Saved = props =>
  <div className="card">
      <hr/>
      <h4>
        <em>{props.title}</em>
      </h4>

      <p>Date Published: {props.date}</p>

      <span className="btn-group">
        <a href={props.url} target="_blank">
          <button className="btn blue ">View Article</button>
        </a>
        <button className="btn red" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
      </span>
  </div>

export default Saved;
