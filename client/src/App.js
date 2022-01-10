import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { constants } from './constants';

function App() {
  return (
    <div className='layout'>
      <Header />

      <main>{constants.content}</main>
      <Footer />
    </div>
  );
}

export default App;
