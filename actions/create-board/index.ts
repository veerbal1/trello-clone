'use server';

import { auth } from '@clerk/nextjs';
import { InputType, ReturnType } from './types';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createSafeAction } from '@/lib/create-safe-action';
import { CreateBoard } from './schema';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { title, image } = data;

  const [imageID, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split('|');

  if (
    !imageID ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageLinkHTML ||
    !imageUserName
  ) {
    return {
      error: 'Missing fields, Failed to create board',
    };
  }
  let board;

  try {
    console.log({
      title,
      orgId,
      imageFullUrl,
      imageID,
      imageLinkHTML,
      imageThumbUrl,
      imageUserName,
    });
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageFullUrl,
        imageID,
        imageLinkHTML,
        imageThumbUrl,
        imageUserName,
      },
    });
  } catch (error) {
    return {
      error: 'Failed to create board',
    };
  }

  revalidatePath(`/board/${board.id}`);
  return {
    data: board,
  };
};

export const createBoard = createSafeAction(CreateBoard, handler);
