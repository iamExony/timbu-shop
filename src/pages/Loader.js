import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <>
    <ThreeCircles
    visible={true}
    height="100"
    width="100"
    color="#AF0101"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </>
  )
}

export default Loader