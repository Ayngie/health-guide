import React from "react";

interface GetImageProps {
  imageSrc: string;
  title: string;
}

const GetImage: React.FC<GetImageProps> = ({ imageSrc, title }) => {
  return (
    <img
      src={imageSrc}
      alt={`Illustration for ${title}`}
      className="w-full max-w-2xl h-auto object-cover rounded-lg my-6 mx-auto"
    />
  );
};

export default GetImage;
