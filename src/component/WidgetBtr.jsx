import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenWidget } from '../redux/AppSlice'


function WidgetBtr() {
  const OpenWidget = useSelector((state) => state.Slice.OpenWidget);
  const dispatch = useDispatch();
  
    return (
      <div className= "fixed  right-24 bottom-16">
       {OpenWidget ?
          <button
            className=" bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center   "
            onClick={() => dispatch(handleOpenWidget())}>

             <AiFillCaretDown className='text-white  '/>

          </button>
         :
         <button
          className=" bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center hover:w-32 "
          onClick={() => dispatch(handleOpenWidget())}>
           <AiFillCaretUp  className='  text-white' />
          </button>}
      
      </div>
    );
  }
  
  export default WidgetBtr;
  