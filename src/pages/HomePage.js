import styled from 'styled-components';
import { Header } from '../components/Header';
import imagemHomePage from '../images/homepageimage.png';
import { Card } from '../components/Card';

const Img = styled.img`
  width: 100vw;
  margin: 0;
  @media (min-width: 769px) {
    display: none;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const DivCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
      <DivCategories>
        <Card
          text="casual"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
        <Card
          text="glamour"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
        <Card
          text="cute"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
        <Card
          text="elegant"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
        <Card
          text="hot"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
        <Card
          text="wedding"
          image="https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp"
        />
      </DivCategories>
    </Main>
  );
};
export default HomePage;
