import React from "react";
import { useSelector } from "react-redux";
import { usersInfo } from "../slices/userSlice";
import "./home.scss";

export default function Users() {
  const users = useSelector(usersInfo);
  return (
    <div className="users">
      {users &&
        users?.map((item) => {
          return (
            <div className="user-block">
              <img src={item.avatar} alt="" />
              <h3>{item.first_name}</h3>
            </div>
          );
        })}
    </div>
  );
}
