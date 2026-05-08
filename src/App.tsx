import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ProjectDetail } from './components/ProjectDetail';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/proyecto/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;