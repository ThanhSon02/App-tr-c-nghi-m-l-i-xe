import { useState } from 'react';
import './App.css'
import Start from "./components/Start";
import Quiz from './components/Quiz';

function App() {
  const [isStart, setIsStart] = useState(false)

  const startQuiz = () => {
    setIsStart(!isStart)
  }

  return (
    <div className="bg-gray-800">
      {/* Wellcome Page */}
      <Start
        isStart={isStart}
        startQuiz={startQuiz}
      />

      {/* Quiz Page */}
      <Quiz

      />
    </div>
  );
}

export default App;
