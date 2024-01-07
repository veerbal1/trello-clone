import { z } from 'zod';
import { List } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { copyList } from './schema';

export type InputType = z.infer<typeof copyList>;
export type ReturnType = ActionState<InputType, List>;
