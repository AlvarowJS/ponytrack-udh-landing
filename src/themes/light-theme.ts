import { createTheme } from '@mui/material/styles';
import { red, } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#1E1E1E'
    // },
    // secondary: {
    //   main: '#1E1E1E'
    // }
  },


  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',        
      },
      styleOverrides: {
        root: {
          backgroundColor: '#B3FC9A',
          height: 80,

        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#B3FC9A',
          color: 'black',
          textTransform: 'none',
          boxShadow: 'none',
          border: 'none',
          // borderRadius: 20,
          marginLeft: 10, 
          marginTop: 10, 
          marginRight: 10, 
          ":hover": {
            backgroundColor: '#ffff',
            color: 'black',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
          margin: 0,
          padding: 0
        }
      }
    },    


  }
});