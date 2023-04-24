import { useContext, useState } from "react";
import {AccountContext} from "../../../context/AccountProvider";
import { Box, styled } from "@mui/system";
import MoreOption from "./MoreOption";

// import {ChatIcon as MessageIcon, MoreVert} from '@mui/icons-material';
import ChatIcon   from '@mui/icons-material/Chat';
import InfoDrawer from "../../drawer/InfoDrawer";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    & > *{
        margin-left: 2px;
        padding: 8px;
    }
    & : first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`

const Image = styled('img')({
    height: 50,
    width: 50,
    borderRadius: '50%'
})




const MenuHeader = () => {

    const [openDrawer, setopenDrawer] = useState(false);

    const {account}  = useContext(AccountContext);

    const toggleDrawer = () => {
        setopenDrawer(true)
    }

    return(
        <>
            <Component>
                <Image src={account.picture} alt = "dp"  onClick={() => toggleDrawer()}/>
                <Wrapper>
                    <ChatIcon/>
                    <MoreOption setopenDrawer={setopenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen = {setopenDrawer} />
        </>
    )
}

export default MenuHeader;