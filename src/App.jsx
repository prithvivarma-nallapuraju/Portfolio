import './App.css'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Loading loading={loading} />
      <div className={`main-page ${loading ? "fade-out" : ""}`}>
        <h1>Welcome to my app!</h1>
        <p>This is the main page.</p>
      </div>
    </>
  )
}

export default App
