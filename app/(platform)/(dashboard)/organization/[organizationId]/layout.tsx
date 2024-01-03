import { OrgControl } from './_components/org-control';

function OrganizationIDLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganizationIDLayout;
