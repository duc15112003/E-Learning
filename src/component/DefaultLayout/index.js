import Carousel from "./Carosel/carosel";
import FilterComponent from "./FilterComponent/FilterComponent";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
const DefaultLayout=({children})=>{
    return(
        <>
        <Header />
        <Navbar />
        <Carousel />

        <div className="flex px-8 py-8 bg-gray-100">

            {/* FilterComponent nằm bên trái */}
            <div className="w-1/5 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Lọc Khóa Học</h2>
            <FilterComponent />
            </div>

            {/* Nội dung chính nằm bên phải */}
            <div className="w-4/5 ml-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Danh Sách Khóa Học</h2>
            {children}
            </div>
        </div>
        <Footer />
        </>

      
    );
}

export {DefaultLayout};