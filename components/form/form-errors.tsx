import { XCircleIcon } from 'lucide-react';

interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormErrors = ({ id, errors }: FormErrorsProps) => {
  if (!errors) {
    return null;
  }

  return (
    <div
      className="mt-2 text-xs text-rose-500"
      id={`${id}-error`}
      aria-live="polite"
    >
      {errors?.[id]?.map((error: string) => {
        return (
          <div
            key={error}
            className="flex items-center font-medium border border-rose-500 p-2 bg-rose-500/10 rounded-sm"
          >
            <XCircleIcon className="h-4 w-4 mr-2" />
            {error}
          </div>
        );
      })}
    </div>
  );
};
