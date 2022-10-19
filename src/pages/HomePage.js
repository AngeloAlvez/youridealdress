import styled from 'styled-components';
import { Header } from '../components/Header';
import imagemHomePage from '../images/homepageimage.png';
import { Card } from '../components/Card';
import { goToCategories } from '../routers/cordinator';



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
          categoria='casual'
          text='casual'
          image='https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp'
        />
        <Card
          categoria='festa'
          text='glamour'
          image='https://img.ltwebstatic.com/images3_pi/2021/12/29/164076139962437bb92b8c00b440c4832fd23e51f7_thumbnail_600x.webp'
        />
        <Card
          categoria='fofo'
          text='cute'
          image='https://img.ltwebstatic.com/images3_pi/2020/12/22/160861699713bb564744571108958c2ae6771b8acf_thumbnail_600x.webp'
        />
        <Card
          categoria='elegante'
          text='elegant'
          image='https://img.ltwebstatic.com/images3_pi/2022/03/30/1648609661d52945a9ceac3098099e72d44d7019b9_thumbnail_600x.webp'
        />
        <Card
          categoria='sensual'
          text='hot'
          image='https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp'
        />
        <Card
          categoria='casamento'
          text='wedding'
          image='https://img.ltwebstatic.com/images3_pi/2022/08/31/16619316646351879799204afe4d2194bd758a7f7b_thumbnail_600x.webp'

        />
      </DivCategories>
    </Main>
  );
};
export default HomePage;
