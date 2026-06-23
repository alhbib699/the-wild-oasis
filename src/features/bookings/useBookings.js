import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SORTBY
  const searchByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = searchByRow.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  //QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getAllBookings({ filter, sortBy, page }),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getAllBookings({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getAllBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count, page };
}

export default useBookings;
