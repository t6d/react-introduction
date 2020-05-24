export interface ChecklistItem {
  text: string;
  checked: boolean;
}

export interface AppState {
  items: ChecklistItem[]
}

export interface Action<T extends string, P = {}> {
  type: T;
  payload: P;
}

export type UpdateChecklistItemAction = Action<"UPDATE_CHECKLIST_ITEM", {
  item: ChecklistItem,
  index: number
}>;

export type AppAction = UpdateChecklistItemAction;

export type Reducer = (state: AppState, action: AppAction) => AppState;

const reducer: Reducer = (state, {type, payload}) => {
  switch(type) {
    case "UPDATE_CHECKLIST_ITEM": {
      const { item, index } = payload;
      return {
        ...state,
        items: ([...state.items].fill(item, index, index + 1))
      }
    }
    default:
      return state;
  }
}

export default reducer;