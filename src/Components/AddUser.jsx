import React from "react";
import { useSelector } from "react-redux";
import { newUsers } from "../slices/userSlice";
import "./home.scss";
export default function AddUser() {
  const addUser = useSelector(newUsers);
  return (
    <div className="users">
      {addUser?.map((e) => {
        return (
          <div className="user-block">
            <img src={e.avatar} alt="" />
            <h3>{e.first_name}</h3>
          </div>
        );
      })}
    </div>
  );
}
