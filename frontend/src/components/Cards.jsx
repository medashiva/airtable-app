import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function OrdersCards({ count, title }) {
  return (
    <Card sx={{ minWidth: 275 }} style={{ float: 'left', width: '22%', margin: '1%' }} >
      <CardContent>
        <Typography sx={{ fontSize: 14, allign: 'center' }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {count}
        </Typography>
      </CardContent>

    </Card>
  );
}
