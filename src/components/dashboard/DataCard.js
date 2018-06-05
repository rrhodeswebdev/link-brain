import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function DataCard(props) {
  return(
    <Card style={{width: '300px', textAlign: 'center', margin: '0 20px'}}>
      <CardContent>
        <Typography variant='title'>
          {props.title}
        </Typography>
        <Typography variant='display1' style={{textAlign: 'center'}}>
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DataCard;