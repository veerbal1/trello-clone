import { z } from 'zod';

export const updateCardOrder = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      order: z.number(),
      listId: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
    })
  ),
  boardId: z.string(),
});
