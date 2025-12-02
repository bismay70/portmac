import {} from 'react-tooltip';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
const Dock = () => {
    const dockRef = useRef(null);
    useGSAP(() => {
        const dock = dockRef.current;
        if(!dock) return ;
        const icons = dock.querySelectorAll('.dock-icon');
        const animateIcons = (mouseX)=>{
            const {left} = dock.getBoundingClientRect();
            icons.forEach((icon)=>{
                const {left:iconLeft, width} = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = math.exp(-(disatnce ** 2.5)/20000)
                gsap.to(icon,{
                    scale:1 + 0.25 * intensity,
                    y:-15 * intensity,
                    duration:0.2,
                    ease:"power1.out"
                })

        })
}

const handleMouseMove = (e)=>{

}

return(
    <section id="dock"></section>
)
export default Dock