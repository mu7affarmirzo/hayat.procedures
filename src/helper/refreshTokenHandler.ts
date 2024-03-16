import { StorageService } from '../api/StorageService';
import { useRefreshTokenMutation } from '../store/login/LoginService';

export const RefreshTokenHandler = async () => {
  const refreshToken = StorageService.load('refreshToken');
  const [fetchRefresh] = useRefreshTokenMutation();

  if (refreshToken) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetchRefresh(refreshToken);
      console.log(response, 'refresh toeken res ');
      const newAccessToken = response;
      StorageService.save('accessToken', newAccessToken);
    } catch (error) {
      throw error;
    }
  }
};
