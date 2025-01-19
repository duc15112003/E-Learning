import React from 'react';
import logoLogin from "../../img/LogoLogin1.png"
function Login() {
  return (
      <div className="flex h-screen items-center justify-centerjustify-center bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mx-auto">

          {/* Left Side - Image/Illustration */}
          <div className="hidden lg:flex items-center justify-center bg-white">
            <div className="text-center">
              <img
                  src= {logoLogin} // Placeholder for your image
                  alt="Learn to Succeed"
                  className="mb-4"
                  width={1150} height={1150}
              />
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex flex-col items-center justify-center bg-white p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-textColor">Đăng nhập để bắt đầu học</h3>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 items-start text-left text-textColor" htmlFor="email">
                  Email hoặc Username
                </label>
                <input
                    id="email"
                    type="text"
                    placeholder="Email hoặc Username"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-left text-textColor" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Đăng nhập
              </button>
            </form>

            <div className="mt-4 text-sm">
              <a href="/forgotpassword" className="text-textColor hover:underline">Quên mật khẩu</a>
            </div>

            <div className="mt-6 w-full flex items-center justify-center">
              <span className="text-gray-500 mx-2">Hoặc</span>
            </div>

            <div className="mt-4 flex space-x-4">
              <button className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-lg hover:underline">
                <img src="https://img.icons8.com/?size=30&id=17949&format=png&color=000000" alt="Google"/>
                <span>Google</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-lg hover:underline hover:bg-blue-200">
                <img src="https://img.icons8.com/?size=30&id=12599&format=png&color=000000" alt="GitHub"/>
                <span>GitHub</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-lg hover:underline">
                <img src="https://img.icons8.com/?size=30&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook"/>
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
