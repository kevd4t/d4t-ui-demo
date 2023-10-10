interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DrawerBottomNavigation({
  isOpen,
  onClose,
  children,
}: IDrawerProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-m bg-transparent overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
