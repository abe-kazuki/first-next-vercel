export default function TestLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="h-screen flex">
        <div className="bg-gray-100 p-2 w-48">サイドバー</div>
        <div className="p-2">{children}</div>
      </div>
    );
  }