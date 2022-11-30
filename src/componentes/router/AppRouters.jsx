import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalculationsMain from '../pages/Calculations/CalculationsMain'
import ClockMain from '../pages/Clock/ClockMain'
import Home from '../pages/Home'
import NowPlaying from '../pages/Movies/NowPlaying'
import Popular from '../pages/Movies/Popular'
import TopRated from '../pages/Movies/TopRated'

const AppRouters = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/clock"} element={<ClockMain />} />
      <Route path={"/calculations"} element={<CalculationsMain />} />
      {/* Movies */}
      <Route path={"/popular"} element={<Popular />} />
      <Route path={"/top_rated"} element={<TopRated />} />
      <Route path={"/now_playing"} element={<NowPlaying />} />

    </Routes>
  )
}

export default AppRouters