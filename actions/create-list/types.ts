import { z } from 'zod';
import { List } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { createList } from './schema';

export type InputType = z.infer<typeof createList>;
export type ReturnType = ActionState<InputType, List>;
