import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

/**
 * useImperativeHandle 은 ref 커스터마이징하기 위해 명령형 패러다임을 따른다.
 * 기능이 어떻게 동작해야하는지를 명령적으로 기술한다. 그리고 노출하면,
 * 부모 컴포넌트에서는 자식 컴포넌트에 명령적으로 기술한 ref 를 사용한다.
 */

type CounterRef = {
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Example = () => {
  const counterRef = useRef<CounterRef | null>(null);

  useEffect(() => {
    counterRef?.current?.onIncrement();
  }, []);

  return (
    <div>
      <Counter ref={counterRef} />
    </div>
  );
};

const Counter = forwardRef(function Counter(_, forwardedRef: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  useImperativeHandle(
    forwardedRef,
    () => ({
      onIncrement: () => setCount(count + 1),
      onDecrement: () => setCount(count - 1),
    }),
    [count]
  );

  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  );
});

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};
//
