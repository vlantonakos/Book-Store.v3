import React,{useEffect} from 'react'
import { Box,Grid,Typography,Card,CardContent,TextField,Button } from '@mui/material'

const Contact = () => {

  useEffect(() => {
    document.title = "Book Store | Contact"
 }, []);

  return (
    <Box sx={{width:'100%',height:'100vh',justifyContent:'center'}}>
      <Grid sx={{pt:'5%'}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto",backgroundColor:'#FFF1E6'}}>
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{fontFamily:'Libre Baskerville',fontWeight:'500',fontSize:'1.4rem'}}>
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{fontFamily:'Libre Baskerville'}}>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Contact