import { OrganizationList } from '@clerk/nextjs';

function CreateOrganisationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={'/organization/:id'}
      afterCreateOrganizationUrl={'/organization/:id'}
    />
  );
}

export default CreateOrganisationPage;
