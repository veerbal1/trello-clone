import { z } from 'zod';
import { Card } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { updateCardOrder } from './schema';

export type InputType = z.infer<typeof updateCardOrder>;
export type ReturnType = ActionState<InputType, Card[]>;
