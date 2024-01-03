'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export type OrganizationType = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: OrganizationType;
  onExpend: (key: string) => void;
}

export const NavItem = ({
  isActive,
  isExpanded,
  onExpend,
  organization,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/`,
    },
    {
      label: 'Activity',
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];
  const onClick = (href: string) => {
    router.push(href);
  };
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpend(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              src={organization.imageUrl}
              alt={organization.name + '-logo'}
              fill
              className="rounded-sm object-cover"
            />
          </div>
        </div>
        <span className="font-medium text-sm">{organization.name}</span>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map(({ label, icon, href }) => {
          return (
            <Button
              key={href}
              size={'sm'}
              onClick={() => onClick(href)}
              className={cn(
                'w-full font-normal justify-start pl-10 mb-1',
                pathname === href && 'bg-sky-500/10 text-sky-700'
              )}
              variant={'ghost'}
            >
              {icon}
              {label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="w-full h-10" />
    </div>
  );
};
