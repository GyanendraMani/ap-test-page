import { Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import data from '../data/footerData.json'

const Footer = () => {
  return (
    <Grid container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "secondary.main"
      }}
    >
      <Grid container item
        xs={10} md={11}
        sx={{ py: { xs: 4 } }}
      >
        {data.map((menuCols, index) => {
          return (
            <Grid container item xs={10} md={2}
              key={index}
              direction='column'
              sx={{ py: { xs: 1 }, }}
            >
              <Grid container item
                sx={{
                  py: { xs: 1 },
                }}
              >
                <Typography variant="subtitle1" color={'text.secondary'}>
                  {menuCols.title}
                </Typography>
              </Grid>
              {menuCols.subMenu.map((menu: any, i: number) => (
                <Grid container item
                  key={i}
                  sx={{
                    py: { xs: .5 },
                  }}
                >
                  <Grid container item>
                    <Typography variant="subtitle2"
                      color={'text.secondary'}
                    >
                      {menu.title}
                    </Typography>
                  </Grid>
                  {menu.social_media && <Grid container item
                    xs={7} mb={1}
                    justifyContent={'space-between'}
                  >
                    <YouTubeIcon sx={{ color: 'text.secondary' }} />
                    <TwitterIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    <FacebookIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    <InstagramIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                  </Grid>}
                </Grid>
              ))}
            </Grid>)
        })}
      </Grid>
      <Grid container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ pb: { xs: 10 } }}
      >
        <Grid item justifyContent="center"
          alignItems="center"
          xs={8} >
          <Divider orientation="horizontal" color="white" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer;