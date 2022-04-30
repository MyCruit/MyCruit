import { message } from "antd";
import axios from "axios";

export const passwordReset = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/passwordReset/", values);
    message.success("email sent Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    if (error.response.status === 409) message.error("Email already exists!");
    else message.error("Something went wrong. Try again later!!");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const reset = (values,userId,category) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
  
    try {
        //console.log(category);
      await axios.post(`/api/passwordReset/${category}/${userId}`, values);
      message.success("password reset successfully");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      if (error.response.status === 409) message.error("Email already exists!");
      else message.error("Something went wrong. Try again later!!");
      dispatch({ type: "LOADING", payload: false });
    }
  };
  
