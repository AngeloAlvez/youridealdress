import styled from 'styled-components';
import { Header } from '../components/Header';
import imagemHomePage from '../images/homepageimage.png';
import { Card } from '../components/Card';
import Zoom from '@mui/material/Zoom';



const Img = styled.img`
  width: 100vw;
  margin: 0;
  @media (min-width: 769px) {
    display: none;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const DivCategories = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 769px) {
   justify-content: space-evenly;
  }
`;
const Categories = styled.h3`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 24px;
  margin: 20;
  letter-spacing: 2px;
`;
const HomePage = () => {

  return (
    <Main>
      <Header />

      <Img src={imagemHomePage} />

      <Categories>categories</Categories>
      <Zoom in={true} timeout={1000} >


        <DivCategories>
          <Card
            categoria='casual'
            text='casual'
            image="https://img.ltwebstatic.com/images3_pi/2021/12/06/16387586166ae58a85326b4646f86d80ba68ab5ab8_thumbnail_600x.webp"
          />
          <Card
            categoria='festa'
            text='glamour'
            image="https://img.ltwebstatic.com/images3_pi/2020/12/22/160861699713bb564744571108958c2ae6771b8acf_thumbnail_600x.webp"
          />
          <Card
            categoria='fofo'
            text='cute'
            image="https://img.ltwebstatic.com/images3_pi/2022/09/23/16639012725198792435dfa92ed1dc02651204b70a_thumbnail_600x.webp"
          />
          <Card
            categoria='elegante'
            text='elegant'
            image="https://img.ltwebstatic.com/gspCenter/goodsImage/2022/7/21/1699574867_1005190/1A647B2BAB389DA77B5F45EE32F2B456_thumbnail_600x.jpg"
          />
          <Card
            categoria='sensual'
            text='hot'
            image="https://img.ltwebstatic.com/images3_pi/2022/10/08/1665214082daf0f1d1ddb52a4e8fb9597cabc9d9b8_thumbnail_600x.webp"
          />
          <Card
            categoria='casamento'
            text='wedding'
            image="https://img.ltwebstatic.com/images3_pi/2021/07/14/16262350625516cdb2688c6c9451761a120fa70d08_thumbnail_600x.webp"
          />
        </DivCategories>

      </Zoom>



    </Main >


  );
};
export default HomePage;
