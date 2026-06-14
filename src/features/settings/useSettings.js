import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });
  return { isLoading, settings, error };
}

export default useSettings;
