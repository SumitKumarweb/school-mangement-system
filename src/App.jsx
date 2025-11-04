import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ParentStudentAdmin from "../Admin/ParentStudentAdmin/ParentStudentAdmin"
import Login from "../Authentication/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/parent-student/*" element={<ParentStudentAdmin />} />
        <Route path="/" element={<Navigate to="/parent-student/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App