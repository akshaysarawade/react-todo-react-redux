export const GET_LISTS_START = 'GET_LISTS_START';
export const GET_LISTS = 'GET_LISTS';
export const MOVE_CARD = 'MOVE_CARD';
export const TOGGLE_DRAGGING = 'TOGGLE_DRAGGING';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function getLists(quantity) {
  return dispatch => {
    dispatch({ type: GET_LISTS_START, quantity });
    setTimeout(() => {
      const lists = [{
        id: 0, name: 'To do', cards: [{
          id: 62, title: "do homework", status: "To do", order : 0
        }, {
          id: 15, title: "buy vegetables from market", status: "To do", order : 1
        }]
      }, {
        id: 1, name: 'In progress', cards: [{
          id: 7, title: "wash clothes", status: "In progress", order : 0
        }, {
          id: 21, title: "play fifa", status: "In progress", order : 1
        }, {
          id: 75, title: "book cab", status: "In progress", order : 2
        }]
      }, {
        id: 2, name: 'Done', cards: [{
          id: 90, title: "do assignment", status: "Done", order : 0
          }, {
          id: 51, title: "iron office clothes", status: "Done", order : 1
        }, {
          id: 71, title: "car wash", status: "Done", order : 2
        }, {
          id: 39, title: "bike wash", status: "Done", order : 3
        }]
      }];

      dispatch({ type: GET_LISTS, lists, isFetching: true });
    }, 1000); // fake delay
    dispatch({ type: GET_LISTS_START, isFetching: false });
  };
}

export function moveCard(lastX, lastY, nextX, nextY) {
  return (dispatch) => {
    dispatch({ type: MOVE_CARD, lastX, lastY, nextX, nextY });
  };
}

export function toggleDragging(isDragging) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DRAGGING, isDragging });
  };
}

export function addTodo(title) {
  return (dispatch) => {
    dispatch({ type: ADD_TODO, status: 'To do', title });
  };
}

export function toggleTodo(id, status) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_TODO, id, newStatus: status });
  };
}

