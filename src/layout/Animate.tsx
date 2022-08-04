import { motion } from 'framer-motion';
import React from 'react';
import { BaseProps } from '../types/interface';

const Animate: React.FC<BaseProps> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
    >
        {children}
    </motion.div>
);

const AnimateLoading: React.FC<BaseProps> = ({ children }) => (
    <motion.div
        animate={{
            opacity: [1, 0.75, 0.5, 0.25, 0],
        }}
    >
        {children}
    </motion.div>
);

export { Animate, AnimateLoading };
