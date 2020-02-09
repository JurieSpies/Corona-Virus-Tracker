import React from "react"
import Svg, { Path } from "react-native-svg"

function BackArrow() {
  return (
    <Svg width={38} height={39} viewBox="0 0 38 39" fill="none">
      <Path
        d="M38 17.063H9.096L22.361 3.448 19 0 0 19.5 19 39l3.36-3.45L9.097 21.939H38v-4.875z"
        fill="orange"
      />
    </Svg>
  )
}

export default BackArrow