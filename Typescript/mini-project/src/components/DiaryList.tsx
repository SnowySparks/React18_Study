import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { DiaryType } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  data: DiaryType[];
}

type Order = "latest" | "oldest";

const DiaryList = ({ data }: Props) => {
  const [sortType, setSortType] = useState<Order>("latest");
  const nav = useNavigate();
  const onChangeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "latest" || e.target.value === "oldest")
      setSortType(e.target.value);
  };

  const getSortedData = (): DiaryType[] => {
    return data.toSorted((a, b) => {
      return sortType === "oldest"
        ? a.createdDate - b.createdDate
        : b.createdDate - a.createdDate;
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select name="order" id="order" onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          text={"새 일기 쓰기"}
          type="POSITIVE"
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => {
          return <DiaryItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
