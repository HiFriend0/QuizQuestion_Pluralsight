import React, { Component } from 'react'

class QuizQuestionButton extends Component {

    constructor(props){
        
        super(props);
        this.state={
               
        }
      }

       handleClick(){
        this.props.clickHandler(this.props.button_text);
         
    }
    handleClick2(){
    //    this.props.clickHandler(this.props.button_text);
         
    }
    render(props) {

       

      return (
            <li>
            <button  onClick={this.handleClick.bind(this)} > 
            { this.props.button_text}
            </button>
            </li>
 
        )
    }

  }

export default QuizQuestionButton