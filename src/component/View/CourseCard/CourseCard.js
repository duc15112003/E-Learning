import React from 'react';

const CourseCard = () => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2 text-left">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            {/* Placeholder cho ảnh */}
            <div className="bg-gray-300 h-40">
                <img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="Kiến Thức Nhập Môn IT" className='w-full h-40' />
            </div>
            <div className="p-4">
              {/* Tiêu đề khóa học */}
              <h3 className="font-bold text-lg text-gray-800 mb-1">
                KH01 - Lập trình cơ bản cho người mới bắt đầu ...
              </h3>
              {/* Mô tả khóa học */}
              <p className="text-sm text-gray-500 mb-2">
                Khóa học online - Tuyệt vời với số lượng bài giảng 190+ video ...
              </p>
              {/* Thông tin thêm */}
              <div className="text-xs text-gray-500 mb-4">
                <span>A-LEARNING</span>
              </div>
              {/* Rating và số học viên */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-1 text-gray-800 font-semibold">4.8</span>
                <span className="ml-2 text-gray-500">(58)</span>
                <span className="ml-4 text-gray-500">58,367 học viên</span>
              </div>
              {/* Giá cả */}
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold text-lg">190,000₫</span>
                {/* <span className="line-through text-gray-400">999,999₫</span> */}
              </div>
            </div>
          </div>
        </div>
      );
};

const CourseList = () => {
    // Tạo một mảng với 25 phần tử
    const cards = Array.from({ length: 24 }, (_, index) => index);
  
    return (
      <div className="flex flex-wrap -mx-2">
        {/* Dùng map để render mỗi thẻ */}
        {cards.map((card) => (
          <CourseCard key={card} />
        ))}
      </div>
    );
  };
  
  export default CourseList;
