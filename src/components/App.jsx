import React, {Component} from "react";
import Section from "./Section";
import FeedbackOptions from './FeedbackOptions'
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
totalFeedbacks = ()=>{
  return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
}

positiveFeedbacks =()=>{
return this.state.good / this.totalFeedbacks() * 100;
}

handleLeaveFeedback=(e)=>{
  const {name} = e.currentTarget; 

  this.setState(prevState =>({
    [name]: prevState[name] +1,
  }));
}

render(){
const {good, neutral, bad} = this.state;
const total = this.totalFeedbacks();
const positive = Math.round(this.state.good / this.totalFeedbacks() * 100);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave your feedback">
        <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={this.handleLeaveFeedback}/>
      </Section>

      <Section title="Statistics">
        {this.totalFeedbacks() > 0 
        ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive? positive: 0}/>)
        : (<Notification message="There is no feedback"></Notification>)}
      </Section>
      
      
    </div>
  );

}
};

export default App;