
import { useEffect, useRef } from "react"



export const useOutClick  = (callback: { (): string; (): void }) => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=> {

        function modalOutClick (event: any){

            const target = event.target as HTMLDivElement
            const element = ref.current

            if ( element && !element.contains(target)) {
                callback()
             }
          }
          window.addEventListener("mousedown", modalOutClick)
    
          return () => {
             window.removeEventListener("mousedown", modalOutClick)

        }

    }, [])

    return ref
}
