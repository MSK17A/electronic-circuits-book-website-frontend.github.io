import { createFileRoute } from '@tanstack/solid-router';
import HomePage from '~/components/Home';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return <HomePage />;
}
