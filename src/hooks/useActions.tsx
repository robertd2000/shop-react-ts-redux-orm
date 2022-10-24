import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store/actions";
import { AppDispatch } from "../store";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(actions, dispatch);
};
