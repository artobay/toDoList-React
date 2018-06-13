import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';
// it will allow us to provide some type checking on properties that we pas to components

class Note extends Component {
//
constructor(props){
super(props);
this.noteContent= props.noteContent;
this.noteId= props.noteId;
}

render(props){
  return(
  // this will reperesent what gets injected to the dom
    <div className= "note fade-in">
    <p className="noteContent"> {this.noteContent}</p>
    </div>

  )
}

}
// we put all the props here
Note.PropTypes = {
  noteContent : propTypes.string

}

export default Note;
