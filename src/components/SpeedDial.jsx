import { SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import { actions } from "../data/actions";
const SpeedDial = () => {
  return (
    <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    ))}
  </SpeedDial>
  )
}

export default SpeedDial