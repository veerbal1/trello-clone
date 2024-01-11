import { auth, currentUser } from '@clerk/nextjs';
import { ACTION, ENTITY_TYPE } from '@prisma/client';

import { db } from './db';

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  action: ACTION;
  entityTitle: string;
}

export const createAuditLog = async ({
  entityId,
  entityType,
  action,
  entityTitle,
}: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error('User or OrgId not found');
    }

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id,
        userImage: user.imageUrl,
        userName: user.firstName + ' ' + user.lastName,
      },
    });
  } catch (error) {
    console.log('[AUDIT_LOG_ERROR]', error);
  }
};
