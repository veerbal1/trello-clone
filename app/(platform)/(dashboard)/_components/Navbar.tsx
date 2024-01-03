import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <nav className="fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* TODO: Mobile navbar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          size="sm"
        >
          Create
        </Button>
        <Button className="rounded-sm block md:hidden" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={'/organization/:id'}
          afterSelectOrganizationUrl={'/organization/:id'}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
