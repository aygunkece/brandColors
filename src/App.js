import './App.css';
import MainContext from "./MainContext";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BrandsData from "./brands.json";
import {useEffect, useState} from "react";
import Copied from "./components/Copied";
function App() {
    const brandsArray = Object.keys(BrandsData).map(key => BrandsData[key]);

    const [brands,setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([])
    const [copied, setCopied] = useState(false)

    useEffect(() => {
       console.log(selectedBrands)
    }, [selectedBrands]);

    useEffect( () => {
        if (copied){
            setTimeout(()=> {
                setCopied(false)
            },500)
        }
    }, [copied])
    const data = {
        brands,
        selectedBrands,
        setSelectedBrands,
        setCopied
    }

  return (
      <>
          <MainContext.Provider value={data}>
              {copied && <Copied color={copied}/>}
              <Sidebar />
              <Content />

          </MainContext.Provider>

      </>

  );
}

export default App;
