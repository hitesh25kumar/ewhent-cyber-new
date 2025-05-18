import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { 
  signInWithPopup, 
  signInWithPhoneNumber, 
  RecaptchaVerifier,
  ConfirmationResult,
  User
} from 'firebase/auth';
import { 
  Button, 
  TextField, 
  Container, 
  Typography, 
  Box, 
  Divider,
  CircularProgress,
  Alert,
  Avatar,
  Paper,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { Google, Person } from '@mui/icons-material';

// Custom theme with Tailwind-like colors (primary-600 equivalent)
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Tailwind's blue-600
    },
    secondary: {
      main: '#4b5563', // Tailwind's gray-600
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [showOtpField, setShowOtpField] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });

      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      const confirmation = await signInWithPhoneNumber(
        auth, 
        formattedPhone, 
        recaptcha
      );
      
      setConfirmationResult(confirmation);
      setShowOtpField(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!confirmationResult) {
        throw new Error('Confirmation result not available');
      }

      setLoading(true);
      setError(null);
      await confirmationResult.confirm(otp);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logout failed');
    }
  };

  const getAvatarContent = (user: User) => {
    console.log('user: ', user.photoURL);
    if (user.photoURL) {
      return <img src={user.photoURL} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    }
    
    // Default profile picture with user initials
    const initials = user.displayName 
      ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
      : user.email?.[0].toUpperCase() || 'U';
      
    return (
      <Typography variant="h5" sx={{ color: 'white' }}>
        {initials}
      </Typography>
    );
  };

  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs" sx={{ py: 8 }}>
          <Paper elevation={3} sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'linear-gradient(to bottom, #f9fafb, #ffffff)'
          }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ 
                width: 96, 
                height: 96, 
                mb: 3, 
                bgcolor: 'primary.main',
                fontSize: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                {getAvatarContent(user)}
              </Avatar>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {user.displayName || 'Welcome back!'}
              </Typography>
              
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {user.email || user.phoneNumber}
              </Typography>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{ 
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 500
                }}
              >
                Sign Out
              </Button>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(to bottom, #f9fafb, #ffffff)'
        }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ 
              color: 'primary.main',
              fontWeight: 700,
              mb: 4
            }}
          >
            Welcome Back
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <Box sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<Google />}
              onClick={handleGoogleLogin}
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
                mb: 2
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Continue with Google'}
            </Button>
          </Box>
          
          <Box sx={{ my: 3 }}>
            <Divider sx={{ color: 'text.secondary' }}>
              <Typography variant="body2">or sign in with phone</Typography>
            </Divider>
          </Box>
          
          {!showOtpField ? (
            <form onSubmit={handlePhoneNumberSubmit}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 234 567 8900"
                required
                disabled={loading}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Verification Code'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <TextField
                fullWidth
                label="Verification Code"
                variant="outlined"
                margin="normal"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                disabled={loading}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify Code'}
              </Button>
            </form>
          )}
          
          <div id="recaptcha-container"></div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;