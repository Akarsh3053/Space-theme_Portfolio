"use client"

import React, { useState } from "react"

const ContactPage = () => {

    return (
        <>
            <video
                autoPlay
                muted
                loop
                className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-conver'>

                <source src='/blackhole.webm' type='video/webm' />
            </video>
        </>
    )
}

export default ContactPage