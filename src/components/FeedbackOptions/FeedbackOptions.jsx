import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => { 
    return(
    <div>
        {Object.keys(options).map(key =>(
        <button 
        key={key} 
        type="button" 
        name={key} 
        onClick={onLeaveFeedback}
        >{key}</button>))}
    </div>
    )
}

 FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;