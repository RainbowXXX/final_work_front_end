import ProductList3 from '../components/ProductLIst3';
import CarouselComponent from '../components/CarouselComponent';

function MainPage() {
    return (
        <>
            <div style={{ padding: '0 50px'}}>
                <p> 上衣</p>
                <div>
                    <ProductList3 />
                </div>
                <p> 下装</p>
                <div className="site-layout-content">
                    <ProductList3 />
                </div>
                <p> 鞋子</p>
                <div className="site-layout-content">
                    <ProductList3 />
                </div>
            </div>
        </>
    );
}

export default MainPage;