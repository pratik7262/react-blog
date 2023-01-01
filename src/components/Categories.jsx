import { Box, Typography } from '@mui/material'
import React from 'react'

export const Categories = () => {
  return (
   <Box width='1152px'height='48px' padding='24px' display='flex'justifyContent='space-between' alignItems='center'>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Technology</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Design</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Culture</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Business</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Politics</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Opinion</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Science</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Health</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Style</Typography>
        <Typography color='black' fontSize='0.875rem' variant='h6' component='a' href='#'>Travle</Typography>
   </Box>
  )
}
