import React from 'react'

import Container from 'components/ui/Container'

import * as Styled from './styles'

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/basiseinkommen/grundeinkommen-jetzt"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link href="/imprint">Impressum</Styled.Link>
        <Styled.Link href="/privacy">Datenschutz</Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
)

export default Footer
