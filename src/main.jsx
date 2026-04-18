import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import store from './backend/store'
import { card, darkblack, darkblue, darkcard, darkgray, darkwhite, gray1, gray2, lightgray, lighttext, mainColor, pink, textheder, white } from './color-main/color'

function Main() {
  const [mode, setMode] = useState('light')

  const theme = useMemo(() =>
    createTheme({
     
    palette: {
  mode,    
  primary: {
        Appar: mode === 'light' ? mainColor :  'rgba(8, 16, 42, 1)' ,
    text:mode === 'light' ? 'rgba(66, 84, 136, 1)' : darkgray,//لون التنقلات عالناف
button: mode === 'light' ? darkblue :pink,
more: mode === 'light' ? darkblue : darkblack,
moreborder: mode === 'light' ? darkblue : darkgray,
chip: mode === 'light' ? gray2 : gray1,
        drower: mode === 'light' ?  darkblue : mainColor ,
logo:mode  === 'light' ? darkblue : 'rgba(19, 41, 106, 0.68)',
card:mode  === 'light' ? card : darkcard,
textheadr:mode  === 'light' ? textheder : darkgray,//الكلام يلي مكتوب على من نحن

imagecard:mode  === 'light' ? mainColor : darkblue,

    main: mode === 'light' ?  'rgba(232, 234, 241, 1)' :  'rgba(8, 16, 42, 1)',
        main1: mode === 'light' ? 'rgb(247, 239, 247)' : '#c911eeff', // أزرق رئيسي لللايت، أزرق فاتح للدارك

    // أزرق رئيسي لللايت، أزرق فاتح للدارك
    contrastText:mode === 'light' ?'#ffffffff' : '#000000',
    text4:mode === 'light' ? '#9819d2ff' : '#ffffff',
    text3:mode === 'light' ? 'rgb(14, 10, 15)' : '#9819d2ff',

    // لون النص على الأزرار
  },
  background: {

    default: mode === 'light' ? darkwhite : darkblack, // الأبيض لللايت، الأسود للدارك
  },
  text: {
    primary: mode === 'light' ?'rgba(113, 127, 166, 1)':'rgba(161, 169, 195, 1)' ,
    secondary: mode === 'light' ? darkblack : darkgray, 
    textcard:mode  === 'light' ? darkblue : darkgray,
        textlight:mode  === 'light' ? lighttext : lighttext,
        cardlight:mode  === 'light' ? gray1 : lighttext,


        secondary1: mode === 'light' ? white : darkgray, // النص الثانوي
// النص الثانوي
  },
  divider:{
            main: mode === 'light' ? '#3a04327c' : '#d8bfbfff', // لون خلفية  

  }
},
      
       navbar: {
        main: mode === 'light' ? '#f5c2ed7c' : '#121212', // لون خلفية  
        contrastText: mode === 'light' ? '#c319d2ff' : '#521f4dff', // لون النص والأيقونات
        hover: mode === 'light' ? '#f8e3fdff' : '#1f1f1f', // عند التحويم
        border: mode === 'light' ? 'rgb(226, 218, 226)' : '#c319d2ff',
                border1: mode === 'light' ? 'rgb(226, 218, 226)' : '#9819d2ff',

        span:mode === 'light' ? '#700a99ff' : '#ffffff',
                body: mode === 'light' ? '#c2e0f52c' : '#000000',
                 body1: mode === 'light' ? '#3b4044b2' : '#ffffff',
                // لون خلفية  البودي
button:mode === 'light' ? '#ffffff' : '#9819d2ff',
            Text:mode === 'light' ? '#000000' :'#ad19d2ff' ,  
               paper: mode === 'light' ? '#ffffff' : '#121212', 
               icon:mode=== 'light' ? '#3b4044b2' : '#cc19d2ff', //ت
// لون النص مخصص  

      },
    }),
    [mode]
  )

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
