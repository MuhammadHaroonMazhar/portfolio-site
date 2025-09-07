import Loader from './views/loader/Loader'
import './App.css'
import { useState } from 'react';
import Home from './views/home/Home';
function App() {

  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
        {isLoading && (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      )}
      {!isLoading && <Home />}
    </>
  )
}

export default App
