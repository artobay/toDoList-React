import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';
// it will allow us to provide some type checking on properties that we pas to components

class Note extends Component {
//
constructor(props){
super(props);
this.message= "Hello from the Note component!"
}

render(props){
  return(
  // this will reperesent what gets injected to the dom
    <div>
    <h1> {this.message} </h1>
    </div>
  )
}

}
Note.PropTypes = {

}

export default Note;
