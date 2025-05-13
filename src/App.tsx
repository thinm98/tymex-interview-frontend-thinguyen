import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from 'antd'
import Home from './pages/Home'
import 'antd/dist/reset.css'
import './App.css'
import ListProducts from './pages/Products'
const { Header, Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const StyledContent = styled(Content)`
  padding: 24px;
  background: #fff;
  margin: 24px;
  min-height: 280px;
`

function App() {
  return (
    <StyledLayout>
      <StyledHeader>
        <h1>My App</h1>
      </StyledHeader>
      <StyledContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProducts />} />
        </Routes>
      </StyledContent>
    </StyledLayout>
  )
}

export default App
