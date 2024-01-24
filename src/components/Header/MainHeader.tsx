'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import MainHeaderLogo from './MainHeaderLogo';
import { ImSearch } from "react-icons/im";

export default function MainHeader() {
    const [isInput, setIsInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<any>(null);

    const handleInput = () => {
        setIsInput(!isInput);
    };

    const handleButton = () => {
        if (isInput) {
        } else {
            handleInput();
        };
    };

    useEffect(() => {
        if (isInput) {
            inputRef.current.focus();
        }
    }, [isInput]);

    return (
        <div className={styles['all-wrapper']}>
            <div className={styles['container']}>
                <div className={styles['default-container']}>
                    <AnimatePresence>
                    {isInput && (
                        <motion.input
                            className={styles['search-input']}
                            ref={inputRef}
                            placeholder='メンター名で検索'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={handleInput}
                            initial={{opacity: 0}}
                            animate={{opacity: 1,}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.6}}
                        />
                    )}
                    </AnimatePresence>
                    <motion.div
                        className={styles['image-box']}
                        animate={isInput ?
                            {display: 'none', opacity: 0}
                            : {display: 'flex', opacity: 1, transition: {delay: 0.6, duration: 0.2}}
                        }
                    >
                        <MainHeaderLogo />
                    </motion.div>
                    <div
                        className={styles['search-button']}
                        onClick={handleButton}
                    >
                        <ImSearch />
                        検索
                    </div>
                </div>
            </div>
        </div>
    );
}
