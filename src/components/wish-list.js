import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Logo, 
  FlexList, 
  Container,
    Heading,
    Subhead,
  Section,
  Text

} from "./ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import * as styles from './wishlist.css.ts'
import * as miscstyles from '../misc.module.css'

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client = axios.create({
  baseURL: "https://api.discogs.com/users/lincolnwisely/wants?key=vFyJrqHWRBnpgvvXUkco&secret=fIyvkSIOTpqWKiSaDwMAWGsbVUnLVwwL&page=1&per_page=18" 
});

export default function WishList()  {
  var settings = {
    dots: false,
    initialSlide: 8,
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };



   const [items, setItems] = useState();
   useEffect(() => {
      client.get().then((response) => {
         setItems(response.data);
      });
   }, []);
console.log(items)
return ( <Box paddingY={5}>
    <Text center variant="kicker">discogs has an api tight</Text>
    <Heading center>
      recently added to my want list
    </Heading>
      <Slider className={miscstyles.sliderButton} {...settings}>
        { items && items.wants.map((item) => {
          return  <OutboundLink href={`https://discogs.com/master/${item.basic_information.master_id}`} className={styles.item}key={item.id}>
            <img className={styles.image} alt={item.basic_information.title ?? ""} src={item.basic_information.cover_image ?? null} size="small" />
            <h6 className="post-title">{item.basic_information.title}</h6>
            <h5 className="post-body">{item.basic_information.artists[0].name}</h5>
          </OutboundLink>    
        })}
        </Slider>
        <Subhead center variant="lead">
          <Button className={styles.link} center href="https://www.discogs.com/wantlist?user=lincolnwisely">View All
          </Button>
        </Subhead>
      </Box>
    );
  };
