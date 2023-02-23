interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute">Navbar</div>
      <main className="pl-24">{children}</main>
    </div>
  );
};

export default MainLayout;
