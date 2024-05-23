import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export default function Home() {

  return (
    <Grid container item xs={12}
    sx={{
      position: 'relative',
      aspectRatio: '21/9'

    }}
  >
    <Image
      src={'https://cimg.acharyaprashant.org/images/img-e7b79b40-6603-4f3e-8ea9-ac57298f4492/30/image.jpg'}
      alt="Picture of the author"
      sizes="100vw"
      fill
      style={{
        // borderRadius: '10px',
      }}
    />
  </Grid>
  );
}
