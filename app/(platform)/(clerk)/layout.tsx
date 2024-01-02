function ClerkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      {children}
    </div>
  );
}

export default ClerkLayout;
