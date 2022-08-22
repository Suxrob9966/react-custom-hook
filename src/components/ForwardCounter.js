import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(); // we don't need to pass forwards parameter as it is default parameter in us-counter hook

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
