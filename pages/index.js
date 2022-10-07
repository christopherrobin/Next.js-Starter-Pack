import React from 'react';
import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import Fade from '../components/Fade';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter Pack</title>
        <meta name="description" content="Landing page for Next.js Starter Pack" />
      </Head>


      <Fade childComponent={
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom>Hello! &#128075;</Typography>
            <Typography variant="p" component="p" paragraph>
                My name is Christopher, I&apos;m a Software Engineer living in Indianapolis and I&apos;ve been writing
                code since I was 12. My primary focus is creating componentized front end technology that is clean,
                reusable, and resilient. This is my Next.js starter pack, a simple, clean, and responsive starter
                pack for Next.js projects.
            </Typography>
            <Typography variant="p" component="p">
                This starter pack includes:
            </Typography>
            <ul>
              <li>Next.js</li>
              <li>Material-UI v5 (+ starter theme &amp; icons)</li>
              <li>ESLint (+ starter config)</li>
              <li>Lodash</li>
              <li>Moment</li>
            </ul>
          </Grid>
        </Grid>
      } />

    </>
  );
}
