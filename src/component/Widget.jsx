import HeaderWidget from "./HeaderWidget";
import FooterWidget from "./FooterWidget";
import MainWidget from "./MainWidget";
import { useSelector } from "react-redux";
import SearchWidget from "./SearchWidget";
function Widget() {

  const WidgetSize = useSelector((state) => state.Slice.WidgetSize);
  const searchWidget = useSelector((state) => state.Slice.searchWidget);


  const widgetStyle = ( WidgetSize ) => {
    if (WidgetSize==="small"){
      return { width:"30%" , height : "80vh" }
    }else{
      return { width:"60%" , height : "80vh"}
    }
  }
  
    return (
      <div className= " fixed right-16 bottom-32  bg-white rounded-lg border border-gray-100 border-spacing-1" style={widgetStyle(WidgetSize)}>
        <HeaderWidget />
        {searchWidget ?
         <MainWidget /> : <SearchWidget/>

        }
        <FooterWidget />
      </div>
    );
  }
  
  export default Widget;
  