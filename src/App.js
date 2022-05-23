import './App.css';
import {useLayoutEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

function App() {
  const key = '09be61f3f36d97ab119d71ec7fd0f3b32e956eca572e1d8b807a3e2338fdd0dc/stage'
  // useEffect(()=>{
    const [newarticles, setNewarticles] = useState([])
    useLayoutEffect(()=>{
      function updateScreen(time) {
       alanBtn({
        //  key: process.env.REACT_APP_ALAN_SDK_KEY,
        key : key,
         onCommand: ({command, articles})=>{
           if (command === 'newHeadlines'){
              setNewarticles(articles)
          }
         }
       })
      }
      requestAnimationFrame(updateScreen);
  }, [])
  return (
    <>
      <h1>ALAN AI NEWS APP</h1>
      <NewsCards articles={newarticles} />
    </>
  );
}

export default App;
