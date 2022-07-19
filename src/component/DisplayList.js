import useListContext from '../context/hooks';
import Doing from './ListStates/Doing';
import Done from './ListStates/Done';
import Removed from './ListStates/Removed';


const DisplayList = () => {
    // K dung vao thk filter khi no khong thay doi
    const [state,] = useListContext();
    const { filtered } = state;
   
    
   if (filtered === 'In Progress') {
    return <Doing />;
   } else if (filtered === 'Completed') {
    return <Done />;
   } else {
    return <Removed />
   }
}

export default DisplayList