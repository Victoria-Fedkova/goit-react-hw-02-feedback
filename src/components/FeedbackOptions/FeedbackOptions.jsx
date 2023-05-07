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

export default FeedbackOptions