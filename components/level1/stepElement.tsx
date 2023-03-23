import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from 'next/router'

import * as badgeEmpty from "../../assets/badgeEmpty.png";
import * as badgeFull from "../../assets/badgeFull.png";

import { HStack } from "@chakra-ui/react";

type StepData = {
    title: string;
    active: boolean;
    complete: boolean;
    urlPath: string;
  };  

type Props = {
    data: StepData;
  };


export function StepElement({ data }: Props) {

    const router = useRouter()

    const title = data.title ?? "Step Title";
    const active = data.active ?? false;
    const complete = data.complete ?? false;


    const handleClick = (e: any) => {
        e.preventDefault();
        console.log("goToPaint");
        router.push(data.urlPath);
    }

    if (active) {
        if (complete) {
            return (
                <>
                    <div className="flex items-center my-1">
                        <HStack>
                            <motion.div 
                            animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            >
                            <Image alt="image1" width={'80'} height={'80'} src={badgeFull} />
                            </motion.div>
                            <h1 className="textLabel completed">{title}</h1>

                        </HStack>
                    </div>

                    <style jsx>{`
                        .textLabel {
                            font-size: 35px!important;
                            font-weight: 300!important;
                            width: 350px;
                            padding-left: 25px;
                            }
                        .active {
                            color: yellow;
                        }
                        .inactive {
                            color: grey;
                        }
                    `}</style>
                </>
            );
        } else {
            return (
                <>
                <div className="flex items-center my-1 cursor-pointer" onClick={handleClick}>
                    <HStack>
                        <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                                <Image alt="image1" width={'80'} height={'80'} src={badgeEmpty} />
                        </motion.div>
                        <h1 className="textLabel active">{title}</h1>
                    </HStack>
                </div>

                    <style jsx>{`
                        .textLabel {
                            font-size: 35px!important;
                            font-weight: 300!important;
                            width: 350px;
                            padding-left: 25px;
                            }
                        .active {
                            color: yellow;
                        }
                        .inactive {
                            color: grey;
                        }
                    `}</style>
                </>
            );
        }
    } else {
        return (
            <>
            <div className="flex items-center my-1">
                <HStack>
                    <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                    <Image alt="image1" width={'80'} height={'80'} src={badgeEmpty} />
                    </motion.div>
                    <h1 className="textLabel inactive">{title}</h1>
                    
                </HStack>
            </div>
 
                <style jsx>{`
                        .textLabel {
                            font-size: 35px!important;
                            font-weight: 300!important;
                            width: 350px;
                            padding-left: 25px;
                            }
                        .active {
                            color: yellow;
                        }
                        .inactive {
                            color: red;
                        }
                    `}</style>
           </>
        );

    }

}