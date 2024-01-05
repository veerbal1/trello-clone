import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
}

export default PlatformLayout;
