"use client";

import Image from 'next/image'
import { useBreakpointValue } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";

// Trying to make a component that will display the CAILogo in different sizes depending on the screen size. Rather than having an image component for each size.

const CAILogo = () => {
    interface Breakpoints extends Partial<Record<string, string>> {
        base?: string; 
        sm?: string;
        md?: string; 
        lg?: string; 
        xl?: string;
    }

    const breakpoints: Breakpoints = {
         base: '430', 
         sm: '280', 
         md: '430', 
         lg: '430', 
         xl: '430',
    }

    const imageWidth = useBreakpointValue<string>(breakpoints)
    const imageHeight = useBreakpointValue<string>(breakpoints)

    return(
        <div>
            <Image src='/images/CAI.svg' width={Number(imageWidth)} height={Number(imageHeight)} className="select-none" alt=""/>
        </div>
    );
}

export default CAILogo;