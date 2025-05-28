import * as Location from "expo-location";
import { useEffect, useMemo, useState } from "react";

type LocationType = {
  altitude: number | null;
  latitude: number;
  longitude: number;
  accuracy?: number | null;
  timestamp?: number;
};

type UseLocationReturn = {
  location: LocationType | null;
  error: string | null;
  isLoading: boolean;
};

const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const getCurrentLocation = async () => {
      try {
        setIsLoading(true);

        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Permission to access location was denied");
        }

        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
        });

        if (isMounted) {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          });
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getCurrentLocation();

    () => (isMounted = false);
  }, []);

  return useMemo(
    () => ({ location, error, isLoading }),
    [location, error, isLoading]
  );
};

export default useLocation;
