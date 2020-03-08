import React, {useState} from 'react';
import axios from 'axios';

import { ReactComponent as SendIcon } from '../assets/nav_icons/paper-plane-solid.svg';


export default function ContactForm() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmitForm = async(e) => {
        e.preventDefault();

        if (name && email && subject && message) {
            try {
                const { data } = await axios.post('/api/contact/send', {name, email, subject, message});
                if (data.status === 'success') {
                    window.alert('Message successfully sent');
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    window.alert('Sorry, message failed to send');
                }
            } catch (err) {
                window.alert('Sorry, something went wrong!');
            }
        }
    }

    return (
        <form className='was-validated' onSubmit={handleSubmitForm}>
            <div className='row md-form px-4 pt-4'>
                <div className='form-group col-sm-4'>
                    <label> Name:
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Enter Name' 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </label>
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>

                <div className='form-group col-sm-4'>
                    <label> Email:
                        <input 
                            type='email' 
                            className='form-control' 
                            placeholder='Enter your email' 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </label>
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>

                <div className='form-group col-sm-4'>
                    <label> Subject:
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Subject' 
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            required />
                    </label>
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>

                <div className='form-group col-sm-12 px-3'>
                    <label htmlFor='message' className='w-100'>Message:
                        <textarea 
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Enter your message here' 
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows='5'
                            required />
                    </label>
                    <div className='valid-feedback'>Valid.</div>
                    <div className='invalid-feedback'>Please fill out this field.</div>
                </div>
            </div>

            <div className='text-right'>
                <button className='btnClear'><SendIcon className='navIcon'/></button>
            </div>
        </form>
    )
}