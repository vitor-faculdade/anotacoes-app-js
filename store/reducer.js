import * as types from './types';

const initialState = {
  annotations: [
    {
      id: 0,
      name: 'Ipsum',
      description: 'In deserunt duis mollit sunt duis est nostrud nulla.',
    },
    {
      id: 1,
      name: 'Lorem',
      description:
        'Quis cupidatat adipisicing cupidatat enim esse. Occaecat id deserunt pariatur amet amet eu quis id. Magna voluptate sint consectetur exercitation non consequat nostrud sint do esse minim cillum. Velit labore occaecat incididunt in eiusmod quis et ut aute aute elit in pariatur.',
    },
  ],
};

function nextAnnotationId(annotations) {
  const maxId = annotations.reduce(
    (maxId, annotation) => Math.max(annotation.id, maxId),
    -1
  );
  return maxId + 1;
}

export default function annotationsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ANNOTATION:
      return {
        ...state,
        annotations: [
          ...state.annotations,
          {
            id: nextAnnotationId(state.annotations),
            name: action.payload.name,
            description: action.payload.description,
          },
        ],
      };

    case types.DELETE_ANNOTATION:
      const newAnnotations = state.annotations.filter(
        (annotation) => annotation.id !== action.payload.id
      );

      return {
        ...state,
        annotations: newAnnotations,
      };

    case types.EDIT_ANNOTATION:
      const { id, newName, newDescription } = action.payload;

      const newAnnotations2 = state.annotations.map((annotation) => {
        if (annotation.id === id) {
          return {
            ...annotation,
            name: newName,
            description: newDescription,
          };
        }
        return annotation;
      });

      return {
        ...state,
        annotations: newAnnotations2,
      };

    default:
      return state;
  }
}
