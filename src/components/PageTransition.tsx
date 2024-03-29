import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0.75,
        y: 50,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
        },
    },
};

const PageTransition = ({ children }: { children: ReactNode }): JSX.Element => (
    <AnimatePresence>
        <motion.div initial="initial" animate="enter" variants={variants}>
            {children}
        </motion.div>
    </AnimatePresence>
);

export default PageTransition;
