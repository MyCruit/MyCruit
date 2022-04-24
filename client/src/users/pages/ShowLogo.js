import React from "react";
import defaultLogo from "../../img/defaultLogo.jpg";

const user = JSON.parse(localStorage.getItem("user"));

function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function ShowLogo(value) {
  if (user.companyLogo)
    var base64 = _arrayBufferToBase64(user.companyLogo.data);
  return (
    <div>
      {user.companyLogo ? (
        <img className={`${value}`} src={`data:image/*;base64,${base64}`} />
      ) : (
        <img src={defaultLogo} className={`${value}`} />
      )}
    </div>
  );
}
