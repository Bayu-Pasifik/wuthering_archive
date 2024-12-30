export const LayoutTemplate = ({
    layout,
    children,
  }: {
    layout: string;
    children: React.ReactNode;
  }) => {
    if (layout === "card") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7 gap-4 bg-black">
          {children}
        </div>
      );
    } else if (layout === "list") {
      return (
        <div className="grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
          {children}
        </div>
      );
    } else if (layout === "gallery") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {children}
        </div>
      );
    } else if (layout === "80rem") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {children}
        </div>
      );
    }
  };
  