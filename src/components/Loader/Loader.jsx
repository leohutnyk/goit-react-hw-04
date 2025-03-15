import { BarLoader, ClipLoader } from "react-spinners";
import css from "./Loader.module.css";
function Loader() {
  return (
    <div className={css.loader}>
      <BarLoader color="red" height={4} width={200} />
    </div>
  );
}

export default Loader;
