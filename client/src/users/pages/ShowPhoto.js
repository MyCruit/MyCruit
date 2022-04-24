import React from "react";
import defaultProfile from "../../img/defaultProfile.jpg";

// const user = JSON.parse(localStorage.getItem("user"));

function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function ShowPhoto(classname, user) {
  if (user.profilePhoto)
    var base64 = _arrayBufferToBase64(user.profilePhoto.data);
  return (
    <div>
      {user.profilePhoto ? (
        <img className={`${classname}`} src={`data:image/*;base64,${base64}`} />
      ) : (
        <img src={defaultProfile} className={`${classname}`} />
      )}
    </div>
  );
}
