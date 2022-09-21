import React = require("react");

export default function Factory2<T>(hook: Function, Component: any):Function {
  return (props: T): JSX.Element => <Component {...props} {...hook(props)} />
}

// ---

type Hook<I, O> = (input: I) => O;

export function factory<HIP, HOP>(hook: Hook<HIP, HOP>, component: React.ComponentType<HIP & HOP>): React.FC<HIP> {

  const Component = component;

  return (props) => <Component {...props} {...hook(props)} />;
}
