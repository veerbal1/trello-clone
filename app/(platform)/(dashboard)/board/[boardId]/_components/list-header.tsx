import { useState, useRef, ElementRef } from 'react';
import { List } from '@prisma/client';
import { FormInput } from '@/components/form/form-input';
import { useAction } from '@/hooks/use-action';
import { updateList } from '@/actions/update-list';
import { useEventListener } from 'usehooks-ts';
import { toast } from 'sonner';

interface ListHeaderProps {
  data: List;
}

function ListHeader({ data }: ListHeaderProps) {
  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const { execute, fieldErrors } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`Renamed to "${data.title}"`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;
    execute({
      title,
      id,
      boardId,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      formRef.current?.requestSubmit();
    }
  };

  useEventListener('keydown', onKeyDown);

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-center gap-x-2">
      {isEditing ? (
        <form ref={formRef} action={handleSubmit} onBlur={onBlur}>
          <input type="text" hidden id="id" name="id" value={data.id} />
          <input
            type="text"
            hidden
            id="boardId"
            name="boardId"
            value={data.boardId}
          />
          <FormInput
            ref={inputRef}
            onBlur={() => {}}
            id="title"
            placeholder="Enter list title..."
            defaultValue={title}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
            errors={fieldErrors}
          />
          <button hidden type="submit"></button>
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
        >
          {title}
        </div>
      )}
    </div>
  );
}

export default ListHeader;
