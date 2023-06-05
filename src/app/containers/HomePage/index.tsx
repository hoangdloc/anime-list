import { styled } from 'styled-components';
import animeService from '../../services/animeService';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { setAnimePage } from './homePageSlice';
import HotAnime from './HotAnime';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const fetchAnimeListPage = async (): Promise<void> => {
    const animePage = await animeService.getAnimePage(0, 200).catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error 💥', err);
    });

    if (animePage != null) {
      dispatch(setAnimePage(animePage));
    }
  };

  useEffect(() => {
    void fetchAnimeListPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
};

export default HomePage;
