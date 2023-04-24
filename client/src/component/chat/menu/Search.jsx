import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import {InputBase} from '@mui/material';
import styled from "@emotion/styled";


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: centre; 

`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 5px 13px;
    width: 100%;
    border-radius: 10px
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`;

const IconField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px;

`;





const Search = ({setText}) => {
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon
                        fontSize="small"
                    />
                </Icon>
                <IconField
                    placeholder="Search or start new chat"
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}
export default Search;