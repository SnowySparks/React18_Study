export interface DiaryType {
  id: number;
  createdDate: number;
  emotionId: 1 | 2 | 3 | 4 | 5;
  content: string;
}

export type Action =
  | {
      type: "CREATE" | "UPDATE";
      data: DiaryType;
    }
  | {
      type: "DELETE";
      id: number;
    }
  | {
      type: "INIT";
      data: DiaryType[];
    };
