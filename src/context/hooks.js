import { useContext } from "react";
import { ListContext } from "./ContextsProvider";

import { loadContext } from "./ContextsProvider";

const useListContext = () => useContext(ListContext);
export default useListContext;

const useLoad = () => useContext(loadContext);
export {useLoad};