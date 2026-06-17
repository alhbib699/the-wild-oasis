import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy options={[
        {value:'name-asc',label:'Sorted by name (A-Z)'},
        {value:'name-desc',label:'Sorted by name (Z-A)'},
        {value:'regularPrice-asc',label:'Sorted by price (low first)'},
        {value:'regularPrice-desc',label:'Sorted by price (high first)'},
        {value:'maxCapacity-asc',label:'Sorted by capacity (low first)'},
        {value:'maxCapacity-desc',label:'Sorted by capacity (high first)'},
      ]}/>
    </TableOperations>
  );
}

export default CabinTableOperations;
