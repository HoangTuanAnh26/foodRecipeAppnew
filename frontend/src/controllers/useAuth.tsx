import { useState } from 'react';


export const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Giả lập mạng delay 1 giây
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === 'test@gmail.com' && password === 'password') {
            // 1. Ghi token vào sổ tay trình duyệt ở đây:
            localStorage.setItem('token', 'mock-jwt-token');

            // 2. Hiện thông báo thành công bằng Tiếng Anh
            alert('Login successful!');
        } else {
            setError('Invalid email or password!');
        }

        setLoading(false);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        error,
        handleLogin
    };
};





