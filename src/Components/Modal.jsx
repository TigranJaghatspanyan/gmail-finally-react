import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../slices/userSlice";
import ImageUpload from "./ImageUpload";
import "./home.scss";
import { addUser } from "../slices/userSlice";

export default function Modal() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModal(false));
  };
  const addNewUser = (e) => {
    const obj = { first_name: name, avatar };
    dispatch(addUser(obj));
    dispatch(setModal(false));
  };

  return (
    <div className="bigModal">
      <div className="smallModal">
        <ImageUpload setAvatar={setAvatar} />
        <input
          type="text"
          placeholder="Your Name!"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={closeModal} className="btnClose">
          X
        </button>
        <button onClick={addNewUser}>Add User</button>
      </div>
    </div>
  );
}
