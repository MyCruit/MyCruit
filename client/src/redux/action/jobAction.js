import { message } from "antd";
import axios from "axios";

export const getAllJobs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    dispatch({ type: "GET_ALL_JOBS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const postJob = (values) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  values.companyid = user._id;
  dispatch({ type: "LOADING", payload: true });
  try {
    const userDetails = await axios.post("/api/jobs/postjob", { values, user });
    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");
    localStorage.setItem("user", JSON.stringify(userDetails.data));
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const applyJob = (job) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  dispatch({ type: "LOADING", payload: true });
  try {
    const userDetails = await axios.post("/api/jobs/applyjob", { job, user });
    dispatch({ type: "LOADING", payload: false });
    message.success("Job applied Successfully");
    localStorage.setItem("user", JSON.stringify(userDetails.data));
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const select = (job, user_id) => async (dispatch) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/select", { job, user_id });
    dispatch({ type: "LOADING", payload: false });
    message.success("Candidate selected Successfully");
    // setTimeout(() => {
    //   window.location.href = "/home";
    // }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
export const shortlist = (job, user_id) => async (dispatch) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/shortlist", { job, user_id });
    dispatch({ type: "LOADING", payload: false });
    message.success("Candidate shortlisted Successfully");
    // setTimeout(() => {
    //   window.location.href = "/home";
    // }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
