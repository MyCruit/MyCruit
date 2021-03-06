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
    message.success("Job Applied Successfully");
    localStorage.setItem("user", JSON.stringify(userDetails.data));
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const searchJobs = (searchKey) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    const jobs = response.data;
    const filteredJobs = jobs.filter((job) =>
      job.jobProfile.toLowerCase().includes(searchKey.toLowerCase())
    );
    dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const sortJobs = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    const jobs = response.data;
    var filteredJobs = jobs;

    if (values.jobType !== undefined) {
      filteredJobs = jobs.filter((job) => job.jobType === values.jobType);
    }

    if (values.salary !== undefined) {
      filteredJobs = jobs.filter((job) => job.salary >= values.salary);
    }
    dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const select = (job, user_id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/select", { job, user_id });
    dispatch({ type: "LOADING", payload: false });
    message.success("Candidate selected Successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const shortlist = (job, user_id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/shortlist", { job, user_id });
    dispatch({ type: "LOADING", payload: false });
    message.success("Candidate shortlisted Successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteJob = (job) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/deleteJob", job);
    message.success("Job deleted successfully");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Something went wrong. Please try again later!");
    dispatch({ type: "LOADING", payload: false });
  }
};
