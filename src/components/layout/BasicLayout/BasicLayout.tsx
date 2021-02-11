import styled from "styled-components"
import GlobalStyles from "../../../styles/GlobalStyles"

function BasicLayout({children}: {children: any}){
    return(
        <BasicLayoutStyled>
            <GlobalStyles/>
            {children}
        </BasicLayoutStyled>
    )
}

const BasicLayoutStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 48px 24px;
`

export default BasicLayout