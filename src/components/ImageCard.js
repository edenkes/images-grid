import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ImageCard({image}) {
    const {description, likes, url} = image
    return (
        <Card sx={{minWidth: 200, maxWidth: 300}}>
            <CardMedia
                component="img"
                height="140"
                image={url}
                alt="image"
            />
            <CardContent>
                <Typography minHeight={60} sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <FavoriteIcon/>
                <p>{likes}</p>
            </CardActions>
        </Card>
    );
}
