import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';

async function OrganizationIdPage() {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <form action={create} className='flex gap-x-4'>
        <input
          className="border border-black p-2 rounded"
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id} className="border border-black p-2 rounded">
            <a href={`/board/${board.id}`}>{board.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationIdPage;
