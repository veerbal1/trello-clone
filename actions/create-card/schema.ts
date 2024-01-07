import { z } from 'zod';

export const createCard = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required',
    })
    .min(3, {
      message: 'Title is required',
    }),
  // id: z.string(),
  boardId: z.string(),
  listId: z.string(),
});
