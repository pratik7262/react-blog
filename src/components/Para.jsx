import { Typography } from '@mui/material'
import React from 'react'

const Para = (props) => {
  return (
    <Typography
        variant="body1"
        fontWeight={400}
        fontSize="1rem"
        lineHeight="1.5"
        mb="16px"
        component="p"
      >{props.content}</Typography>
  )
}

export default Para