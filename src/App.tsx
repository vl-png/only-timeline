import { Timeline } from './components/Timeline';
import { demoSegments } from './components/Timeline/model/mocks';
import styles from './index.module.scss';

const App = () => {
  return (
    <main className={styles.container}>
      <Timeline segments={demoSegments} />
    </main>
  );
};

export default App;