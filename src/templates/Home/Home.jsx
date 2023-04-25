import { Heading } from '../../components/Heading';
import * as styles from './styles';

function Home() {
  return (
    <div className="app">
      <styles.ContainerHome>
        <Heading>O texto que eu quero</Heading>
      </styles.ContainerHome>
    </div>
  );
}

export default Home;
