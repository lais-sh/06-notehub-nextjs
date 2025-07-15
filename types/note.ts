export interface Note {
  id: number;
  title: string;
  content: string;
  tag: 'personal' | 'work' | 'study';
}

export interface NewNote {
  title: string;
  content: string;
  tag: 'personal' | 'work' | 'study';
}
