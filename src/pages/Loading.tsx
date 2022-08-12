import React from 'react';
import { motion } from 'framer-motion';
import LoadingVector from '@/assets/images/loading/loading-vector.png';
import LoadingMaskot from '@/assets/images/loading/loading-maskot.png';

const Loading: React.FC<{}> = () => (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
        <div className="flex justify-center relative">
            <img
                className="max-w-[65%] md:max-w-[55%]"
                src={LoadingVector}
                alt="loading-vector"
            />
            <div className="absolute max-w-[45%] md:max-w-[35%]  mr-10">
                <motion.div
                    transition={{
                        y: {
                            yoyo: Infinity,
                            ease: 'easeOut',
                        },
                    }}
                    animate={{
                        y: ['0%', '-40%'],
                    }}
                    className="relative"
                >
                    <img src={LoadingMaskot} alt="loading-maskot" />
                </motion.div>
            </div>
            <div className="absolute bottom-[30%] md:bottom-[37%] mr-6 font-Heading text-[30px] md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
                LOADING
            </div>
        </div>
    </div>
);

export default Loading;
