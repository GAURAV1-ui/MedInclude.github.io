import React from 'react';
import Card1 from '../UI/Card1';
import classes from './TextContainer.module.css'

const TextContainer = () => {

const current = new Date();
// const text = current.toString();
// var day = current.toLocaleString('default', { day: 'long' });
const day = current.toDateString();
// const month = current.toLocaleString('default', { month: 'long' });
// const date = `${current.getMonth()} ${current.getDate()},${current.getFullYear()}`;

  return (
    <Card1>
        <div className= {classes.container}>
        <div>
            <h3>Test Result</h3>
        </div>
        <div>
            {day}
        </div>
        </div> 
        <br/>
        <section>
            <p>Understanding medical information is essential to improving patient engagement and envolvement and involvement in thier own care.</p>
        </section>
     
    </Card1>
  )
}

export default TextContainer