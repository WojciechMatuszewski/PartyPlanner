import useGeolocation, { GeolocationCoords } from './useGeolocation';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';

export async function getAddress({ latitude, longitude }: GeolocationCoords) {
  return await axiosMapBoxInstance.get(
    `/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=address`
  );
}

export interface UserLocation {
  coords: GeolocationCoords;
  placeName: string;
}

function useUserLocation() {
  const { getCoords } = useGeolocation();
  async function getUserAddress(): Promise<{
    error: boolean;
    data: UserLocation;
  }> {
    try {
      const coords = (await getCoords()) as GeolocationCoords;
      const { data } = await getAddress(coords);

      return {
        data: { placeName: data.features[0].place_name, coords: coords },
        error: false
      };
    } catch (e) {
      return {
        data: { coords: { latitude: 0, longitude: 0 }, placeName: '' },
        error: true
      };
    }
  }

  return getUserAddress;
}

export default useUserLocation;
