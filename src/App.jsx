import Booka from './Components/Booka';
import {books} from './constants/mockData'
import Layout from './layouts/Layout';

function App() {
  return (
    <>
      <Layout>
        <Booka />
      </Layout>
    </>
  );
}

export default App;
