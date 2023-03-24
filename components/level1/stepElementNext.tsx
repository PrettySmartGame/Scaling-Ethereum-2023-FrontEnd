import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from 'next/router'

import { HStack } from "@chakra-ui/react";

import * as badgeEmpty from "../../assets/app/badgeEmpty.png";
import * as badgeFull from "../../assets/app/badgeFull.png";
import * as badgeWinner from "../../assets/app/badgeWinner.png";

export type ItemData = {
    title: string;
    active: boolean;
    complete: boolean;
  };

type Props = {
    data: ItemData;
  };

export function StepElement({ data }: Props) {

    const router = useRouter()

    const title = data.title ?? "Step Title";
    const active = data.active ?? false;
    const complete = data.complete ?? false;

    if (active) {
        if (complete) {
            return (
                <>
                    <div className="flex items-center my-1">
                    <HStack>
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        >
                        <Image alt="image1" width={'80'} height={'80'} src={badgeWinner} />
                        </motion.div>
                        <h1 className="textLabel completed">{title}</h1>

                    </HStack>
                    </div>

                    <style jsx>{`
                        .textLabel {
                            font-size: 35px!important;
                            font-weight: 400!important;
                            width: 300px;
                            padding-left: 35px;
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
                <div className="flex items-center my-1 cursor-pointer">
                <HStack>
                    <motion.div 
                        animate={{ scale: [1, 1.5, 1,  1.5, 1,  1.5, 1,  1.5, 1,  1.5, 1], opacity: [0, 1] }}
                        transition={{ duration: 6, delay: 0.5 }}
                        >
                        <Image alt="image1" width={'100'} height={'100'} src={badgeWinner} />
                    </motion.div>
                    <h1 className="textLabel active">{title}</h1>
                </HStack>
                </div>

                    <style jsx>{`
                        .textLabel {
                            font-size: 35px!important;
                            font-weight: 400!important;
                            width: 300px;
                            padding-left: 35px;
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
                            font-weight: 400!important;
                            width: 300px;
                            padding-left: 35px;
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