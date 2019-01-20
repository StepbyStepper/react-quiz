import React from 'react'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.</strong>&nbsp;
        Вопрос викторины?
      </span>
      <small>3 из 20</small>
    </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
  </div>
)

export default ActiveQuiz