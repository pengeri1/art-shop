import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_13ubm9b',
            'template_7r98cpo',
            { name, email, message },
            'CInovxM6m6hxYh2dX'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('Failed to send message.');
            });
    };


    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p className="contact-description">Please message if you want to purchase or have any questions about art pieces. Also message about custom orders!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}

export default Contact;