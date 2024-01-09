import { ModelProvider } from '@/components/providers/modal-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <ClerkProvider>
        <QueryProvider>
          <Toaster />
          <ModelProvider />
          {children}
        </QueryProvider>
      </ClerkProvider>
    </div>
  );
}

export default PlatformLayout;
