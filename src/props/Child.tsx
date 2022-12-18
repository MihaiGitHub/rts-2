interface ChildProps {
  color: string;
}

// destructure color props from ChildProps interface
export const Child = ({ color }: ChildProps) => {
  return <div>Child component! {color}</div>;
};
