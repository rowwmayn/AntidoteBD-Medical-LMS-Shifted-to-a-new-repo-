import { Link } from "react-router-dom";
import "./ExamSection.css";

const ExamSection = () => {
  const exams = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Full-Stack Web Development Exam",
      description: "Test your web development skills with real-world problems.",
      price: "$50",
      discountedPrice: "$25",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Data Science Certification Test",
      description: "Evaluate your data science expertise and earn certification.",
      price: "$75",
      discountedPrice: "$40",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "UI/UX Design Pro Exam",
      description: "Showcase your UI/UX skills and get certified.",
      price: "$60",
      discountedPrice: "$30",
    },
  ];

  return (
    <section className="exam-section">
      <h2 className="section-title">Upcoming Exams</h2>
      <div className="exam-container">
        {exams.map((exam) => (
          <div className="exam-card" key={exam.id}>
            <img src={exam.image} alt={exam.title} className="exam-image" />
            <h3 className="exam-title">{exam.title}</h3>
            <p className="exam-description">{exam.description}</p>
            <div className="exam-pricing">
              <span className="original-price">{exam.price}</span>
              <span className="discounted-price">{exam.discountedPrice}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/exams" className="see-more-button">See More</Link>
    </section>
  );
};

export default ExamSection;
