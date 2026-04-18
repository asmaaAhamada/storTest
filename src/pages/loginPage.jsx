import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from "@emotion/react";
import { Alert, Button, LinearProgress, IconButton } from "@mui/material"; 
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 
import { darkblue } from '../color-main/color';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { clearError, Log_in, setformInfo, setError } from '../backend/slice/log_in_Slice';

export default function LoginPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { username, password, email } = useSelector((state) => state.Log_in.formInfo);
  const { isLoading, error } = useSelector((state) => state.Log_in);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  async function Login() {
    dispatch(clearError());

    //  validation
    let hasError = false;

    if (!email) {
      dispatch(setError({ email: "Email is required" }));
      hasError = true;
    }

    if (!password) {
      dispatch(setError({ password: "Password is required" }));
      hasError = true;
    }

    if (hasError) return;

    try {
      await dispatch(Log_in()).unwrap();
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container
      maxWidth="sm"
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        position: 'relative',
      }}
    >
      {/* خلفيات */}
      <Box sx={{
        position: 'absolute',
        width: 300,
        height: 300,
        background: darkblue,
        filter: 'blur(120px)',
        borderRadius: '50%',
        top: -50,
        left: -50,
        opacity: 0.4,
      }} />

      <Box sx={{
        position: 'absolute',
        width: 250,
        height: 250,
        background: '#6366f1',
        filter: 'blur(120px)',
        borderRadius: '50%',
        bottom: -50,
        right: -50,
        opacity: 0.4,
      }} />

      <Card sx={{
        width: '100%',
        boxShadow: 8,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 4,
        zIndex: 2,mt: -15,
      }}>
        
        <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
          Welcome back
        </Typography>

        {/* Email */}
        <TextField
          value={email}
          onChange={(e) => dispatch(setformInfo({ email: e.target.value }))}
          fullWidth
          label="Email"
          InputLabelProps={{ shrink: true }}
          error={!!error.email}
          helperText={error.email}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlineIcon sx={{color:darkblue}} />
              </InputAdornment>
            ),
          }}
        />

        {/* Username */}
        <TextField
        type='text'
          value={username}
          onChange={(e) => dispatch(setformInfo({ username: e.target.value }))}
          fullWidth
          label="Username"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonOutlineIcon sx={{color:darkblue}} />
              </InputAdornment>
            ),
          }}
        />

        {/* Password */}
        <TextField
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => dispatch(setformInfo({ password: e.target.value }))}
          fullWidth
          label="Password"
          error={!!error.password}
          helperText={error.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility sx={{color:darkblue}}/> : <VisibilityOff sx={{color:darkblue}} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* API Error */}
        {error.general && (
          <Alert severity="error">
            {error.general}
          </Alert>
        )}

        {/* زر */}
        {isLoading ? (
          <LinearProgress sx={{backgroundColor: theme.palette.primary.button}} />
        ) : (
          <Button
          sx={{backgroundColor: theme.palette.primary.button}}
            onClick={Login}
            variant="contained"
            fullWidth
          >
            LOGIN
          </Button>
        )}
      </Card>
    </Container>
  );
}