import * as types from './types';

export const createAnnotation = (payload) => ({
  type: types.CREATE_ANNOTATION,
  payload,
});

export const deleteAnnotation = (payload) => ({
  type: types.DELETE_ANNOTATION,
  payload,
});

export const editAnnotation = (payload) => ({
  type: types.EDIT_ANNOTATION,
  payload,
});

export const getAllAnnotations = () => ({
  type: types.GET_ALL_ANNOTATIONS,
});
