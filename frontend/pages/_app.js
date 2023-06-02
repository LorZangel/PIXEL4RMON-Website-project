import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;