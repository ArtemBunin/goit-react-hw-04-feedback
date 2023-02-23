import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Box } from './App.styled';

export const App =()=>{
  const [good,setGood]= useState(0)
  const [neutral,setneutral]= useState(0)
  const [bad,setbad]= useState(0)

  const onHandlClick = ev => {
switch(ev.target.name){
  case 'good':{
    setGood(prev => prev + 1)
   
    break
  }
  case'neutral':{
    setneutral(prev => prev + 1
      )
    ;
    break
  }
  case'bad':{
    setbad(prev => prev + 1)
    break
  }
  default:return;
}}
const options =['good','neutral','bad'];
 const countTotal = () => good +bad +neutral;
  const countPositivFeedbeack = () =>
    ((good/countTotal()) * 100).toFixed(0);
;

return (  <Box>
  <Section title={'Please leave feedback'}>
    <FeedbackOptions
      options={options}
      onLeaveFeedback={onHandlClick}
    />
  </Section>

  <Section title={'Statistics'}>
    {countTotal() === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotal()}
        positivePercentage={countPositivFeedbeack()}
      />
    )}
  
  </Section>
</Box>)
}

// export class AppOld extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onHandlClick = propName => {
  
//     this.setState(prevState =>
//       ({[propName.target.name]: prevState[propName.target.name] + 1
      
//     }));
//   };
//   countTotal = () => this.state.good + this.state.bad + this.state.neutral;

//   countPositivFeedbeack = () =>
//     ((this.state.good / this.countTotal()) * 100).toFixed(0);
//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     return (
//       <Box>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onHandlClick}
//           />
//         </Section>

//         <Section title={'Statistics'}>
//           {this.countTotal() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotal()}
//               positivePercentage={this.countPositivFeedbeack()}
//             />
//           )}
        
//         </Section>
//       </Box>
//     );
//   }
// }