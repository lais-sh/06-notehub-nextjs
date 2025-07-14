export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface FetchNotesResponse {
  results: Note[];
  total: number;
}
