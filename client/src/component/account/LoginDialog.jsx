// Import Required Component

import { Dialog, Typography, List, ListItem, styled, Box } from "@mui/material";

// For QRCode image import
import { qrCodeImage } from "../../constants/data";


//  GoogleLogin for Login using Google Account
import { GoogleLogin } from '@react-oauth/google';


//  jwt_decode for decoeing the recieved data from google(like name, photo)
import jwt_decode from 'jwt-decode';

import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";





// CSS Handling ------->

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    boxShadow: 'none'
}

const Component = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px
`;

const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 56px'
})

const Title  = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px; 
`

const StyleList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 20px;
        line-height: 28px;
        color: #4a4a4a
    }
`






//  Main Function Start------->
const LoginDialog = () => {

    const  {setAccount} = useContext(AccountContext);    

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded)
        await addUser(decoded)
    }


    const onLoginError = (res) => {

    }
    
    return(
        
            <Dialog 
                open={true}
                PaperProps = {{sx: dialogStyle}}
                hideBackdrop = {true}
             >
                <Component>
                    <Container>
                        <Title>To use WhatsApp on your computer:</Title>
                        <StyleList>
                            <ListItem>1. Open WhatsApp on your Phone </ListItem>
                            <ListItem>2. Tap Menu settings and select whatsapp web</ListItem>
                            <ListItem>3. Point your phone to this screen capture the code</ListItem>
                        </StyleList>
                    </Container>
                    <Box style = {{position: 'relative'}}>
                        <QRCode alt='qrCode' src={qrCodeImage}   />
                        <Box style = {{position: 'absolute', top: '50%', transform: 'translatex(25%)'}}>
                            <GoogleLogin 
                                onSuccess = {onLoginSuccess}
                                onError = {onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>

            </Dialog>
        
    )
}

export default LoginDialog;