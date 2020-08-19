import * as courseApi from "../../api/courseApi";
import Dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export const saveCourse = (course) => {
  return courseApi.saveCourse(course).then((savedCourse) => {
    Dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
};

export const loadCourses = () => {
  return courseApi.getCourses().then((courses) => {
    Dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses,
    });
  });
};

export const deleteCourse = (courseId) => {
  return courseApi.deleteCourse(courseId).then(() => {
    Dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId,
    });
  });
};
