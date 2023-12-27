import styled from "styled-components"
import { Colors } from "./utilities"


const AppLayout = styled.div`
  height: 100vh;
  background-color:${Colors.lightPink};
  position: relative;
  z-index: 1;

  &::after{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/public/images/background-pattern-desktop.svg");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 30vh;
    width: 100%;
    z-index: -1;
  }
`


function App() {

  return (
    <AppLayout>
    <h1>holaaaa</h1>
    </AppLayout>
  )
}

export default App
