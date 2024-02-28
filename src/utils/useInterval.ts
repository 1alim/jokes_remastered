import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  const intervalRef: React.MutableRefObject< NodeJS.Timeout | undefined> = useRef();
  const click: React.MutableRefObject<boolean | undefined> = useRef();
  console.log(useRef());
  
  const addInterval = () => {
    if (!click.current) {
      callback()
      console.log(callback());
      
      const id = setInterval(callback, delay);
      intervalRef.current = id;
      click.current = true
    } else {
      intervalRef.current && clearInterval(intervalRef.current)
      click.current = false
    }
  }
  useEffect(() => {
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [])

  return { addInterval }
}