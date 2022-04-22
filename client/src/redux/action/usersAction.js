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
    message.error("Something went wrong. Please try again later!");
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
      window.location.href = "/home";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Invalid Credentials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getAllStudents = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const students = await axios.get("/api/users/getallstudents");
    dispatch({ type: "GET_ALL_STUDENTS", payload: students.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const getAllCompanies = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const companies = await axios.get("/api/users/getallcompanies");
    dispatch({ type: "GET_ALL_COMPANIES", payload: companies.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateUser = (values) => async (dispatch) => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const usercategory = JSON.parse(localStorage.getItem("user")).category;
  values._id = userid;
  values.category = usercategory;

  dispatch({ type: "LOADING", payload: true });

  try {
    const user = await axios.post("/api/users/update", values);
    message.success("Profile updated successfully");
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Please try again later!");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateResume = (formdata) => async (dispatch) => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  formdata.append("_id", userid);
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/api/users/resume", formdata);
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Please try again later!");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateProfilePhoto = (formdata) => async (dispatch) => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  formdata.append("_id", userid);
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/api/users/profilePhoto", formdata);
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Please try again later!");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateCompanyLogo = (formdata) => async (dispatch) => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  formdata.append("_id", userid);
  dispatch({ type: "LOADING", payload: true });
  try {
    const user = await axios.post("/api/users/companyLogo", formdata);
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Please try again later!");
    dispatch({ type: "LOADING", payload: false });
  }
};
