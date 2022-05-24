import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'

const NewsCards = ({ articles, activearticle }) => {
  const classess = useStyles();
  const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classess.container} container alignItems='stretch' spacing={3} >
          {infoCards.map((infoCard, index) =>(
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} className={classess.infoCard}>
              <div className={classess.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5">{infoCard.title}</Typography>
                {
                  infoCard.info ?
                    <Typography variant="h6">
                      <strong>
                        {infoCard.title.split(' ')[2]}
                      </strong> <br />
                      {infoCard.info}
                    </Typography>: null
                }
                <Typography variant="h6">Try Saying: <br/><i>{infoCard.text}</i></Typography>
              </div> 
            </Grid> 
          ))}
        </Grid>
      </Grow>
    )
  }
  return (
    <Grow in>
      <Grid className={classess.container} container alignItems='stretch' spacing={3} >
        {/* spacing means the space between cards */}
        {articles.map((articles, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            {/* xs and sm are screen sizes, and 12 and 6 are the values means a grid contain 12 rows so on xtra small screen only card will show, and on small screen 2 cards will be shown */}
            <NewsCard articles={articles} activearticle={activearticle} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
