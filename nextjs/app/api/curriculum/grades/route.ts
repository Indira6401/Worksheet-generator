import { type NextRequest } from 'next/server';
import { curriculumData } from '@/lib/curriculum-data';

export function GET(request: NextRequest) {
  const board = request.nextUrl.searchParams.get('board');
  if (!board || !curriculumData.grades[board]) {
    return Response.json({ error: 'Invalid or missing board parameter' }, { status: 400 });
  }
  return Response.json(curriculumData.grades[board]);
}
