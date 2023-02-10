import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import NewsCards from './components/NewsCards'
import './NewCards.css';
import { Stack, Grid, Box } from '@mui/material';



function App() {
  return (
        <><div>
      <Box sx={{ display: 'flex' }}>
      <Navbar />
      </Box>
    </div>
    <div>
      
    </div>
    <div>
      <h1>
        Toronto Headlines
      </h1>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2 }}>
          <NewsCards />
        </Box>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2 }}>
          <NewsCards />
        </Box>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2 }}>
          <NewsCards />
        </Box>
        <h1>
          Across Ontario
        </h1>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2}}>
          <NewsCards />
        </Box>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2 }}>
          <NewsCards />
        </Box>
        <Box sx={{ display: 'inline-flex', margin: 2, padding: 2 }}>
          <NewsCards />
        </Box>

      </div></>
        
  );
}

export default App;
