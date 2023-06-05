import { createSelector } from 'reselect';
import { makeSelectAnimePage } from './selectors';
import { useAppSelector } from '../../hooks';
import { styled } from 'styled-components';

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 600;
`;

const stateSelector = createSelector(makeSelectAnimePage, animePage => ({
  animePage
}));

const HotAnime: React.FC = () => {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    animePage == null ||
    animePage.media == null ||
    animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <HotAnimeContainer>
      {animePage?.media?.map(anime => (
        <AnimeItemContainer key={anime?.id}>
          <AnimeCover>
            <img
              src={anime?.coverImage?.extraLarge ?? ''}
              alt={anime?.title?.english ?? ''}
            />
          </AnimeCover>
          <AnimeTitle>{anime?.title?.english}</AnimeTitle>
        </AnimeItemContainer>
      ))}
    </HotAnimeContainer>
  );
};

export default HotAnime;
