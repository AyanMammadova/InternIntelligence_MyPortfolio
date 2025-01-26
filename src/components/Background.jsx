import StarField from '@dvlpralamin/star-field'
import React from 'react'

function Background() {
  return (
    <div className=' -z-50'
      style={{
        position: "fixed",
        width: "100%",
        height: "100%"
      }}
    > 
    <StarField/>
    </div>
  )
}

export default Background
