import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import InfoIcon from '@mui/icons-material/Info'
import PsychologyIcon from '@mui/icons-material/Psychology'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import WidgetsIcon from '@mui/icons-material/Widgets'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'

const Spacer = styled(Box)({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
})

const SpeedDialContainer = styled(Box)({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
})

const actions = [
  { icon: <InfoIcon />, name: 'About Me' },
  { icon: <WorkHistoryIcon />, name: 'Experience' },
  { icon: <PsychologyIcon />, name: 'Projects' },
  { icon: <ContactPageIcon />, name: 'Contact' },
]

const NavMenu = () => {
  const [fabIcon, setFabIcon] = useState(<WidgetsIcon />)

  return (
    <Box sx={{ height: '100%', width: '20%' }}>
      <Spacer />
      <SpeedDialContainer>
        <SpeedDial
          ariaLabel="Menu Navigation"
          icon={fabIcon}
          onOpen={() => setFabIcon(<WidgetsOutlinedIcon />)}
          onClose={() => setFabIcon(<WidgetsIcon />)}
          direction="up"
        >
          {actions.map(action => (
            <SpeedDialAction key={action.name} icon={action.icon} arrow placement="right" tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </SpeedDialContainer>
    </Box>
  )
}

export default NavMenu
