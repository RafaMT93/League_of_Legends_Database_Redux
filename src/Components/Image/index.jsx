import React from 'react';

const Image = ({ src, alt, title, height, width, radius }) => {
  return (
    <img
      src={src}
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${radius}`,
      }}
      alt={alt}
      title={title}
    />
  );
};

Image.defaultProps = {
  radius: '0px',
};

export default Image;
