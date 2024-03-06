import { change } from "./DataSlice";
import { Store } from "./Store";

export function toggleAuth() {
  Store.dispatch(change());
}
