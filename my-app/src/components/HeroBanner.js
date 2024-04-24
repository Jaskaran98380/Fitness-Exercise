import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/gym2.jpg';

const HeroBanner = () => {
    return (
        <Box sx={
            {
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }
        }>

            <Typography color="lightgreen" fontSize='30px' fontWeight='600'>BodyWave Fitness</Typography>
            <Typography color="green" fontWeight={700} sx={{ fontSize: { lg: '49px', xs: '40px' } }} mb="23px" mt="30px">
                Get ready to sweat!
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out the most effective exercises personalized to you.
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner