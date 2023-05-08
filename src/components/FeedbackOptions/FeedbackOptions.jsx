import PropTypes from 'prop-types';
import {
  FeedbackWrapper,
  FeedbackOptionsBtn,
  FeedbackMessage,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, message }) => {
  const smiles = {
    good: '😁',
    neutral: '😐',
    bad: '😢',
  };

  return (
    <>
      <FeedbackWrapper>
        {options.map(key => (
          <FeedbackOptionsBtn
            key={key}
            type="button"
            name={key}
            onClick={onLeaveFeedback}
          >{`${smiles[key]} ${key} `}</FeedbackOptionsBtn>
        ))}
      </FeedbackWrapper>
      {message && <FeedbackMessage>{message}</FeedbackMessage>}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default FeedbackOptions;
