import { useContext } from "react";
import { ListContext } from "./ContextsProvider";


const useListContext = () => useContext(ListContext);
export default useListContext;
