import * as React from 'react'
import Box from './box'
import Animated from './animated'
import {globalColors, isMobile} from '../styles'

type Props = {
  ratio: number
  style?: any
  fillStyle?: any
}

const ProgressBar = ({ratio, style, fillStyle}: Props) => (
  <Animated to={{ratio}}>
    {({ratio}) => (
      <Box style={{...outer, ...style}}>
        <Box
          style={
            // @ts-ignore
            {...inner, ...fillStyle, width: `${Math.max(0, Math.min(1, ratio)) * 100}%`}
          }
        />
      </Box>
    )}
  </Animated>
)

const outer = {
  backgroundColor: globalColors.greyLight,
  borderRadius: 3,
  height: 4,
  width: 64,
  ...(isMobile
    ? {}
    : {
        boxShadow: `inset 0 1px 0 0 ${globalColors.black_05}`,
      }),
}

const inner = {
  backgroundColor: globalColors.blue,
  borderRadius: 3,
  height: '100%',
}

export default ProgressBar
