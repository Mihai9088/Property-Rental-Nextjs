'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const PropertyImages = ({ images }) => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={images[0]}
              alt=""
              className="object-cover h-[400px] mx-auto cursor-pointer 
                         transition-transform duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-lg"
              width={1800}
              height={400}
              priority
              onClick={() => setIndex(0)}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${
                  images.length === 3 && i === 2 ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  className="object-cover h-[400px] w-full cursor-pointer 
                             transition-transform duration-300 ease-in-out 
                             hover:scale-105 hover:shadow-lg"
                  width={1800}
                  height={400}
                  priority
                  onClick={() => setIndex(i)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
        plugins={[Fullscreen, Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.2,
          doubleTapDelay: 300,
          doubleClickZoom: true,
        }}
        toolbar={{
          buttons: ['close', 'fullscreen', 'zoomIn', 'zoomOut', 'resetZoom', 'thumbnails'],
        }}
      />
    </section>
  );
};

export default PropertyImages;
