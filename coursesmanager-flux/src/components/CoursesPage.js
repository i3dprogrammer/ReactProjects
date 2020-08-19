import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../flux/stores/CourseStore";
import * as courseActions from "../flux/actions/courseActions";
import { toast } from "react-toastify";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      courseActions.loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const removeCourse = (courseId) => {
    courseActions
      .deleteCourse(courseId)
      .then(() => toast.error("Course deleted!"));
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>{" "}
      <br />
      <CourseList courses={courses} onDelete={removeCourse} />
    </>
  );
};

export default CoursesPage;
