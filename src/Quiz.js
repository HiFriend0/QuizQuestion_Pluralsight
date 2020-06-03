import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
             quiz_position : 1,
              
        }
      }

        showNextQuestion(){

        this.setState(state => ({
          quiz_position : state.quiz_position +1 
        }));
  
      }

    render(props) {

      const isQuizEnd = ((this.state.quiz_position-1) === quizData.quiz_questions.length) ;
      let our_component ;

/*
      if (!isQuizEnd) {
        our_component = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />

      }
       else {
        our_component =  <QuizEnd />

      }*/

      return (
      <div>
      {
        isQuizEnd ?  <QuizEnd /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />

      }
         { our_component }
      </div>
        )
    }

  }

export default Quiz