import React from 'react';

function navbar() {
    return (
        <div className="bg-textColor text-white py-3">
            <nav className="flex justify-center space-x-8">
                <a href="#" className="hover:text-gray-300">Dành cho doanh nghiệp</a>
                <a href="#" className="hover:text-gray-300">Tin học văn phòng</a>
                <a href="#" className="hover:text-gray-300">Phân tích dữ liệu</a>
                <a href="#" className="hover:text-gray-300">Thiết kế</a>
                <a href="#" className="hover:text-gray-300">Hành chính nhân sự</a>
                <a href="#" className="hover:text-gray-300">Marketing</a>
                <a href="#" className="hover:text-gray-300">Sale</a>
                <a href="#" className="hover:text-gray-300">Lập trình</a>
                <a href="#" className="hover:text-gray-300">Kỹ năng mềm</a>
                <a href="#" className="hover:text-gray-300">Ngôn ngữ</a>
                <a href="#" className="hover:text-gray-300">Business</a>
                <a href="/blog" className="hover:text-gray-300">Blog</a>
            </nav>
        </div>
    );
}

export default navbar;
