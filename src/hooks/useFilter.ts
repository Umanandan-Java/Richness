import { useMemo, useState } from "react";

export function useFilter<T>(
  items: T[],
  getSearchText: (item: T) => string,
  getFilterValue: (item: T) => string,
  allValue = "All"
) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(allValue);

  const normalizedQuery = searchTerm.trim().toLowerCase();

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !normalizedQuery || getSearchText(item).toLowerCase().includes(normalizedQuery);
      const filterValue = getFilterValue(item);
      const matchesFilter = selectedFilter === allValue || filterValue === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [items, normalizedQuery, selectedFilter, getSearchText, getFilterValue, allValue]);

  return {
    filtered,
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
  };
}
