import './App.css';
import { useLayoutEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'
import wordsToNumbers from 'words-to-numbers';
function App() {
  const classess = useStyles()
  const key = '09be61f3f36d97ab119d71ec7fd0f3b32e956eca572e1d8b807a3e2338fdd0dc/stage'
  // useEffect(()=>{
  const [newarticles, setNewarticles] = useState([])
  const [activearticle, setActivearticle] = useState(-1)
  useLayoutEffect(() => {
    function updateScreen(time) {
      alanBtn({
        //  key: process.env.REACT_APP_ALAN_SDK_KEY,
        key: key,
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewarticles(articles)
            setActivearticle(-1)
          }
          else if (command === 'highlight') {
            setActivearticle((prevactivearticle) => prevactivearticle + 1)
          } else if (command === 'open') {
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : null;
            const article = articles[parsedNumber - 1]

            if (parsedNumber > 20) {
              alanBtn().playText("Please try again")
            } else if (article) {
              window.open(article.url, '_blank')
              alanBtn().playText('Opening ...')
            }
          }
        }
      })
    }
    requestAnimationFrame(updateScreen);
  }, [])
  return (
    <>
      <div className={classess.logoContainer}>
        <img src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.png" alt="ALAN NEWS APP LOGO" className={classess.alanLogo} />
      </div>
      <NewsCards articles={newarticles} activearticle={activearticle} />
    </>
  );
}

export default App;
