import * as React from 'react'
import { Link, type HeadFC, type PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      hello, world, It's suna.
      <Link to="/about">go to about</Link>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
