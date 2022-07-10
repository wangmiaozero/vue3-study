import { useEffect,useState } from "react"

export default function useLoadScript(src, callback,retry=false,options={}) {
    const [loaded,setLoaded] = useState(false);
    const [error,setError] = useState();
    const [retried,setRetried] = useState(false);

    function loadScript() {
        const script = document.createElement('script');
        script.src = src;
        Object.keys(options).forEach(key => script[key] = options[key]);
        document.head.appendChild(script);
        script.onload = () => {
            setLoaded(true);
            setError();
            callback && callback();
        };
        script.onerror = () => {
            setError(true);
            retry && !retried && setRetried(true);
        }
    }

    useEffect(() => {
        loadScript();
    },[]);

    useEffect(() => {
        retried && loadScript();
    },[retried]);

    return { loaded,error };
}