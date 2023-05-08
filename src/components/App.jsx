import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { Container } from './App.styled';

let message;

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.createMessage(name); // виклик методу createMessage що виводить повідомлення при натисканні на кнопку
  };
  createMessage = name => {
    if (name === 'bad') {
      message = 'Sorry to heard that 😢! Thank you for the feedback';
    } else if (name === 'neutral') {
      message = 'OK! Thank you 🙂';
    } else {
      message = 'Great! Thank you 😍';
    }
    setTimeout(() => {
      message = '';
      this.setState(prevState => ({ ...prevState }));
    }, 1500); // костиль для ререндеру message, щоб зникало повідомлення, бо по умові ДЗ не можна змінювати state
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
            message={message}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive ? positive : 0}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
