import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import InfoIcon from '@mui/icons-material/Info'
import PsychologyIcon from '@mui/icons-material/Psychology'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import HomeIcon from '@mui/icons-material/Home'
import WidgetsIcon from '@mui/icons-material/Widgets'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import { useNavigate, useLocation } from 'react-router-dom'

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
  { icon: <InfoIcon />, name: 'About Me', path: '/about-me' },
  { icon: <WorkHistoryIcon />, name: 'Experience', path: '/experience' },
  { icon: <PsychologyIcon />, name: 'Projects', path: '/projects' },
  { icon: <ContactPageIcon />, name: 'Contact', path: '/contact' },
  { icon: <HomeIcon />, name: 'Home', path: '/' },
]

const NavMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [fabIcon, setFabIcon] = useState(<WidgetsIcon />)

  const configActions = () => {
    const filteredDisplay = actions.filter(e => e.path !== location.pathname)
    return filteredDisplay
  }

  return (
    <Box sx={{ height: '100%', width: '10%', marginLeft: '2rem' }}>
      <Spacer />
      <SpeedDialContainer>
        <SpeedDial
          ariaLabel="Menu Navigation"
          icon={fabIcon}
          onOpen={() => setFabIcon(<WidgetsOutlinedIcon />)}
          onClose={() => setFabIcon(<WidgetsIcon />)}
          direction="up"
        >
          {configActions().map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              arrow
              placement="right"
              tooltipTitle={action.name}
              onClick={() => navigate(action.path)}
            />
          ))}
        </SpeedDial>
      </SpeedDialContainer>
    </Box>
  )
}

export default NavMenu
