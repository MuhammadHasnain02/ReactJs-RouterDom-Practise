import { useContext } from "react";
import { GlobalContext } from "./MyContext";

function useGlobal() {
    return useContext(GlobalContext);
}

export default useGlobal