import { z } from 'zod';
import { Card } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { createCard } from './schema';

export type InputType = z.infer<typeof createCard>;
export type ReturnType = ActionState<InputType, Card>;
