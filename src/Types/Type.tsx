export type Task = {
  id: string;
  text: string;
  completed: boolean;
  creatAt: string;
};

export type AddTodoProps = {
  getArray: (data: Task[]) => void;
};

export type ListProps = {
  gotData: Task[];
  getArray: (data: Task[]) => void;
};

export type ListItemsProps = {
  key: string;
  id: string;
  text: string;
  completed: boolean;
  creatAt: string;
  getArray: (data: Task[]) => void;
};
