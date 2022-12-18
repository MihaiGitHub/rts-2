interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// destructure color props from ChildProps interface
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Child component! {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// proper way to define a function component with typescript
// tells typescript it is a React component which uses the ChildProps interface
// FC - function component
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click me</button>
    </div>
  );
};
