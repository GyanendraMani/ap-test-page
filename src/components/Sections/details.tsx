import { Grid, Typography } from "@mui/material";
import Image from 'next/image'

export default function Details({ details }: any) {
  return (
    <Grid container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container item
        xs={11.5}
        sx={{
          py: { xs: 1, md: 4 },
          justifyContent: { xs: 'center', md: 'space-between' }
        }}
        alignItems={"space-evenly"}
      >
        <Grid container xs={12}
          mb={2}
        >
          <Typography variant="h5" color={'textColor.primary'}
            sx={{
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '2rem',
              textAlign: 'justify',
              '--tw-text-opacity': 1
            }}
          >
            {details.title}
          </Typography>

        </Grid>
        <Grid container item xs={12} md={5}
          sx={{
            position: 'relative',
            borderRadius: 2,
            aspectRatio: `${details.thumbnail.aspectRatio}`

          }}
        >
          <Image
            src={`${details.thumbnail.domain}/${details.thumbnail.basePath}/${details.thumbnail.qualities[0]}/${details.thumbnail.key}`}
            alt="Picture of the author"
            sizes="100vw"
            fill
            style={{
              borderRadius: '10px',
            }}
          />
        </Grid>
        <Grid container item md={6.8}
          direction={'column'}
          sx={{ py: 3 }}
        >
          <Grid item >
            <Typography variant="h6"
              color={'textColor.primary'}
              sx={{
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '1.75rem',
                textAlign: 'justify',
                '--tw-text-opacity': 1
              }}
            >
              {details.subtitle}
            </Typography>
          </Grid>
          <Grid item
            mt={1}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                fontWeight: '500',
                lineHeight: '1.75rem',
                textAlign: 'justify',
                '--tw-text-opacity': 1
              }}
            >
              {details.description}
            </Typography>
          </Grid>

        </Grid>
        <Grid container xs={12}
          mt={2}
        >
          <Typography variant="subtitle1" color={'textColor.primary'}
            sx={{
              fontWeight: '600',
              lineHeight: '2rem',
              textAlign: 'justify',
              '--tw-text-opacity': 1
            }}
          >
            {"Share this series:"}
          </Typography>

        </Grid>
      </Grid>
    </Grid>
  )
}