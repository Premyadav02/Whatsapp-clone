import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Profile = () => {

    const ImageContainer = styled(Box)`
        display:flex;
        justify-content: center;
    `

    const Image = styled('img')({
        width:140,
        height: 140,
        borderRadius: '50%',
        padding: '25px 0'
    })

    const BoxWrapper = styled(Box)`
        background: #fff;
        padding: 12px 30px 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        & : first-child {
            font-size: 13px;
            color: #009688;
            font-weight:200;
        }
        & : last-child {
            margin: 14px 0;
            color: #4a4a4a
        }
    `
    
    const DescriptionContainer = styled(Box)`
        padding: 16px 20px 28px 30px;
        & > p{
            font-size: 13px;
            color: #8696a0 
        }
    `

    const { account } = useContext(AccountContext); 

    return(
        <>
            <ImageContainer>
                <Image src= {account.picture}  alt='Profile pic'/>
            </ImageContainer>

            <BoxWrapper>
                <Typography> Your name</Typography>
                <Typography> {account.name}</Typography>
            </BoxWrapper>

            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionContainer>

            <BoxWrapper>
                <Typography>Email</Typography>
                <Typography>{account.email}</Typography>
            </BoxWrapper>

        </>
    )
}
export default Profile;