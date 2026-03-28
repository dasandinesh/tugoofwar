import React from 'react'
import '../components/gallery.css'
import image1 from '../components/images/a.jpg'
import image2 from '../components/images/b.jpg'
import image3 from '../components/images/c.jpg'
import image4 from '../components/images/d.jpg'
import image5 from '../components/images/e.jpg'
import image6 from '../components/images/f.jpg'
import image7 from '../components/images/g.jpg'
import image8 from '../components/images/h.jpg'
import image9 from '../components/images/i.jpg'
import image10 from '../components/images/j.jpg'
import image11 from '../components/images/k.jpg'
import image12 from '../components/images/l.jpg'
import image13 from '../components/images/zz.jpg'

function Gallery() {
  const images = [
    image1, image2, image3, image4, image5, image6, image7,
    image8, image9, image10, image11, image12, image13
  ];

  return (
    <div className="gallery-section">
    

      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;