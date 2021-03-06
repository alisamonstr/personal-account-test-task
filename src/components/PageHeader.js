import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { Container, Paper, Box } from '@material-ui/core'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { Button } from './Button'
import { AuthContext } from '../contexts'

const Wrapper = styled(Paper)`
  padding: 10px;
  width: 100%;
  background-color: pink;
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: white;
`
export const PageHeader = ({ children }) => {
  const { logOut } = useContext(AuthContext)

  return (
    <div>
      <Wrapper>
        <StyledContainer>
          <StyledButton onClick={logOut}>
            <Box mr={1}>Log Out</Box>
            <ExitToAppRoundedIcon />
          </StyledButton>
        </StyledContainer>
      </Wrapper>
      {children}
    </div>
  )
}
