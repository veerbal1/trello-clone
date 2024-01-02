import { ClerkProvider } from '@clerk/nextjs';

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full w-full'>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
}

export default PlatformLayout;
