import React, { useState } from "react";
const ImagesGalleryPreview = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1> Image Gallery Preview</h1>

      {/* Preview Image */}
      <div>
        <img
          src={selectedImage}
          alt="preview"
          style={{
            width: "400px",
            height: "250px",
            marginBottom: "20px",
            objectFit: "cover",
            border: "4px solid #ccc",
          }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(img)}
            style={{
              width: "80px",
              height: "60px",
              objectFit: "cover",
              cursor: "pointer",
              border:
                selectedImage === img ? "3px solid blue" : "2px solid gray",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesGalleryPreview;
