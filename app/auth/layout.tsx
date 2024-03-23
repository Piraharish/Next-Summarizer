const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
