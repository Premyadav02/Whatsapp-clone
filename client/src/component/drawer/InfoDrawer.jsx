import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "@emotion/styled";
import Profile from "./Profile";


const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #fff;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding:15px;
        font-weight: 600
    }
`

const Component = styled(Box)`
    background: #ededed;
    height:85%;
`

const Text = styled(Typography)`
    font-size: 18px
`

const drawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width: '30%',
    boxShadow: 'none',  
}

const InfoDrawer = ({open, setOpen}) => {

    const handelClose = () => {
        setOpen(false);
    }
    return(
        <>
            <Drawer
                open ={open}
                onClose ={handelClose}
                PaperProps = {{sx: drawerStyle}}
                style = {{zIndex: 1500  }}
                hideBackdrop = {true}
            >
                <Header>
                    <ArrowBackIcon onClick= {() => setOpen(false)} />
                    <Text>Profile</Text>
                </Header>

                <Component>
                    <Profile/>
                </Component>
            </Drawer>
        </>
    )


}
export default InfoDrawer;