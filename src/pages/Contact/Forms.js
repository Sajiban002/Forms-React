import React, { useState, useEffect } from 'react';

function Forms() {
    const [fullName, namecheck] = useState('');
    const [email, emailcheck] = useState('');
    const [type, typecheck] = useState('Select a topic');
    const [messages, messagecheck] = useState('');
    const [accepts, acceptcheck] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    const checkstatus = (event) => {
        event.preventDefault();
        const form = {
            fullName: fullName,
            email: email,
            type: type,
            messages: messages,
            accepts: accepts
        };

        console.log("Данные формы:", form);
        alert("Ваши данные успешно отправлены!");
    };

    return (
        <section className="formsContainer">
            <p className="contactUs">Contact Us</p>
            <h2 className="formsTitle">Let's Start a Conversation</h2>
            <p className="formsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="formsInfoBox">
                <div className="formsWorkingHours">
                    <h4 className="formsSubtitle">Working hours</h4>
                    <p className="formsWorkingTime"><strong>Monday To Friday</strong><br />9:00 AM to 8:00 PM</p>
                    <p className="formsSupport">Our Support Team is available 24/7</p>
                </div>
                <div className="formsContactInfo">
                    <h4 className="formsSubtitle">Contact Us</h4>
                    <p className="formsPhoneNumber"><strong>020 7993 2905</strong></p>
                    <p className="formsEmail">hello@finsweet.com</p>
                </div>
            </div>

            <p className="timer">Текущее время: {time}</p> {/* Timer Display */}

            <form className="formsForm" onSubmit={checkstatus}>
                <label htmlFor="fullName" className="formsLabel">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="formsInput"
                    value={fullName}
                    onChange={(e) => namecheck(e.target.value)}
                />

                <label htmlFor="email" className="formsLabel">Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="formsInput"
                    value={email}
                    onChange={(e) => emailcheck(e.target.value)}
                />

                <label htmlFor="queryType" className="formsLabel">Query Related</label>
                <select
                    id="queryType"
                    name="queryType"
                    className="formsSelect"
                    value={type}
                    onChange={(e) => typecheck(e.target.value)}
                >
                    <option>Select a topic</option>
                    <option>Support</option>
                    <option>Sales</option>
                    <option>Other</option>
                </select>

                <label htmlFor="message" className="formsLabel">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="formsTextarea"
                    value={messages}
                    onChange={(e) => messagecheck(e.target.value)}
                ></textarea>

                <div className="formsTerms">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={accepts}
                        onChange={(e) => acceptcheck(e.target.checked)}
                    />
                    <label htmlFor="terms" className="formsTermsLabel">Я согласен с условиями пользования</label>
                </div>

                <button type="submit" className="formsButton">Send Message</button>
            </form>
        </section>
    );
}

export default Forms;