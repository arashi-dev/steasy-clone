import React, { forwardRef } from "react";

type ContainerProps = React.PropsWithChildren<{
  className?: string;
  innerClassName?: string;
  style?: React.CSSProperties;
}>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "", innerClassName, style }, ref) => {
    return (
      <div ref={ref} className={`w-full ${className}`} style={style}>
        <div className={`mx-auto max-w-screen-xl px-6 ${innerClassName}`}>
          {children}
        </div>
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
