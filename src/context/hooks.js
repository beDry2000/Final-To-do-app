import { useContext } from "react";
import { ListContext } from "./ContextsProvider";
import { ThemeContext } from "./theme";

import { loadContext } from "./ContextsProvider";

const useListContext = () => useContext(ListContext);
export default useListContext;

const useLoad = () => useContext(loadContext);
export {useLoad};

const useTheme = () => useContext(ThemeContext);
export {useTheme};