import React from 'react';
import useContactForm from './CustomHooks';

const ContactForm = () => {
    const {inputs, handleInputChange, handleSubmit} = useContactForm();

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name
                    <input type="text" 
                    name="name" 
                    onChange={handleInputChange} 
                    value={inputs.name} 
                    required />
                </label>
                <label>
                    Email
                    <input type="email" 
                    name="email" 
                    onChange={handleInputChange} 
                    value={inputs.email} 
                    required />
                </label>
                <label>
                    Comments
                    <input type="text" 
                    name="comments" 
                    onChange={handleInputChange} 
                    value={inputs.comments} 
                    required />
                </label>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ContactForm;



