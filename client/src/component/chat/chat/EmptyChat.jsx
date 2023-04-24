import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import { emptyChatImage } from "../../../constants/data";


const Component = styled(Box)`
    height: 100vh;
    text-align: center;
    padding: 30px 0px;
    background:#f8f9fa
` 
const Container = styled(Box)`
    padding: 0 200px;
`

const Image = styled('img')({
    width: 400,
    marginTop: 100
})

const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d
`
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-family: inherit;
    font-weight: 400; 
`
const StyleDivider = styled(Divider)`
    margin: 40px 0;
`

const EmptyChat = () => {
  return (
    <Component>

      <Container>
        <Image src={emptyChatImage} alt="" />
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <StyleDivider/>
      </Container>

    </Component>
  );
};

export default EmptyChat;
