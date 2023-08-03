"use client";

import React from "react";

const DefaultCarousel = () => {
  return (
    <div className="">
      <div className="carousel w-full max-h-[20vh] md:max-h-[30vh] lg:max-h-[40vh] xl:max-h-[55vh] ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://static.hbo.com/2022-06/house-of-the-dragon-ka-1920.jpg"
            className="object-cover w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://compote.slate.com/images/721112a8-1fa9-4a48-8eeb-0c4f29e0d8f6.jpeg?crop=1554%2C1036%2Cx2%2Cy0"
            className="object-cover w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://cdn.mos.cms.futurecdn.net/xEHjbBFoZbU8VUr2ko9pKe.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw-annc-swce-articlefeat_84f9c64e.jpeg?region=0%2C0%2C1600%2C900"
            className="object-cover w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default DefaultCarousel;
