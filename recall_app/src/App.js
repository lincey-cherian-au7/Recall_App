import React from 'react';
import {Container,AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './components/images/memories.png'
const App =()=>{
    return(
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Recall
                </Typography>
                <img src={memories} alt="memories"  height='400px'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between'>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;