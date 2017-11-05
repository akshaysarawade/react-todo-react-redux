import { Record } from 'immutable';

import {
  GET_LISTS,
  GET_LISTS_START,
  MOVE_CARD,
  TOGGLE_DRAGGING,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/lists';

/* eslint-disable new-cap */
const InitialState = Record({
  isFetching: false,
  lists: [],
  isDragging: false
});
/* eslint-enable new-cap */
const initialState = new InitialState;

export default function lists(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_START:
      return state.set('isFetching', true);
    case GET_LISTS:
      return state.withMutations((ctx) => {
        ctx.set('isFetching', false)
            .set('lists', action.lists);
      });
    case MOVE_CARD: {
      const newLists = [...state.lists];
      const { lastX, lastY, nextX, nextY } = action;
      if (lastX === nextX) {
        newLists[lastX].cards.splice(nextY, 0, newLists[lastX].cards.splice(lastY, 1)[0]);
      } else {
        // move element to new place
        newLists[nextX].cards.splice(nextY, 0, newLists[lastX].cards[lastY]);
        // delete element from old place
        newLists[lastX].cards.splice(lastY, 1);
      }
      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    case TOGGLE_DRAGGING: {
      return state.set('isDragging', action.isDragging);
    }
    case ADD_TODO: {
      const newLists = [...state.lists];
      const toDoList = newLists.filter((list) => list.name == 'To do');
      const index = newLists.find((list) => list.name == 'To do');
      toDoList[0].cards.push({
        id: Math.floor((Math.random() * 100) + 1),
        status: 'To do',
        order: toDoList.length,
        title: action.title
      });
      newLists[index] = toDoList;
      return state.withMutations((ctx) => {
        ctx.set('lists', newLists);
      });
    }
    default:
      return state;
  }
}
