import { type NextRequest } from 'next/server';
import { getDefaultTopics } from '@/lib/curriculum-data';

export function GET(request: NextRequest) {
  const board = request.nextUrl.searchParams.get('board');
  const subject = request.nextUrl.searchParams.get('subject');
  const grade = request.nextUrl.searchParams.get('grade');
  if (!board || !subject || !grade) {
    return Response.json({ error: 'Missing board, subject, or grade parameter' }, { status: 400 });
  }
  return Response.json(getDefaultTopics(board, subject, grade));
}
