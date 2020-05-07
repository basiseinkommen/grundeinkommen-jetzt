import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styles'

const TitleSection = ({ id, center, title, subtitle }) => (
  <Styled.TitleSection>
    {(() => {
      if (id != null) {
        return <a id={id} href={`#${id}`}>&nbsp;</a>
      } 
    })()}
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    <Styled.Title center={center}>{subtitle}</Styled.Title>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
)

TitleSection.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default TitleSection
