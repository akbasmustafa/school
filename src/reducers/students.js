const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDNAME":
      return state.concat({
        id: action.payload.id,
        name: action.payload.name,
        homeworks: [],
      });
    case "ADDHOMEWORK":
      return state.map((student) => {
        if (student.id === action.payload.id) {
          console.log(action.payload);
          const newObject = {
            ...student,
            homeworks: student.homeworks.concat({
              title: action.payload.title,
              score: action.payload.score,
            }),
          };
          console.log(newObject);
          return newObject;
        } else {
          return student;
        }
      });
    default:
      return state;
  }
};

export default studentsReducer;
