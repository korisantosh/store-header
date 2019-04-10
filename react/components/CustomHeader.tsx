import React, { FunctionComponent } from 'react'
import { ExtensionPoint, useRuntime } from 'vtex.render-runtime'
import Media from 'react-media'

const CustomHeader: FunctionComponent = () => {
  const {
    hints: { mobile },
  } = useRuntime()

  if (!window || !window.matchMedia) {
    return mobile ? (
      <ExtensionPoint id="header-layout.mobile" />
    ) : (
      <ExtensionPoint id="header-layout.desktop" />
    )
  }

  return (
    <React.Fragment>
      <Media query="(max-width:40rem)">
        {matches =>
          matches ? (
            <ExtensionPoint id="header-layout.mobile" />
          ) : (
            <ExtensionPoint id="header-layout.desktop" />
          )
        }
      </Media>
    </React.Fragment>
  )
}

export default CustomHeader
