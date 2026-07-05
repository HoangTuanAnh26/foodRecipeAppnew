const BASE_URL = 'http://127.0.0.1:8000/api';

export const authRepository = {
    // Gửi dữ liệu sang API Đăng ký của Laravel
    register: async (email: string, password: string) => {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // Bắt buộc để Laravel trả về JSON khi có lỗi
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        
        // Nếu Laravel trả về lỗi (422, 500...), ném lỗi ra để Controller xử lý
        if (!response.ok) {
            throw new Error(data.message || 'Đăng ký thất bại');
        }

        return data; // Trả về { message, user, token } nếu thành công
    },

    // Gửi dữ liệu sang API Đăng nhập
    login: async (email: string, password: string) => {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Đăng nhập thất bại');
        }

        return data;
    }
};