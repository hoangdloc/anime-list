import { apolloClient } from '../../graphql';
import { type GetAnimePage } from './__generated__/GetAnimePage';
import { GET_ANIME_PAGE } from './queries';

class AnimeService {
  async getAnimePage (page: number, perPage = 5): Promise<GetAnimePage['Page']> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage }
      });

      if (response == null || response.data == null) {
        throw new Error('Cannot get anime list!');
      }

      return response.data.Page;
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  }
}

export default new AnimeService();
