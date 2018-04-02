const initialState = [];

const persons = (state = initialState, actions) => {
  switch (actions.type) {
    case "PERSON_ADD":
      state.push(actions.payload.person);
      return state;
    default:
      return state;
  }
};

export default persons;
