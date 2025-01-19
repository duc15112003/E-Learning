import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import Logo from '../../img/logoHeader2.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="mr-2 w-12 h-12" // Thay đổi kích thước ở đây
          />
            Học để thành công
          </h3>
          <ul className='ml-8'>
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> Số điện thoại: 03 xxx xxxx
            </li>
            <li className="flex items-center mb-2 mt-6">
              <FaEnvelope className="mr-2" /> Email: contact@hdtc.edu.vn
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 
              <p className='mt-6'> Địa chỉ: Tân Chánh Hiệp, Quận 12, Hồ Chí Minh, Việt Nam</p>              
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="md:pl-10">
            <h3 className="text-xl font-bold mb-4 text-left">Về chúng tôi</h3> {/* Đảm bảo tiêu đề được căn trái */}
            <ul className="list-none space-y-2 text-left"> {/* Căn lề trái cho danh sách */}
                <li>Giới thiệu</li>
                <li>Liên hệ</li>
                <li>Điều khoản</li>
                <li>Bảo mật</li>
            </ul>
        </div>


        {/* Column 3 */}
        <div className="md:pl-10 ">
          <h3 className="text-xl font-bold mb-4">
            CÔNG TY CỔ PHẦN CÔNG NGHỆ BỐN THÀNH VIÊN
          </h3>
          <ul className="list-none space-y-2"> {/* Adjusted spacing */}
            <li>Mã số thuế: 01234567890</li>
            <li>Ngày thành lập: 25/09/2024</li>
            <li className="text-sm mt-4 leading-relaxed"> {/* Adjusted line spacing */}
              Lĩnh vực hoạt động: Công ty là nền tảng học trực tuyến hàng đầu dành cho học sinh, sinh viên và các chuyên gia đăng tải thông tin về các chuyên ngành trong lĩnh vực kỹ thuật, kinh tế, ngoại ngữ, kỹ năng mềm và nhiều lĩnh vực khác.
            </li>
          </ul>
        </div>
      </div>
         <p className="text-sm mt-2">
            ©2024 - 2028 Học để thành công. Nền tảng học trực tuyến hàng đầu Việt Nam
        </p>
        <div className='flex justify-center mt-2'>
        <img src="https://img.icons8.com/?size=30&id=13912&format=png&color=000000" alt="FaceBook"/>
        <img src="https://img.icons8.com/?size=30&id=19318&format=png&color=000000" alt="Youtube"/>
        <img src="https://img.icons8.com/?size=30&id=K6KK5ISTAWwE&format=png&color=000000" alt="TikTok"/>
        </div>
    </footer>
  );
};

export default Footer;
