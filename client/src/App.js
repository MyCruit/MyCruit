import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HomeStudent from "./users/student/HomeStudent";
import ProfileStudent from "./users/student/ProfileStudent";
import JobInfo from "./users/student/JobInfo";
import { getAllJobs } from "./redux/action/jobAction";
import Register from "./users/authentication/Register";
import Login from "./users/authentication/Login";
import HomeCompany from "./users/company/HomeCompany";
import HomeAdmin from "./users/admin/HomeAdmin";
import AppliedJobs from "./users/student/AppliedJobs";
import Resume from "./users/student/Resume";
import Post from "./users/company/Post";
import ProfileCompany from "./users/company/ProfileCompany";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  const category = "Student";
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <ClipLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user.category === "Student" ? (
                <HomeStudent />
              ) : user.category === "Company" ? (
                <HomeCompany />
              ) : (
                <HomeAdmin />
              )
            }
          />
          <Route
            path="/profile"
            element={
              user.category === "Student" ? (
                <ProfileStudent />
              ) : (
                <ProfileCompany />
              )
            }
          />
          <Route path="/post" element={<Post />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/appliedJobs" element={<AppliedJobs />} />
          <Route path="/jobs/:id" element={<JobInfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
