import { SearchResult } from "./searchApiReturnTypes";
import Axios from "axios";

function search(queryString: string): Promise<SearchResult> {
  return Axios
    .get(`/search?${queryString}`)
    .then((response) => response.data);
}
