import ProductList from '../components/ProductList';
import CarouselComponent from '../components/CarouselComponent';

function MainPage() {
    return (
        <>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CarouselComponent />
            </div>
            <div className="site-layout-content">
                <ProductList />
            </div>
            <div className="site-layout-content" style={{ textAlign: 'center' }}>
                <p>xptj</p>
                <ProductList />
            </div>
        </>
    );
}

export default MainPage;