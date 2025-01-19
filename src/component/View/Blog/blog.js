import React from 'react';

const BlogCard = () => {
  // Mảng giả định với 25 phần tử
  const cards = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
      {cards.map((card) => (
        <div key={card} className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Hình ảnh */}
          <div className="bg-gray-200 h-48 w-full"></div>

          {/* Nội dung */}
          <div className="px-6 py-4">
            {/* Ngày và danh mục */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">27 Th9, 2024</span>
              <span className="bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded-full">
                Công nghệ
              </span>
            </div>

            {/* Tiêu đề */}
            <div className="font-bold text-lg mb-2 text-gray-800">
              Cách đưa code lên GitHub tạo GitHub Pages
            </div>

            {/* Mô tả */}
            <p className="text-gray-600 text-sm">
              Bạn muốn tạo một website cá nhân chuyên nghiệp mà không cần phải đầu tư...
            </p>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 flex justify-between items-center border-t">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <span className="ml-2 text-sm text-gray-600">Người đăng</span>
            </div>
            <div className="flex items-center text-blue-700 cursor-pointer">
              <span className="text-sm">Xem bài viết</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
