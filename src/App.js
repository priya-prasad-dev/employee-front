import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddEmp from './components/AddTodo/AddTodo';
import DisplayEmp from './components/DisplayEmp/DisplayEmp';

function App() {
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1 style={{textAlign:'center'}}>Employee</h1>
          <Grid container> {/**ROW */}
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>ADD Emp</h2>
                <AddTodo />
              </Grid>
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>DISPLAY Emp</h2>
                <DisplayTodo />
              </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;