import React,{useEffect} from 'react'
import { Box,Typography } from '@mui/material'

const About = () => {

  useEffect(() => {
    document.title = "Book Store | About"
 }, []);

  return (
    <Box sx={{width:'100%',height:'100vh',textAlign:'center'}}>
      <Typography variant='h2' sx={{pt:'2%',pb:'2%',fontFamily:'Lato'}}>
      Welcome to Book Store!
      </Typography>
      <Typography variant='h6' sx={{pt:'2%',fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}>
        At Book Store, we are passionate about books and the power of storytelling. We believe that books have the ability to transport us to new worlds, broaden our perspectives, and ignite our imaginations.
          <br />
          Our mission is to provide you with a curated collection of captivating books, ranging from timeless classics to contemporary masterpieces. Whether you're a devoted reader or just starting your literary journey, we have something for everyone.
          <br />
          With our user-friendly interface built on React, you can easily explore our extensive library, discover new titles, and dive into detailed descriptions that bring the stories to life. Our team of dedicated book enthusiasts handpicks each title, ensuring that you'll find only the highest quality reads.
          <br />
          We understand that finding the right book can be a daunting task, so we have implemented powerful search and recommendation features to help you discover hidden gems and explore different genres. Whether you're in the mood for an edge-of-your-seat thriller, a heartwarming romance, or a thought-provoking non-fiction, our platform will guide you towards your next literary adventure.
          <br />
          We believe that reading is an enriching experience that should be accessible to all. That's why we offer a range of subscription options to fit your reading habits and budget. Whether you prefer digital editions or the feel of a physical book in your hands, we have you covered.
          <br />
          Thank you for choosing [Your Web App Name] as your literary companion. We're excited to embark on this literary journey with you, and we hope to ignite your love for books, one page at a time.
          <br />
          Happy reading!
        </Typography>
    </Box>
  )
}

export default About