import React from 'react';
import './dashboard.css';
import aiorigin from '../../assets/aiorigin.png'
import aigenerated from '../../assets/aigenerated.png'
import { Link } from 'react-router-dom';
import GalleryItem1 from '../galleryitem/Galleryitem1';
import GalleryItem2 from '../galleryitem/Galleryitem2';
import GalleryItem3 from '../galleryitem/Galleryitem3';
import GalleryItem4 from '../galleryitem/Galleryitem4';
import GalleryItem5 from '../galleryitem/Galleryitem5';
import GalleryItem6 from '../galleryitem/Galleryitem6';

export const Dashboard = () => {
  return (
    <div className="gpt3__header section__padding" id="home">

      <div className="gpt3__header-content">
        <div className="original">
          {/* <img src={aiorigin} alt="ai" /> */}
        </div>
      </div>
      {/* <div className="gpt3__header-content">
        <div className='gallery'><GalleryItem1 /></div>
        <div className='gallery'><GalleryItem2 /></div>
        <div className='gallery'><GalleryItem3 /></div>
      </div>
      <div className="gpt3__header-content">
        <div className='gallery'><GalleryItem4 /></div>
        <div className='gallery'><GalleryItem5 /></div>
        <div className='gallery'><GalleryItem6 /></div>
      </div> */}
    </div>
  );
};
export default Dashboard;