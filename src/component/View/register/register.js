import logoLogin from "../../img/LogoLogin1.png"
function register() {
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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Đăng kí để bắt đầu học</h2>
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Họ"
                                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Tên"
                                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="tel"
                            placeholder="Số điện thoại"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Đăng kí
                        </button>
                    </form>
                    <p className="text-sm text-gray-600 mt-4">
                        Bằng việc đăng kí, bạn đồng ý với <a href="#" className="text-blue-600">Điều khoản sử dụng</a> và <a href="#" className="text-blue-600">Chính sách quyền riêng tư</a>.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Bạn đã có tài khoản chưa? <a href="/" className="text-blue-600">Đăng nhập</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default register