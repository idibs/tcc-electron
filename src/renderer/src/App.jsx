import Navbar from './components/Navbar';
import AppRoutes from './routes/index';

function App() {
  return (
    <>
    <div style={{ appRegion: 'drag' }} className="fixed transparent w-full h-8"></div>
      <Navbar />
      <div className="ps-24">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;