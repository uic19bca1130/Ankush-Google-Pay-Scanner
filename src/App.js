import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import QRDetails from './Screens/QRDetails'
import GooglePayQR from './Screens/GooglePayQR'
import QRLocation from './Screens/QRLocation'


function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="" element={<QRDetails/>}/>
        <Route path="QRDetails" element={<QRDetails/>}/>
        <Route path="GooglePayQR" element={<GooglePayQR/>}/>
        <Route path="QRLocation" element={<QRLocation/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;