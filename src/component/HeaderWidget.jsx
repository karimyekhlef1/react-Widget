import React , {useState , useEffect} from 'react'
import { BsArrowsAngleExpand ,BsArrowsAngleContract,BsArrowLeft} from 'react-icons/bs';
import logo from '../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { handleWidgetSize } from '../redux/AppSlice'
import { handelSearchWidget } from '../redux/AppSlice';
function HeaderWidget() {
    const [Showlanguages,setShowlanguages]=useState(false)

    const WidgetSize = useSelector((state) => state.Slice.WidgetSize);
    const searchWidget = useSelector((state) => state.Slice.searchWidget);
    
    const dispatch = useDispatch();

console.log(searchWidget)
  return (
    <header className='rounded-t-lg  ' style={{height:"10%"}}>
        <div className='flex justify-between px-4 items-center  '>
            <div  className='flex  items-center'>
            {!searchWidget ? 
            <button  onClick={()=>dispatch(handelSearchWidget(false))}>
             <BsArrowLeft />
            </button> : null
            }
                <div>
                  <img src={logo} style={{width:"120px",height:"55px"}} />
                </div>
            </div>
            <div className='flex  items-center'>
                <div className='mx-4'>
                    <button onClick={()=>setShowlanguages(!Showlanguages)}>langage</button>
                </div>
                <div className=' font-medium'>
                    {WidgetSize === "small" ?
                    <button onClick={() => dispatch(handleWidgetSize())}>
                        <BsArrowsAngleExpand />
                    </button>
                    :
                    <button onClick={() => dispatch(handleWidgetSize())}>
                           <BsArrowsAngleContract />
                    </button>
                    }
                
                </div>


            </div>

        </div>
    </header>
  )
}

export default HeaderWidget