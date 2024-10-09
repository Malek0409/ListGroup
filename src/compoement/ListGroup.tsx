import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    console.log(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items available</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
