import React from "react";
import DefaultLayoutStudent from "../../component/DefaultLayoutStudent";

function ProfileStudent() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <DefaultLayoutStudent>
        <h1>Profile</h1>
        <div>{user.email}</div>
        <div>{user.profilePhoto}</div>
      </DefaultLayoutStudent>
    </div>
  );
}

export default ProfileStudent;
