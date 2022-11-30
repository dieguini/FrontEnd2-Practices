import React from 'react'

const CalculationHeader = props => {
  const {title, calc} = props

  return (
    <h3>{title}: {calc()}</h3>
  )
}

export const ControlSum2 = ({v1,v2}) => {
  const calc = () => {
    return v1 + v2;
  };

  return (
    <CalculationHeader title="Sum 2" calc={calc}/>
  )
}

export const ControlSubstraction2 = ({v1,v2}) => {
  const calc = () => {
    return v1 - v2;
  };

  return (
    <CalculationHeader title="Substraction 2" calc={calc}/>
  )
}

export const ControlMultiplication2 = ({v1,v2}) => {
  const calc = () => {
    return v1 * v2;
  };

  return (
    <CalculationHeader title="Multiplication 2" calc={calc}/>
  )
}

export const ControlDivision2 = ({v1,v2}) => {
  const calc = () => {
    return v1 / v2;
  };

  return (
    <CalculationHeader title="Division 2" calc={calc}/>
  )
}