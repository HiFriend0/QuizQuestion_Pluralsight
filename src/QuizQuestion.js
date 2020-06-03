import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    constructor(props){
        super(props);
        this.state={
         isError: false
        }
      }

       handleClick(buttonText){
        if ( buttonText === this.props.quiz_question.answer) {
          this.props.showNextQuestionHandler() ;
          

          this.setState(state => ({
            isError : false
          }));

        }
      else 
      {

        this.setState(state => ({
            isError : true
          }));


    }
      }

    render() {
     
   return (

        <main>

        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
       
        <section className="buttons">
          <ul>
          {
            this.props.quiz_question.answer_options.map((item,index) => (
            <QuizQuestionButton clickHandler = {this.handleClick.bind(this)} key= {index} button_text = {item}></QuizQuestionButton>
            ))
         }
         </ul>
        </section>
       
       <div>

       { this.state.isError ? <div> Sorry, that's not right </div> :  <div>  </div>}
       </div>
      
      </main>
        
       )
    }

  }

export default QuizQuestion