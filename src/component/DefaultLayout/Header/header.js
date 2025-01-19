import React from 'react';
import logoHeader from '../../img/logoHeader2.png'
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-4 py-2">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
          <img 
            src={logoHeader}
            alt="Logo" 
            className="h-12 w-auto"
          />
        <h1 className="text-textColor font-bold text-xl">Học để thành công</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input 
          type="text" 
          placeholder="Tìm kiếm khóa học, bài viết, video, ..." 
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <a href='/register' className="px-4 py-2 bg-white text-textColor border border-textColor rounded-full hover:bg-textColor hover:text-white">
          Đăng kí
        </a>
        <button className="px-4 py-2 bg-textColor text-white rounded-full hover:bg-white hover:text-textColor hover:border border-textColor">
          Đăng nhập
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">
          <img 
            src='https://img.icons8.com/?size=20&id=3685&format=png&color=000000'
            alt="Logo" 
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
