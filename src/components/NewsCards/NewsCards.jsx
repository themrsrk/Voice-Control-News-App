import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'

const NewsCards = ({ articles }) => {
  const classess = useStyles();
  return (
    <Grow in>
      <Grid className={classess.container} container alignItems='stretch' spacing={3} >
        {/* spacing means the space between cards */}
        {articles.map((articles, index) => (
          <Grid key={index}item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            {/* xs and sm are screen sizes, and 12 and 6 are the values means a grid contain 12 rows so on xtra small screen only card will show, and on small screen 2 cards will be shown */}
            <NewsCard articles={articles} index={index}/>
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
