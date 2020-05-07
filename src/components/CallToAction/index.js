import React from 'react'

import Intro from './intro'
import Mail from './mail'

import * as Styled from './styles'

const CallToAction = () => {
  return (
    <Styled.CallToAction>
      <Intro />
      <Mail />
    </Styled.CallToAction>
  )
}

export default CallToAction
