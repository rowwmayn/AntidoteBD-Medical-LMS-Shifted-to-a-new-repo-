import "./Announcements.css";

const Announcements = () => {
  const announcements = [
    "New batch for Web Development starts on Monday!",
    "Limited-time discount on Data Science Masterclass – Enroll Now!",
    "Live Q&A session with instructors this Friday at 5 PM!",
  ];

  return (
    <section className="announcements">
      <h2 className="announcements-title">📢 Announcements</h2>
      <ul className="announcements-list">
        {announcements.map((announcement, index) => (
          <li key={index} className="announcement-item">{announcement}</li>
        ))}
      </ul>
    </section>
  );
};

export default Announcements;
