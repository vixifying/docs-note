import React, { useRef } from "react";
import Card from "./components/Card";

function Foreground() {
  const ref = useRef();
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi tempore qui cum eum sunt sint quisquam ipsum adipisci vero?",
      close: open,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi tempore qui cum eum sunt sint quisquam ipsum adipisci vero?",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "sky",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi tempore qui cum eum sunt sint quisquam ipsum adipisci vero?",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] p-5 w-full h-full flex flex-wrap gap-5"
    >
      {data?.map((el, i) => (
        <Card data={el} key={i} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
