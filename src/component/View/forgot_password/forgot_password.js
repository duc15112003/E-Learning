import React from 'react';
import logoLogin from "../../img/LogoLogin1.png"
function forgot_password() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
                {/* Left side: Image */}
                <div className="w-1/2 bg-gray-100 p-8 flex justify-center items-center">
                    <img
                        src={logoLogin}
                        alt="Learn to Succeed"
                        className="object-contain h-96"
                    />
                </div>

                {/* Right side: Form */}
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Đặt lại mật khẩu để bắt đầu học</h2>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Nhập mã xác nhận"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Gửi mã
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Đặt lại mật khẩu
                        </button>
                    </form>
                    <p className="text-sm text-gray-600 mt-4">
                        Học? <a href="#" className="text-blue-600">Đăng nhập</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default forgot_password;
