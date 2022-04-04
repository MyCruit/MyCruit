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
  values.companyid = JSON.parse(localStorage.getItem("user"))._id;

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/postjob", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");

    setTimeout(() => {
      window.location.href = "/";
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
    await axios.post("/api/jobs/applyjob", { job, user });
    dispatch({ type: "LOADING", payload: false });
    message.success("Job applied Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
