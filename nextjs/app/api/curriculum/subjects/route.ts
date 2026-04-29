import { type NextRequest } from 'next/server';
import { curriculumData } from '@/lib/curriculum-data';

export function GET(request: NextRequest) {
  const board = request.nextUrl.searchParams.get('board');
  const grade = request.nextUrl.searchParams.get('grade');
  if (!board || !grade) {
    return Response.json({ error: 'Missing board or grade parameter' }, { status: 400 });
  }
  const boardSubjects = curriculumData.subjects[board];
  if (!boardSubjects || !boardSubjects[grade]) {
    return Response.json({ error: 'No subjects found for the given board and grade' }, { status: 400 });
  }
  return Response.json(boardSubjects[grade]);
}
