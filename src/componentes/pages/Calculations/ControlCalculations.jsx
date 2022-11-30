import React from 'react'

export const ControlSum = ({v1,v2}) => {
  return (
    <h3>
        Sum: {v1 + v2}
    </h3>
  )
}

export const ControlSubstraction = ({v1,v2}) => {
  return (
    <h3>
        Substraction: {v1 - v2}
    </h3>
  )
}

export const ControlMultiplication = ({v1,v2}) => {
  return (
    <h3>
        Multiplication: {v1 * v2}
    </h3>
  )
}

export const ControlDivision = ({v1,v2}) => {
  return (
    <h3>
        Division: {v1 / v2}
    </h3>
  )
}
