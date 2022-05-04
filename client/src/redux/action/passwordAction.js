import { message } from "antd";
import axios from "axios";

export const passwordReset = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/passwordReset/", values);
    message.success("Password reset link sent to your Email Account.");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Try again later!!");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const reset = (values, userId, category) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(`/api/passwordReset/${category}/${userId}`, values);
    message.success("Password reset successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Try again later!!");
    dispatch({ type: "LOADING", payload: false });
  }
};
