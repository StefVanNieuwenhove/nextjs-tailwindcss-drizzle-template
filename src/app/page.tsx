import { database } from '@/db/database';

export default async function Home() {
  const users = await database.query.users.findMany();
  return (
    <main className='flex min-h-screen flex-col items-center gap-4 p-24'>
      <h1>Hello world</h1>
      <div className='flex flex-col gap-4'>
        <h2>Database working?</h2>
        <p>{users.map((user) => user.firstname).join(', ')}</p>
      </div>
    </main>
  );
}
