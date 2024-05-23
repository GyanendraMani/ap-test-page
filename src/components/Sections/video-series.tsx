import { Grid, Typography, Divider, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import convertHoursToMinutes from '@/utils/convertHoursToMinutes';

export default function VideoSeries({ videoList }: any) {
  return (
    <Grid container>
      <Grid container item
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ py: { xs: 1, md: 4 } }}
      >
        <Grid container item
          xs={11.8}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              fontSize: '1.25rem',
              lineHeight: '1.75rem'
            }}
            color={"textColor.black"}
          >
            {`Video Series (${videoList.length}) `}
          </Typography>
        </Grid>
        <Stack width={'100%'} mt={2}>
          <Divider></Divider>
        </Stack>
        <Grid container item
          alignItems={"center"}
        >
          {videoList.map((course: any, index: number) => {
            const time = convertHoursToMinutes(course.courseHours)
            return (
              <Grid container xs={11} md={4}
                key={index}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  mt: 1, mb: 1.5
                }}
              >
                <Grid container xs={11}
                  key={index}
                  sx={{
                    px: 3, pt: 3,
                    borderRadius: '.50rem',
                    '&:hover': {
                      backgroundColor: 'rgba(241, 245, 249, 1)',
                    },
                  }}

                >
                  <Grid container item py={1}>
                    <Typography
                      sx={{
                        height: '24px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '.25rem',
                        backgroundColor: 'rgba(148, 163, 184, 1)',
                        paddingLeft: '.5rem',
                        paddingRight: '.5rem',
                        textAlign: 'center',
                        fontSize: '.75rem',
                        lineHeight: '1rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 1)',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          bottom: 0,
                          height: 0,
                          width: 0,
                          borderTop: '12px solid transparent',
                          borderRight: '5px solid white',
                          borderBottom: '12px solid transparent',
                        },
                      }}
                    >
                      {`भाग ${index + 1}`}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography
                      variant="body1" color={'textColor.primary'}
                      sx={{
                        fontWeight: '600',
                        lineHeight: '2rem',
                        textAlign: 'justify',
                        '--tw-text-opacity': 1
                      }}

                    >
                      {course.title}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography
                      variant="subtitle1" color={'textColor.primary'}
                      sx={{
                        fontWeight: '500',
                        lineHeight: '2rem',
                        textAlign: 'justify',
                        '--tw-text-opacity': 1
                      }}
                    >
                      {course.subtitle}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography
                      variant="subtitle2" color={'textColor.primary'}
                      sx={{
                        fontWeight: '500',
                        lineHeight: '2rem',
                        textAlign: 'justify',
                        '--tw-text-opacity': 1
                      }}
                    >{`${time.hours ? time.hours + ' hours' : ''} ${time.minutes ? time.minutes + ' Minutes' : ''}`}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography
                      variant="subtitle2" color={'textColor.primary'}
                      sx={{
                        fontWeight: '500',
                        textAlign: 'justify',
                        '--tw-text-opacity': 1
                      }}
                    >
                      {`Contribution ${course.amount}`}
                    </Typography>
                  </Grid>
                  <Grid container item py={1}>
                    <Typography
                      sx={{
                        backgroundColor: 'rgb(199 230 248)',
                        borderRadius: '.25rem',
                        padding: '2px 5px'

                      }}
                    >
                      {course.language}
                    </Typography>
                  </Grid>
                  <Grid>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                      <Button sx={{
                        py: 0, pr: 3,
                      }}>
                        <Typography
                          variant="subtitle2" color={'textColor.primary'}
                          sx={{
                            fontWeight: '500',
                            textAlign: 'justify',
                            '--tw-text-opacity': 1
                          }}
                        >
                          {`Add to cart`}
                        </Typography>
                      </Button>
                      <Button
                        sx={{
                          py: 0, pl: 3
                        }}
                      >
                        <Typography
                          variant="subtitle2" color={'textColor.primary'}
                          sx={{
                            fontWeight: '500',
                            textAlign: 'justify',
                            '--tw-text-opacity': 1
                          }}
                        >
                          {`Enroll`}
                        </Typography>
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  <Stack width={'100%'} mt={3}>
                    <Divider></Divider>
                  </Stack>
                </Grid>
              </Grid>
            )
          })}

        </Grid>
      </Grid>
    </Grid>
  )
}