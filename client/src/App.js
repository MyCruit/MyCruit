import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HomeStudent from "./users/student/HomeStudent";
import ProfileStudent from "./users/student/ProfileStudent";
import JobInfo from "./users/pages/JobInfo";
import StudentInfo from "./users/pages/StudentInfo";
import CompanyInfo from "./users/pages/CompanyInfo";
import { getAllJobs } from "./redux/action/jobAction";
import { getAllStudents } from "./redux/action/usersAction";
import { getAllCompanies } from "./redux/action/usersAction";
import Register from "./users/pages/Register";
import Login from "./users/pages/Login";
import HomeCompany from "./users/company/HomeCompany";
import HomeAdmin from "./users/admin/HomeAdmin";
import AppliedJobs from "./users/student/AppliedJobs";
import Resume from "./users/student/Resume";
import Post from "./users/company/Post";
import ProfileCompany from "./users/company/ProfileCompany";
import MainPage from "./users/pages/MainPage";
import StudentList from "./users/admin/StudentList";
import CompanyList from "./users/admin/CompanyList";
import JobList from "./users/admin/JobList";
import ResetForm  from "./users/pages/ResetForm";
import ForgetPassword from "./users/pages/ForgetPassword";
const user = JSON.parse(localStorage.getItem("user"));
function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      const allcompanies = getAllCompanies();
      dispatch(allcompanies);
      const alljobs = getAllJobs();
      dispatch(alljobs);
      const allstudents = getAllStudents();
      dispatch(allstudents);
    };

    getAll();
  }, []);

  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <ClipLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/home"
            element={
              !user ? (
                <Login />
              ) : user.category === "Student" ? (
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
              !user ? (
                <Login />
              ) : user.category === "Student" ? (
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
          <Route path="/students/:id" element={<StudentInfo />} />
          <Route path="/company/:id" element={<CompanyInfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companyList" element={<CompanyList />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/jobList/:id" element={<JobList />} />
          <Route path="/passwordReset/:category/:userId" element={<ResetForm />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

// export function ProtectedRoute(props) {
//   if (!user) {
//     return <Navigate replace to="/login" />;
//   } else {
//     return <Route {...props} />;
//   }
// }
