import React from 'react'
import { Typography, Card, Space } from 'antd'
import styled from 'styled-components'

const { Title, Paragraph } = Typography

const StyledCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
`

const Home: React.FC = () => {
    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <StyledCard>
                <Title level={2}>Welcome to Home Page</Title>
                <Paragraph>
                    This is a simple home page using React Router, styled-components, and Ant Design.
                </Paragraph>
            </StyledCard>
        </Space>
    )
}

export default Home 