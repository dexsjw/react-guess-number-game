import './App.css';
import GuessNumberGame from './components/GuessNumberGame';
import { ScoreHistoryContextProvider } from './context/ScoreHistoryContext';

function App() {
  return (
    <div>
      <ScoreHistoryContextProvider>
        <GuessNumberGame />
      </ScoreHistoryContextProvider>
    </div>
  );
}

export default App;
