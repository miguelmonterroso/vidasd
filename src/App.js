import { SidebarCustom } from './components/sidebar/Sidebar';
import { Home } from './pages/Home';
import './styles/main.css'


function App() {
  return (
    <div className="App">
      <SidebarCustom pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      </div>             
      <Home/>
    </div>
  );
}

export default App;
