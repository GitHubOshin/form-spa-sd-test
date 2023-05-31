import { Content, Footer, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'

import { FC, ReactNode } from 'react'

type LayoutProps = {
  pageName: string
  children: ReactNode
}

const HEADER_HEIGHT = '80px'
const FOOTER_HEIGHT = '200px'

const Layout: FC<LayoutProps> = ({ pageName = '', children }) => {
  return (
    <>
      <Header
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Title level={1}>{pageName}</Title>
      </Header>
      <Content
        style={{
          minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`
        }}
      >
        {children}
      </Content>
      <Footer style={{ height: FOOTER_HEIGHT }}>Footer</Footer>
    </>
  )
}

export default Layout
