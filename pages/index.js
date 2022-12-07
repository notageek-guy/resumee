import { useEffect } from "react";
import { useToggle } from "../context/toggleProvider";
export default function Main() {
  const { toggle} = useToggle();
  useEffect(() => {
   if(toggle){
    window.location.href = "/home";
   }
   else {
    window.location.href = "/login";
   }
  }, [toggle]);
}
