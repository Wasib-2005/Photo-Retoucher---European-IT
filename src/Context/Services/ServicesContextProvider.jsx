import { useState } from "react";
import ServicesContext from "./ServicesContext";

const ServicesContextProvider = ({ children }) => {
  const [services, setServices] = useState([
    { name: "Clipping Path", path: "clipping_path" },
    { name: "Images Masking", path: "images_masking" },
    { name: "Photo Retouching", path: "photo_retouching" },
    { name: "Ghost Mannequin", path: "ghost_mannequin" },
    { name: "Color Correction", path: "color_correction" },
    { name: "Drop Shadow", path: "drop_shadow" },
    { name: "Image editing", path: "image_editing" },
  ]);
  const [waitForServices, setWaitForServices] = useState();
  return (
    <ServicesContext.Provider
      value={{ services, setServices, waitForServices }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
