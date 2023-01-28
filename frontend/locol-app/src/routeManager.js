import { useNavigate } from "react-router-dom";

/**
 * this component only exists to allow class components to freely redirect to any links
 * do not use it for functional components
 * @param {*} Component the class component where we need to add the useNavigate hook to
 * @returns the same input class component but now with a hook function
 */
export const routeManager = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component navigate={navigate} {...props} />;
  };

  return Wrapper;
};
