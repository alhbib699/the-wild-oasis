import { useQuery } from "@tanstack/react-query"
import { getAllBookings } from "../../services/apiBookings"

function useBookings() {
    const {isLoading , data: bookings ,error} = useQuery({
        queryKey:['bookings'],
        queryFn: getAllBookings,
    })
    console.log(bookings)
    return {isLoading , bookings, error};
}

export default useBookings;
