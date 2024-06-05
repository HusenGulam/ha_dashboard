import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//pages
import CourseInfo from './pages/CourseInfo/CourseInfo';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage'
import MyCourses from './pages/MyCourses/MyCourses';
import Oquvchilar from './pages/Oquvchilar/Oquvchilar';
import Tafsilot from './pages/Tafsilot/Tafsilot';
import Taxrirlash from './pages/Taxrirlash/Taxrirlash';
import NoMatch from './components/404/NoMatch'

//inners 
import Tavsif from './pages/CourseInfo/Tavsif/Tavsif'
import Izoh from './pages/CourseInfo/Izoh/Izoh'
import Manba from './pages/CourseInfo/Manba/Manba'
import Test from './pages/CourseInfo/Test/Testss'
import QuestionAddPage from './pages/Course/Quiz/QuestionAddPage';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import AddCourse from './pages/Tafsilot/addCourse';
import 'react-toastify/dist/ReactToastify.css';
import CourseScreen from './pages/Course/Course';

const App = () => {
  localStorage.setItem('maktab', 2)
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<NoMatch />}/>
            <Route path="/dashboard" element={<PrivateRoute><HomePage /></PrivateRoute>}>

              <Route path="" element={<Dashboard />} />
              <Route path="mycourses" element={<MyCourses />} />
              <Route path="addcourse" element={< AddCourse />} />
              <Route path='courseinfo/:course_id' element={<CourseInfo />}>

                <Route path='' element={<Tavsif />} />
                <Route path='izoh' element={<Izoh />} />
                <Route path='manba' element={<Manba />} />
                <Route path='test' element={<Test />} />
              </Route>
              <Route path="editcourse/:course_id" element={<CourseScreen />} />
              <Route path='addquestion' element={<QuestionAddPage />} />
              <Route path='students' element={<Oquvchilar />} />
              <Route path='edit' element={<Taxrirlash />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
