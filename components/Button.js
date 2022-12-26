import React from "react"
import {motion} from "framer-motion";

function button() {
    return (<div className='flex justify-center items-center'>
        <ul className='w-[244px] sm:w-[360px]'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.7
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    },
                }} className='text-xl'>
                    <a href='https://1drv.ms/u/s!Asc22RD7qOktkNQOPIb765oX0wWgyg?e=lSlalr'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Fotos Jutel
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.8
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl'>
                    <a href='https://cheersshop.com.br/atl%C3%A9tica-inatel~196'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Lojinha da Grife
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.9
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl'>
                    <a href='https://twitter.com/atleticainatel'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Twitter
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 1
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl' >
                    <a href='https://www.facebook.com/AtleticaInatel'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Facebook
                    </a>
                </motion.li>
            </motion.div>
        </ul>
    </div>);
}

export default button