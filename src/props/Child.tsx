interface ChildProps {
  color: string;
}

// destructure color props from ChildProps interface
export const Child = ({ color }: ChildProps) => {
  return <div>Child component! {color}</div>;
};

// proper way to define a function component with typescript
// tells typescript it is a React component which uses the ChildProps interface
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
