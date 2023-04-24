import { Typography,Box,styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { setConversation, getConversation } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import { formatDate } from "../../../utils/common-utils";

// --------------- Style Component -------------------------------
const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer
`

const Image = styled('img')({
    width:50,
    height: 50,
    borderRadius:'50%',
    padding: '0 14px'
})


//  ----------------------- Main Body --------------------------------

const Conversation = ({user}) => {

    const {setPerson, account, newMessagesFlag} = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect( () => {
        const getConversationDetails = async () => {
            const data = await getConversation({senderId: account.sub, receiverId: user.sub});
            setMessage({
                text: data?.message,
                timestamp: data?.updatedAt
            })
        }
        getConversationDetails()
    }, [newMessagesFlag])

    const getuser =  async() => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }

    return (
        <Component onClick={() => getuser()}>
            <Box>
                <Image src={user.picture} alt= "dp"/>
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                            <Typography>{formatDate(message?.timestamp)}</Typography>
                    }
                </Box>
                <Box>
                    <Typography></Typography>
                </Box>
            </Box>
        </Component>
    )
}
export default Conversation;