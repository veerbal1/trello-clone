import { z } from 'zod';
import { Card } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { deleteCard } from './schema';

export type InputType = z.infer<typeof deleteCard>;
export type ReturnType = ActionState<InputType, Card>;
