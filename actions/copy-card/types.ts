import { z } from 'zod';
import { Card } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { copyCard } from './schema';

export type InputType = z.infer<typeof copyCard>;
export type ReturnType = ActionState<InputType, Card>;
