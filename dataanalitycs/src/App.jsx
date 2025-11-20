import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter';
import SidebarMenu from './components/SidebarMenu';
import Dock from './components/Dock';
import PythonIcon from "./assets/Python.svg";
import JavaIcon from "./assets/Java.svg";
import JSIcon from "./assets/JavaScript.svg";
import PHPIcon from "./assets/PHP.svg";
import HomeIcon from  "./assets/Home.svg";


const items = [
    { 
      icon: <img src={PythonIcon} alt="Python" style={{ width: 28, height: 28 }} />, 
      label: 'Python', 
      onClick: () =>  window.location.href = '/python'
    },
    { 
      icon: <img src={JavaIcon} alt="Java" style={{ width: 28, height: 28 }} />, 
      label: 'Java', 
      onClick: () =>  window.location.href = '/java'
    },
     { 
      icon: <img src={HomeIcon} alt="Home" style={{ width: 28, height: 28 }} />, 
      label: 'Home', 
      onClick: () =>  window.location.href = '/'
    },
    { 
      icon: <img src={JSIcon} alt="JavaScript" style={{ width: 28, height: 28 }} />, 
      label: 'JavaScript', 
      onClick: () =>  window.location.href = '/javascript'
    },
    { 
      icon: <img src={PHPIcon} alt="PHP" style={{ width: 28, height: 28 }} />, 
      label: 'PHP', 
      onClick: () =>  window.location.href = '/php'
    }
  ];

  
 
 export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  //logo

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  

  

  return (
   
      <Router>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {!isMobile && <SidebarMenu />}
          {isMobile && 
          
          <Dock 
    items={items}
    panelHeight={80}
    baseItemSize={60}
    magnification={60}
  />

          
          }
          <div style={{ flex: 1, marginLeft: "0" }}>
            <AppRouter />
          </div>
        </div>
      </Router>

  );
}

