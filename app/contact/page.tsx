"use client"

import React, { useState } from "react"

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send('your_service_id', 'your_template_id', {
            name,
            email,
            message,
        }, 'your_user_id')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <video
                autoPlay
                muted
                loop
                className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-conver'>

                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <form onSubmit={handleSubmit} className="contact-form absolute top-10">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="contact-form-input"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="contact-form-input"
                    placeholder="Email"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-form-input"
                    placeholder="Message"
                    required
                />
                <button type="submit" className="contact-form-button">
                    Send
                </button>
            </form>
        </>
    )
}

export default ContactPage