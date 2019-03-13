import useGeolocation, { GeolocationCoords } from './useGeolocation';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';

async function getAddress({ latitude, longitude }: GeolocationCoords) {
  return await axiosMapBoxInstance.get(
    `/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=address`
  );
}

function useUserLocation() {
  const { getCoords } = useGeolocation();
  async function getUserAddress(): Promise<{
    error: boolean;
    data: any;
  }> {
    try {
      const coords = (await getCoords()) as GeolocationCoords;
      const { data } = await getAddress(coords);
      return { data, error: false };
    } catch (e) {
      return { data: null, error: true };
    }
  }

  return getUserAddress;
}

export default useUserLocation;
