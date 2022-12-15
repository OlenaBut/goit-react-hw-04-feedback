import  { useState } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section"; 
import { Notification } from "components/Notification/Notification";
import css from 'components/WidgetFeedback/WidgetFeedback.module.css'

function WidgetFeedback () {     
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);       
           
  
const handleClickButton  = e => {
  const option = e.target.innerText;
  
    console.log(option);
  switch (option) {
    case 'good':
      setGood (prevState => prevState + 1);
      break;
    
    case 'neutral':
      setNeutral (prevState => prevState + 1);
      break;
    
    case 'bad':
      setBad (prevState => prevState + 1);
      
      break;
    
     default:
        console.log(`No option called ${option}`);
       
  }
  };
    
   const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
  
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.floor((good / (countTotalFeedback())) * 100);
    }

    return `${result}`;
     
  };

      console.log(countTotalFeedback());
return (<>
  <div className={css.widgetFeedbackContainer} >
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleClickButton}
      />
    </Section>
    {countTotalFeedback() === 0 ? (
      <Notification message="There is no feedback" />) : (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedback()}
        />
            
      </Section>)}
  </div>
</>);
    }

export default WidgetFeedback;