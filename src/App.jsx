import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <>
      <Header />
      <Main setIsPressed={setIsPressed} isPressed={isPressed}/>
      <Footer isVisible={isPressed} />
    </>
  );
}

export default App;
