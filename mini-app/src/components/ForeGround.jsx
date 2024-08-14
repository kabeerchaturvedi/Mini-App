import { Card } from "./Card";
import { useRef } from "react";

export const ForeGround = () => {
  const ref = useRef(null);
  const data = [
    {
      description: "orem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto iure",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "orem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto iure",
      fileSize: "0.7mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      description: "orem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto iure",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};
