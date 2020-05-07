import React from 'react'

import Intro from './intro'
import Mail from './mail'
import SocialMedia from './social-media'

import * as Styled from './styles'

const CallToAction = () => {
  return (
    <Styled.CallToAction>
      <Intro />
      <Mail />
      <SocialMedia />
    </Styled.CallToAction>
  )
}

export default CallToAction
