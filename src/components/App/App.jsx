import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import { Container } from './App.styled';

const App = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const handleClick = e => {
    const { value } = e.target;

    if (value === 'Good') {
      return setGood(prevValue => prevValue + 1);
    }
    if (value === 'Neutral') {
      return setNeutral(prevValue => prevValue + 1);
    }
    if (value === 'Bad') {
      return setBad(prevValue => prevValue + 1);
    }
  };

  const total = Good + Neutral + Bad;

  const positivePersantage = Math.round((Good / total) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ Good, Neutral, Bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {Good || Neutral || Bad ? (
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={total}
            positivePercentage={positivePersantage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
