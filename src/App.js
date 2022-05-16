import Home from './components/Home/Home';
import {ContextProvider} from '../src/context/Context'

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
