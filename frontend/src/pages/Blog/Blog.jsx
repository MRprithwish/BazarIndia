import React from 'react'
import './Blog.css'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className='blog'>
      <br/>
            <div className='box'>
            <br/>
               <img src="alexa.jpg" className="jpg"/>
               <p className='text'>The Amazon Echo Dot is a compact, voice-controlled smart speaker that integrates with Amazon's Alexa voice assistant.The Echo Dot is one of Amazon's most affordable smart speakers, often available at a lower price during sales events like Prime Day and Black Friday. It can be purchased directly from Amazon or other major retailers. The Echo Dot is a versatile and affordable entry into smart home technology, suitable for both new users and those expanding their existing smart home setups.<br/><br/><FaFacebook  className='icon'/><FaWhatsapp className='icon'/><FaFacebookMessenger className='icon'/></p>
            </div>
            <br/>
            <div className='box'>
            <br/>
            <img src="traditional.jpg" className="jpg"/>
            <p className='text'>neeah Women's Woven Jacquard Banarasi Silk Saree With Unstitched Blouse Piece (s025_5.50meter)<li>Material: composition80%blend silk, 20%polyester</li><li>Weave:  typeJacquard</li><li>Occasion:  typeFestival, Party, Wedding, Evening, Ceremony</li><li>Length:  6 yards</li><li>Country of Origin:  India</li><br/><FaFacebook  className='icon'/><FaWhatsapp className='icon'/><FaFacebookMessenger className='icon'/></p>
            </div>
            <br/>
            <div className='box'>
            <br/>
            <img src="mobile.jpg" className="jpg"/>
            <p className='text'>The iPhone 15 Pro Max is Apple's flagship smartphone, released in 2023. It represents the pinnacle of Apple's mobile technology, combining cutting-edge hardware with the latest software advancements. <li>Technology: OLED display offering deep blacks, vibrant colors, and high contrast.</li><li>Processor: Powered by the A17 Bionic chip, featuring a 6-core CPU, 5-core GPU, and a 16-core Neural Engine. This chip ensures exceptional performance, energy efficiency, and advanced AI capabilities.</li><br/><FaFacebook  className='icon'/><FaWhatsapp className='icon'/><FaFacebookMessenger className='icon'/></p>
            </div>
            <br/>
            <div className='box'>
            <br/>
            <img src="blazer.jpg" className="jpg"/>
            <p className='text'>Random Stripe Mens Suit Jacket Slim Fit 2 Button Blazer for Men Business Suits Blazer Casual Sport Coats (Only Blazer)<li>Material: compositionLycra fordable</li><li>Pattern: Solid</li><li>Country of Origin: India</li><br/><br/><FaFacebook  className='icon'/><FaWhatsapp className='icon'/><FaFacebookMessenger className='icon'/></p>
            </div>
      </div>
    </div>
  );
};

export default Blog;
