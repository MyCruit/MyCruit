import { message } from "antd";
import axios from "axios";

export const registerUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/api/users/register", values);
    message.success("User Registered Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something is Wrong. Please try again later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("/api/users/login", values);
    message.success("Login Successfully");
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Invalid Credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};
