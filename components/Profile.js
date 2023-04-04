import React from "react";
import Image from "next/image";
import profilePic from '../public/profilepic.png'
import {motion} from "framer-motion";
function profile() {
    return (
        <div className='w-full pt-12 pb-4
        flex justify-center items-center
        flex-col text-center space-y-6'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                },
            }}>
                <div className='bg-gradient-to-tr from-amber-200
                via bg-amber-300 to indigo-200 h-48 w-48
                border-none rounded-full overflow-hidden'>
                    <Image
                        src={profilePic}
                        alt='My Profile Picture'
                        height={400}
                        width={400}
                        placeholder="blur"
                    />
                </div>
            </motion.div>
            <div>
                <motion.h2 className='font-sans text-xl font-bold text-white' initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .5
                        }
                    },
                }}>

                    Atlética Inatel
                </motion.h2>
                <motion.h2 initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .6
                        }
                    },
                }}>
                    <motion.div whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }} className='font-sans text-gray-300 hover:text-aaa-yellow'>
                        <a href='https://instagram.com/atleticainatel'
                           target={'_blank'}
                           rel={'noreferrer'}

                        >
                            @atleticainatel
                        </a>
                    </motion.div>
                </motion.h2>
            </div>
        </div>
    );
}

export default profile