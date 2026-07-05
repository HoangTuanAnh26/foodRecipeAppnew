## 1. Nội dung
* **Hiển thị màn hình Category Details**: Cho phép người dùng xem danh sách các món ăn thuộc một danh mục cụ thể.

## 2. Cấu trúc thư mục dự án (Folder Structure)
* **components/**: Chứa các file có thể tái sử dụng(Ví dụ: `Header.tsx`, `Fooder.tsx`).
* **pages/**: Chứa các React component (Ví dụ: `CategoryDetails.tsx`).
* **App.tsx**: Component chính, quản lý giao diện tổng thể và điều hướng.
* **main.tsx**: Điểm khởi chạy (Entry point), render ứng dụng vào DOM.
* **App.css**: File định nghĩa các phong cách giao diện (Styling).

> **Luồng hoạt động**: Vite khởi động và tải `index.html`, sau đó thực thi `main.tsx` để render `App.tsx`. Từ đây, các component con được gọi để hiển thị giao diện (UI) hoàn chỉnh.

## 3. Sơ đồ Sequence
<img width="865" height="820" alt="image" src="https://github.com/user-attachments/assets/919929e5-57f9-4890-8f13-c6d10aabee47" />


