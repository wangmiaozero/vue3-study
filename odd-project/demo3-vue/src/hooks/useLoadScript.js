import { reactive,toRefs,onMounted } from 'vue'

export default function useLoadScript(src, callback,retry=false,options={}) {
    let data = reactive({
		loaded:false,
		error:null,
        retried:false
	})

    function loadScript() {
        const script = document.createElement('script');
        script.src = src;
        Object.keys(options).forEach(key => script[key] = options[key]);
        document.head.appendChild(script);
        script.onload = () => {
            data.loaded = true;
            data.error = null;
            callback && callback();
        };
        script.onerror = () => {
            data.error = true;
            if(retry && !data.retried){
                data.retried = true;
            }
        }
    }

    onMounted(() => {
		loadScript();
	})

	onMounted(() => {
		data.retried && loadScript();
	})

    return { ...toRefs(data) };
}