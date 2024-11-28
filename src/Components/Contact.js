import React, { useState } from 'react';

function Contact() {
    // フォームデータの状態管理
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // 入力変更のハンドラー
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // フォーム送信時のハンドラー
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('送信されたデータ:', formData);
        alert('今回は見た目だけなので今は送れません');
        setFormData({ name: '', email: '', message: '' }); // フォームリセット
    };

    return (
        <div className="contact-container">
            <h5>声をかける</h5>
            <h2>CONTACT</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">NAME</label>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label htmlFor="email">MAIL ADRESS</label>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label htmlFor="message">MESSAGE</label>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">送信</button>
            </form>
            <div className='contact-empty'></div>
        </div>
    );
}

export default Contact;