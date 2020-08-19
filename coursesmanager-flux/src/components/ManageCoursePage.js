import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../flux/stores/CourseStore";
import * as courseActions from "../flux/actions/courseActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  };

  const IsFormValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required!";
    if (!course.category) _errors.category = "Category is required!";
    if (!course.authorId) _errors.authorId = "Author ID is required!";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!IsFormValid()) return;

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved!");
    });
  };

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default ManageCoursePage;
