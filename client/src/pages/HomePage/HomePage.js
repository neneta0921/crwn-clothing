import { Profiler } from 'react';
import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePageStyles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({ id, phase, actualDuration });
      }}>
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
