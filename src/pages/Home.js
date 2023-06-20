import WidgetBtr from "../component/WidgetBtr";
import Widget from "../component/Widget";
import { useSelector } from 'react-redux';


function Home() {
    const OpenWidget = useSelector((state) => state.Slice.OpenWidget);

  return (
    <div className=" bg-gray-400 w-full  h-screen">

        Home
        {OpenWidget ? <Widget />:null}
        <WidgetBtr />
    </div>
  );
}

export default Home;
