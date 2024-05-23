"use client";
import * as React from 'react';
import { Grid, Typography, Divider, } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Markdown from 'markdown-to-jsx';

export default function Faqs({ faqs }: any) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container
      justifyContent={"space-evenly"}
      alignItems={"space-evenly"}
      sx={{
        backgroundColor: 'rgba(241, 245, 249, 1)',
        py: { xs: 2, md: 4 }
      }}
    >
      <Grid container item xs={10} md={3}
        pt={3} pb={2}
        direction={'column'}
      >
        <Grid container item py={1}>
          <Typography variant="h6"
            color={'textColor.faq'}
            sx={{ fontWeight: '600' }}
          >FAQs</Typography>
        </Grid>
        <Grid container item>
          <Typography variant="body1"
            color={'textColor.faq'}
          >
            Can’t find the answer you’re looking for? Reach out to our support team.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={11} md={7}
        my={4}
      >
        {faqs.map((faq: any, i: number) => {
          return (
            <>
              {i != 0 && <Grid item justifyContent="center"
                alignItems="center"
                xs={10.9} >
                <Divider orientation="horizontal" color="white" />
              </Grid>
              }
              <Accordion expanded={expanded === `panel${i}`} sx={{
                width: "100%",
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'rgba(241, 245, 249, 1)',
                '&:before': {
                  display: 'none',
                },

              }} onChange={handleChange(`panel${i}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  < Typography variant='body1'
                    sx={{
                      width: '85%',
                      flexShrink: 0,
                      fontWeight: '600'

                    }}
                    color={'textColor.faq'}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  < Typography mt={0} mb={1} variant='body1'
                    sx={{ width: '90%', flexShrink: 0 }}
                    color='secondary.main'
                  >
                    {/* <Markdown>{faq.answer}</Markdown> */}
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>)
        })}
      </Grid>
    </Grid>
  )
}
