import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function DataCard(props) {
  return(
    <Card>
      <CardContent>
        <Typography variant='headline'>
          {props.title}
        </Typography>
        <Typography>
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DataCard;