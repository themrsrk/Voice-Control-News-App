import React from 'react'
import { Card, CardActionArea, CardActions, Typography, CardContent, CardMedia, Button } from '@material-ui/core'
import useStyles from './styles.js'
const NewsCard = ({ articles: { description, publishedAt, source, title, url, urlToImage }, index }) => {
  const classess = useStyles()
  return (
    <Card className={classess.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classess.media} image={urlToImage || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} />
        <div className={classess.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
          {/* //variant is just a small text */}
          {/* Every text in the material ui is the typography  */}
        </div>

        <Typography className={classess.title} gutterBottom variant='h5'>{title}</Typography>
        {/* gutterBottom is just like a padding and margin at the bottom  */}

        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
        </CardContent>

        <CardActions className={classess.cardActions}>
          <Button size='small' color='primary'>Learn More</Button>
          <Typography variant='h5' color='textSecondary'>{index + 1}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default NewsCard