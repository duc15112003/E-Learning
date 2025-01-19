import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    cost: [],
    categories: [],
    levels: [],
    languages: [],
    duration: [],
    rating: [],
  });

  const [openAccordions, setOpenAccordions] = useState({
    cost: false,
    categories: false,
    levels: false,
    languages: false,
    duration: false,
    rating: false,
  });

  const costOptions = ['Có phí', 'Miễn phí'];
  const categoryOptions = [
    'Tin học văn phòng',
    'Lập trình',
    'Thiết kế game',
    'Phân tích dữ liệu',
    'Tài chính',
    'Kế toán',
    'Hành chính nhân sự',
    'Business',
    'Xây dựng',
    'Marketing',
    'Kỹ năng mềm',
    'Ngoại ngữ',
    'Sale',
    'Kỹ năng lãnh đạo',
    'Ứng dụng AI',
  ];
  const levelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  const languageOptions = ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Nhật', 'Tiếng Pháp'];
  const durationOptions = ['Dưới 1 giờ', '1-3 giờ', '3-5 giờ', 'Trên 5 giờ'];
  const ratingOptions = ['1 sao', '2 sao', '3 sao', '4 sao', '5 sao'];
  const [price, setPrice] = useState(200); // Initial price set to the minimum value
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const min = 0;
  const max = 100;

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleCheckboxChange = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const currentFilterValues = updatedFilters[type];

      if (currentFilterValues.includes(value)) {
        updatedFilters[type] = currentFilterValues.filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[type] = [...currentFilterValues, value];
      }

      return updatedFilters;
    });
  };

  const toggleAccordion = (type) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <div className="w-full p-4 bg-white">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2">
        Khóa học
      </h2>
      
      {/* Nút reset bộ lọc */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() =>
            setSelectedFilters({
              cost: [],
              categories: [],
              levels: [],
              languages: [],
              duration: [],
              rating: [],
            })
          }
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          Đặt lại
        </button>
        <div className="text-gray-400 text-sm">Bộ lọc</div>
      </div>

      {/* Accordion - Lọc theo giá khóa học */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion('cost')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Giá khóa học</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.cost ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.cost ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {costOptions.map((option) => (
              <label
                key={option}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.cost.includes(option)}
                  onChange={() => handleCheckboxChange('cost', option)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {option}
                </span>
              </label>
            ))}
            
          </div>
        </div>
        
      </div>

      {/* Accordion - Lọc theo danh mục */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion('categories')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Danh mục</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.categories ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.categories ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {categoryOptions.map((category) => (
              <label
                key={category}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.categories.includes(category)}
                  onChange={() => handleCheckboxChange('categories', category)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion - Lọc theo cấp độ */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion('levels')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Cấp độ</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.levels ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.levels ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {levelOptions.map((level) => (
              <label
                key={level}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.levels.includes(level)}
                  onChange={() => handleCheckboxChange('levels', level)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion - Lọc theo ngôn ngữ */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion('languages')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Ngôn ngữ</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.languages ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.languages ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {languageOptions.map((language) => (
              <label
                key={language}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.languages.includes(language)}
                  onChange={() => handleCheckboxChange('languages', language)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {language}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion - Lọc theo thời lượng */}
      <div className="border-b">
        <button
          onClick={() => toggleAccordion('duration')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Thời lượng</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.duration ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.duration ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {durationOptions.map((duration) => (
              <label
                key={duration}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.duration.includes(duration)}
                  onChange={() => handleCheckboxChange('duration', duration)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {duration}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion - Lọc theo đánh giá */}
      <div>
        <button
          onClick={() => toggleAccordion('rating')}
          className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        >
          <h3 className="text-lg font-medium text-gray-800">Đánh giá</h3>
          <span className={`text-gray-600 transition-transform duration-300 ${openAccordions.rating ? 'rotate-180' : ''}`}>
            <FaChevronDown className="inline text-lg" />
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordions.rating ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pb-4">
            {ratingOptions.map((rating) => (
              <label
                key={rating}
                className="flex items-center mb-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 group-hover:ring-2 group-hover:ring-blue-300 transition duration-300 ease-in-out"
                  checked={selectedFilters.rating.includes(rating)}
                  onChange={() => handleCheckboxChange('rating', rating)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition duration-300">
                  {rating}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
