import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout, Spin } from 'antd'
import { Suspense, lazy } from 'react'
import 'antd/dist/reset.css'
import './App.css'
import Footer from './assets/components/footer'
import Navigation from './assets/components/navigation'
// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const ListProducts = lazy(() => import('./pages/Products'))

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: url("/images/bg-body.png") no-repeat center center;
  background-size: cover;
`

const StyledBody = styled.div`
  min-height:  500px;
  
`
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Spin size="large" />
  </div>
)

function App() {
  return (
    <StyledLayout>
      <Suspense fallback={<LoadingFallback />}>
        <Navigation />
        <StyledBody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ListProducts />} />
          </Routes>
        </StyledBody>
      </Suspense>
      <Footer />
    </StyledLayout>
  )
}

export default App
