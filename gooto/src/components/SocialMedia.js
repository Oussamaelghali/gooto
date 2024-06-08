import React from 'react';
import './SocialMedia.css';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";



const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="#"><AiFillFacebook /></a>
      <a href="#"><AiFillInstagram /></a>
      <a href="#"><AiOutlineX /></a>
      <a href="#"><AiFillYoutube /></a>
    </div>
  );
};

export default SocialMedia;
