import PropTypes from 'prop-types';
import {FeedbackList, FeedbackItem, Feedbacklabel,FeedbackQuantity, FeedbackInfo} from './Statistics.styled'

const Statistics =({good, neutral, bad, total, positivePercentage})=>{
    return (
<>
        <FeedbackList> 
            <FeedbackItem>
            <Feedbacklabel>Good</Feedbacklabel>
            <FeedbackQuantity>{good}</FeedbackQuantity>
            </FeedbackItem>
            <FeedbackItem>
            <Feedbacklabel>Bad</Feedbacklabel>
            <FeedbackQuantity>{bad}</FeedbackQuantity>
            </FeedbackItem>
            <FeedbackItem>
            <Feedbacklabel>Neutral</Feedbacklabel>
            <FeedbackQuantity>{neutral}</FeedbackQuantity>
            </FeedbackItem>
        </FeedbackList>

        <FeedbackInfo>Total: {total}</FeedbackInfo>
        <FeedbackInfo>Positive feedback: {positivePercentage}%</FeedbackInfo>

        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };


export default Statistics;