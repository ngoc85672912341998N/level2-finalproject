import DarkVariantExample from './components/slide';
import Nofication from './components/Nofication';
import BasicExample from './components/Navbar';
import Product from './components/99';
import Grid_product from './components/Grid_product';
import Nofication3 from './components/Nofication3';
import Footer from './components/fotter';
import Footer2 from './components/fotter2';
function Home_page() {
  return (
    <div className="Home_page mt-2">
      <Nofication></Nofication>
      <BasicExample></BasicExample>
      <DarkVariantExample></DarkVariantExample>
      <Grid_product></Grid_product>
      <Product></Product>
      <Nofication3></Nofication3>
      
    </div>
  );
}

export default Home_page;