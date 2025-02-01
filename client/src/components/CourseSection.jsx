import { Link } from "react-router-dom";
import "./CourseSection.css";

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development with hands-on projects.",
      price: "$199",
      discountedPrice: "$99",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Data Science Masterclass",
      description: "Master Python, Machine Learning, and Data Visualization.",
      price: "$249",
      discountedPrice: "$129",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles and create stunning UI/UX projects.",
      price: "$179",
      discountedPrice: "$89",
    },
  ];

  return (
    <section className="course-section">
      <h2 className="section-title">Running Courses</h2>
      <div className="course-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-pricing">
              <span className="original-price">{course.price}</span>
              <span className="discounted-price">{course.discountedPrice}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/courses" className="see-more-button">See More</Link>
    </section>
  );
};

export default CourseSection;
