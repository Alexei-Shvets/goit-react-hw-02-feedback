import React, { Component, Fragment } from 'react';

//куски секций и компонентов
import SectionTitle from './SectionTitle/SectionTitle';
import Feedback from './Feedback';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

//стилистика общего контейнера
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //функция по увеличению значения новой копии массива state на 1 при нажатии на кнопку good или neutral или bad.
  //Event - это накопительный массив, имеющий первоначальное значение state и сумму всех нажатий.
  //state - это изначальный массив с нулевыми значениями (строки 7-11)
  //[event] - это новый массив на базе стейта с нулевыми значениями к которому мы приплюсовываем при нажатии на кнопки, 
  //который после ретерна передает новое значение в ивент на 18 строке. 
  handleIncrement = event => {
    this.setState(state => {
      return { [event]: state[event] + 1 };      
    }    
    );
  }
  
  //функция по суммированию значений, которые появились на 18 строке в ивенте.
  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad
  }
  //функция по подсчету позитивных оценок
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage)
  }


  render() {
    const { good, neutral, bad } = this.state;
    const variation = good > 0 || neutral > 0 || bad > 0;
    return (
      <Fragment>
        <Container>
        <SectionTitle title="Please leave Feedback">
        <Feedback 
            options={this.state}
            handleIncrement ={this.handleIncrement}
          />
        </SectionTitle>
        <SectionTitle title="Statictics">
          {!variation ?
            <Notification message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            //вызов в тотале, потому как в фидбэк жсх в баттоне кинул функцию
            total={this.countTotalFeedback()}
            positiveTotal={this.countPositiveFeedbackPercentage()}              
        />}              
          </SectionTitle>
          </Container>
    </Fragment>)
  }
}
export default App;



