import { MentorType } from "@/types/mentorType";

export function compareIds(a: MentorType, b: MentorType): number {
  // aのidがbのidより小さい場合、aをbの前に持ってきます
  if (a.id < b.id) {
      return -1;
  }
  // aのidがbのidより大きい場合、aをbの後ろに持っていきます
  if (a.id > b.id) {
      return 1;
  }
  // idが等しい場合、順序は変わりません
  return 0;
}
