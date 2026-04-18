import { Outlet } from "react-router-dom";
import DrawerAppBar from "./Appar";
import { Box } from "@mui/material";

export default function Layout({ toggleMode, mode }){
    return(
        <>
      <DrawerAppBar toggleMode={toggleMode} mode={mode}  />
<Box component="main" sx={{ pt: 10, px: 2 }}> 
                <Outlet/>
            </Box>
    </>
    )
}