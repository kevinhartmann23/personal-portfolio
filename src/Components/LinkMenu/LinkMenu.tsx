import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import LinkIcon from '@mui/icons-material/Link'
import PhonelinkIcon from '@mui/icons-material/Phonelink'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import ShareIcon from '@mui/icons-material/Share'

const Spacer = styled(Box)({
  height: '50%',
})

const SpeedDialContainer = styled(Box)({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub', link: 'https://github.com/kevinhartmann23' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/kevin-hartmann/' },
  { icon: <TwitterIcon />, name: 'Twitter', link: 'https://twitter.com/kevinhartmann23' },
  { icon: <ShareIcon />, name: 'Share', link: '' },
]

const LinkMenu = () => {
  const [fabIcon, setFabIcon] = useState(<PhonelinkIcon />)

  return (
    <Box sx={{ height: '100%', width: '20%' }}>
      <SpeedDialContainer>
        <SpeedDial
          ariaLabel="Social Media Links for Kevin Hartmann"
          icon={fabIcon}
          onOpen={() => setFabIcon(<LinkIcon />)}
          onClose={() => setFabIcon(<PhonelinkIcon />)}
          direction="down"
          FabProps={{
            color: 'secondary',
          }}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              arrow
              onClick={() => window.open(action.link, '_blank')}
            />
          ))}
        </SpeedDial>
      </SpeedDialContainer>
      <Spacer />
    </Box>
  )
}

export default LinkMenu
