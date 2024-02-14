'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import MainHeaderLogo from './MainHeaderLogo';
import { ImSearch } from "react-icons/im";
import { useRouter, useSearchParams } from 'next/navigation';

export default function MainHeader() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialVal = searchParams.get('keyword');
    const [isInput, setIsInput] = useState(false);
    const [inputValue, setInputValue] = useState(initialVal || '');
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

    const handleSubmit = (e: { preventDefault(): unknown }) => {
        e.preventDefault();
        const parseKeyword = encodeURIComponent(inputValue);
        router.push(`?keyword=${parseKeyword}`);
    };

    useEffect(() => {
        if (isInput) {
            inputRef.current.focus();
        }
    }, [isInput]);

    return (
        <div className={styles['all-wrapper']}>
            <div className={styles['container']}>
                <form
                    className={styles['default-container']}
                    onSubmit={handleSubmit}
                >
                    <AnimatePresence>
                    {isInput && (
                        <motion.input
                            className={styles['search-input']}
                            ref={inputRef}
                            maxLength={20}
                            placeholder='メンター名で検索'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={handleInput}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
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
                </form>
            </div>
        </div>
    );
}
