import { useState, useRef } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

import BentoTilt from "../components/BentoTilt.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('albinpallipeedika@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <BentoTilt className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi there, I'm Albin </p>
                            <p className="grid-subtext">A Frontend Developer with 2 years of experience, I have honed my skills in building user-friendly interfaces and optimizing web applications for enhanced user experience.</p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript/TypeScript, React, Tailwind CSS, Figma</p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 17.5362108,
                                    lng: 73.502423,
                                    text: "I'm here!",
                                    size: 260
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotly</p>
                            <p className="grid-subtext">I am currently working remotely from India. If you have any questions or would like to work together, don't hesitate to reach out.</p>
                            <a href="#contact" className="w-fit">
                            <Button name="Contact Me" isBeam containerClasses="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I am passionate about coding and love to create beautiful and functional websites. I am always eager to learn new technologies and improve my skills.</p>
                        </div>
                    </div>
                </BentoTilt>

                <BentoTilt className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">albinpallipeedika@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </BentoTilt>
            </div>
        </section>
    );
};

export default About;