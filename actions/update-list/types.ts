import { z } from 'zod';
import { List } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { updateList } from './schema';

export type InputType = z.infer<typeof updateList>;
export type ReturnType = ActionState<InputType, List>;
