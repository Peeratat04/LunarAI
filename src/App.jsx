import { useState } from 'react';
import './App.css';
import NavbarHead from './Navber';
import Gallery from './ResearchList';


// App Component
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavbarHead/>
      </div>

      <div>
        <Gallery />
      </div>
    </>
  );
}

export default App;
