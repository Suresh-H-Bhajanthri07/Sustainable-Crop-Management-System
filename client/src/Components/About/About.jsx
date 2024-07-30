import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';
import './About.css'

import { useTranslation } from 'react-i18next';

export default function About() {

  const { t } = useTranslation();

  return (
    <Timeline position="alternate">
      <div className='top-heading' id="ABOUT">
      <div>{t('about.title')}</div>    
      <div>{t('about.growthJourney.heading')}</div>
      </div>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          align="right"
          variant="body2">
          <Typography fontSize={{xs:"1.3rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            2023-2024
          </Typography>
          <Typography fontSize={{xs:"1.25rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>{t('about.growthJourney.timeline.ourhumblebeginning')}</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>{t('about.growthJourney.timeline.asmallidea')} </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:5}}>   
             <PlayCircleFilledIcon sx={{ fontSize:"65px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent 
          sx={{ m: 'auto 1' }}
          variant="body2">
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
            {t('about.growthJourney.timeline.april2024')}
          </Typography>
          <Typography  fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold',fontSize:'25px'}}>{t('about.growthJourney.timeline.aStartupIsBorn')}</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>{t('about.growthJourney.timeline.startupDescription')}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}>
            <AccountBalanceIcon sx={{ fontSize:"73px",bgcolor: '#f7c81e',borderRadius:"50%" }}/> 
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>
          {t('about.growthJourney.timeline.april2024')}
          </Typography>
          <Typography fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>{t('about.growthJourney.timeline.transitionToFullService')}</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>{t('about.growthJourney.timeline.serviceBegins')}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}} >
          <AdbIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector sx={{height: "65px"}} />
       

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          <Typography fontSize={{xs:"1.34rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold',fontSize:'23px'}}>
            {t('about.growthJourney.timeline.july2026')}
          </Typography>
          <Typography fontSize={{xs:"1.23rem",sm:"1.65rem",md:"1.7rem",lg:"1.7rem",xl:"1.7rem"}} style={{fontWeight:'bold'}}>{t('about.growthJourney.timeline.phaseTwoExpansion')}</Typography>
          <Typography fontSize={{xs:"14px",sm:"16px",md:"16px",lg:"17px",xl:"17px"}} style={{fontWeight:'lighter',fontFamily:'inherit'}}>{t('about.growthJourney.timeline.expansionDescription')}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:4.8}}  >
        <OpenWithIcon sx={{ fontSize:"78px",bgcolor: '#f7c81e',borderRadius:"50%" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }}
          align="right"
          variant="body2">
          <Typography variant="h6" component="span" style={{fontWeight:'bold',fontSize:'23px'}}>
            {t('about.growthJourney.timeline.bepart')}
          </Typography>
          
        </TimelineOppositeContent>      
        <TimelineSeparator>
          <TimelineConnector sx={{height:"65px"}}/>
          <TimelineDot sx={{boxShadow: '1px 2px 9px #A39EB7', bgcolor: '#f7c81e',padding:5}}>
               <FiberManualRecordIcon sx={{padding:0.8 ,fontSize:"65px",color: '#f7c81e',borderRadius:"50%" }}/>
             
             
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}