import {useRef, useState} from "react";

const BentoTilt=({children, className=''})=>{
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);
    const handleMouseMove = (event) => {
        if(!itemRef.current) return;
        const {left, top, width, height} = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left)/width;
        const relativeY = (event.clientY - top)/height;
        const tiltX = (relativeY - 0.5) * 20;
        const tiltY = (relativeX - 0.5) * 20;
        const newTransform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);

    }
    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    return(
        <div className={`${className} transition-transform duration-300 ease-out`} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}>
            {children}
        </div>
    )
}

export default BentoTilt;