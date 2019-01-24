import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.</strong>&nbsp;
        Вопрос викторины?
      </span>
      <small>3 из 20</small>
    </p>

    <AnswersList 
      answers={props.answers}
    />
  </div>
)

export default ActiveQuiz