import { curriculumData } from '@/lib/curriculum-data';

export function GET() {
  return Response.json(curriculumData.boards);
}
