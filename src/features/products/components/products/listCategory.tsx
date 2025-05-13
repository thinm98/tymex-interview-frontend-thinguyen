import React, { useState } from "react";
import { CategoryButton, StyledListCategory, ArrowButton } from "./styled";
import ButtonComponent from "@/assets/components/buttonComponent";
// import { FaChevronRight } from "react-icons/fa"; // icon mũi tên

const categories = [
  "All",
  "Upper Body",
  "Lower Body",
  "Hat",
  "Shoes",
  "Accessory",
  "Legendary",
  "Mythic",
  "Epic",
  "Rare",
];


type Props = {
    onChangeCategory: (category: string) => void
}
export default function CategoryFilter({ onChangeCategory }: Props) {
  const [active, setActive] = useState("All");
  const listRef = React.useRef(null);

  // Scroll sang phải khi bấm mũi tên
  const scrollRight = () => {
    if (listRef.current) {
      (listRef.current as HTMLDivElement).scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <StyledListCategory ref={listRef}>
        {categories.map((cat) => (
        <ButtonComponent unActive={active !== cat} onClick={() => {
            setActive(cat)
            onChangeCategory(cat)
        }}>{cat}</ButtonComponent>
        ))}
      </StyledListCategory>
      <ArrowButton onClick={scrollRight}>
        {/* <FaChevronRight /> */}
      </ArrowButton>
    </div>
  );
}