import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Components
import Nav from './components/nav/Nav'
import NavTab from './components/nav-tab/NavTab'
import Table from './components/table/Table'
import Paddle from './components/paddle/Paddle'
import PaddleTwo from './components/paddle/PaddleTwo'
import PongBall from './components/pong-ball/PongBall'
import Container from './components/container/Container'

// Style Component
const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

// Styles
const type = {
  fonts: {
    helvetica: 'Helvetica',
  },  
  size: {
    medium: '16px'
  }
}

const colors = {
  red: '#EA0A0A',
  blue: '#0412AD',
  gray: '#979797',
  white: '#FFF'
}

const App = () => {
  // Tab hook
  const [tab, setTab] = useState('3')

  // Initial theme values
  let theme = {
    // Default
    fontFamily: type.fonts.helvetica,
    fontSize: type.size.default,
    borderColor: colors.gray,
    // Tabs
    tabColor: colors.blue,
    tabColorActive: colors.white,
    tabBgColor: colors.white,
    tabBgColorActive: colors.blue,
    // Table Grid
    tableJustifyContent: 'normal',
    tableGridTemplateColumns: '20px 20px auto',
    // Pong Ball
    pongBallColor: colors.blue,
    pongBallBorderColor: colors.gray,
    pongBallAlignSelf: 'auto',
    pongBallColumnStart: 'auto',
    pongBallRowStart: 'auto',
    // Paddle One
    paddleBorderColor: colors.gray,
    paddleBgColor: colors.red,
    paddleJustify: 'auto',
    paddleColumnStart: 'auto',
    paddleRowStart: 'auto',
    // Paddle Two
    paddleTwoBorderColor: colors.gray,
    paddleTwoBgColor: colors.white,
    paddleTwoJustifySelf: 'end',
    paddleTwoColumnStart: 'auto',
    paddleTwoRowStart: 'auto',
  }

  // Theme styles for tab 2
  if(tab === '2') {
    theme = {
      ...theme,
      // Table Grid
      tableJustifyContent: 'space-between',
      tableGridTemplateColumns: 'auto',
      // Pong Ball
      pongBallAlignSelf: 'center',
      pongBallRowStart: '2',
      pongBallColumnStart: '2',
      
      // Paddle One
      paddleBgColor: colors.white,
      paddleBorderColor: colors.gray,
      // Paddle Two
      paddleTwoBgColor: colors.white,
      paddleTwoAlignSelf: 'center',
      paddleTwoJustifySelf: 'center',
      paddleTwoColumnStart: '3',
      paddleTwoRowStart: '2',
    }
  }

  // Theme styles for tab 3
  if(tab === '3') {
    theme = {
      ...theme,
      // Table Grid
      tableJustifyContent: 'normal',
      tableGridTemplateColumns: 'auto 20px 20px',
      // Pong Ball
      pongBallAlignSelf: 'end',
      pongBallRowStart: '3',
      pongBallColumnStart: '2',
      
      // Paddle One
      paddleBorderColor: colors.gray,
      paddleBgColor: colors.white,
      // Paddle Two
      paddleTwoBgColor: colors.red,
      paddleTwoAlignSelf: 'end',
      paddleTwoJustifySelf: 'end',
      paddleTwoColumnStart: '3',
      paddleTwoRowStart: '3',
      
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="App">
        <Container>
          <Nav>
            <NavTab theme={theme} onClick={() => setTab('1')} text="one" active={tab === '1'} />
            <NavTab theme={theme} onClick={() => setTab('2')} text="two" active={tab === '2'} />
            <NavTab theme={theme} onClick={() => setTab('3')} text="three" active={tab === '3'} />
          </Nav>
          <Table theme={theme}>
            <Paddle theme={theme}/>
            <PongBall theme={theme} />
            <PaddleTwo theme={theme}/>
          </Table>
        </Container>
      </StyledApp>
    </ThemeProvider>
  );

}

export default App;
