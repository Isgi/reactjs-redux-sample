export const personsAdd = person => {
  return {
    type: "PERSON_ADD",
    payload: {
      person
    }
  };
};
