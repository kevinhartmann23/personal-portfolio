import { Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import SchoolIcon from '@mui/icons-material/School'
import CodeIcon from '@mui/icons-material/Code'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import DownloadIcon from '@mui/icons-material/Download'
import workHistory from './workHistory'

import './Experience.css'

const ExContainer = styled(Box)({
  height: '100 %',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
})

const TitleTypo = styled(Typography)({
  textDecoration: 'underline',
  textTransform: 'uppercase',
})

const Experience = () => {
  const determineIcon = (icon: string) => {
    if (icon === 'school') {
      return <SchoolIcon />
    } else if (icon === 'cs') {
      return <CodeIcon />
    } else if (icon === 'food') {
      return <RestaurantMenuIcon />
    } else {
      return
    }
  }

  return (
    <ExContainer className="experience-container">
      <Box sx={{ height: 'auto', textAlign: 'center', alignItems: 'center' }}>
        <TitleTypo variant="h3">Experience.</TitleTypo>
      </Box>
      <Box>
        <Timeline>
          {workHistory.map((e: any, i: any) => {
            return (
              <TimelineItem key={i}>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="secondary">
                  {e.company}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={i === 0 ? 'secondary' : 'primary'} variant={i === 0 ? 'filled' : 'outlined'}>
                    {determineIcon(e.icon)}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {e.title}
                  </Typography>
                  <Typography>{e.duration}</Typography>
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </Box>
      <Box>
        <a className="download-link" href={require('./KH_RESUME_2022_v2.pdf')} download="KevinHartmann_Resume.pdf">
          <Button variant="contained" color="secondary" startIcon={<DownloadIcon />}>
            Download Resume
          </Button>
        </a>
      </Box>
    </ExContainer>
  )
}

export default Experience
