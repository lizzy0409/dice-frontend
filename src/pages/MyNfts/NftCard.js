import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function NftCard({ data }) {
  return (
    <Card sx={{ bgcolor: grey[900] }}>
      <CardMedia
        component="img"
        src={data.image_thumbnail_url || "/assets/images/nft_placeholder.webp"}
        alt="placeholder"
        height={260}
      />
      <CardContent>
        <Typography fontSize={14} color={grey[500]}>{data.collection.name}</Typography>
        <Typography fontSize={16} color={grey[100]}>{data.name || data.token_id}</Typography>
      </CardContent>
    </Card>
  );
}