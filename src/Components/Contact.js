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
            <h2>お問い合わせ</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">お名前</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="お名前を入力してください"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">メールアドレス</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="メールアドレスを入力してください"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">メッセージ</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="メッセージを入力してください"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">送信</button>
            </form>
        </div>
    );
}

export default Contact;