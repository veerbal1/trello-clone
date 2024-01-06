import { z } from 'zod';
import { Board } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { updateBoard } from './schema';

export type InputType = z.infer<typeof updateBoard>;
export type ReturnType = ActionState<InputType, Board>;
