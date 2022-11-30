import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore ,{ Autoplay } from 'swiper';

import 'swiper/css';
import { getMovieList, movieType } from "../api/apiConfig";
import notifications from "../componentes/utils/notifications";
import { Col, Row } from "antd";

const Slide = props => {
  const {movieType} = props;
  const [movieItems, setMovieItems] = useState([]);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovies = async (movieType) => {
      const params = {page: 1};

      try {
        const response = await getMovieList(movieType, {params})

        console.log(response.results);
        setMovieItems(response.results);
      } catch (error) {

      }
    }
    
    getMovies(movieType);
  },[]);

  const imageSanitizer = (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`;

  return (
    <Swiper
      autoplay={{
        delay: 2500,
      }}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {movieItems.map((item, index) => 
        <SwiperSlide key={index}>
          <Row gutter={20}>
            <Col span={12}>
              <img src={imageSanitizer(item.backdrop_path)} style={{width: "100%"}} />
            </Col>
            <Col span={12}>
              <h1>{item.original_title}</h1>
              <p>{item.overview}</p>
            </Col>
          </Row>
        </SwiperSlide>
        
      )}
    </Swiper>
  );
};

export default Slide;
