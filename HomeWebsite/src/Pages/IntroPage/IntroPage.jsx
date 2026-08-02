import './IntroPage.css';
import {NavLink} from 'react-router';

export function IntroPage(){
    const team = [
    {
      name: 'Yash Prakash',
      rollNo: '1024030281',
      batch: '3C21',
      email: 'yprakash_be24@thapar.edu',
    },
    {
      name: 'Tanishk Khandelwal',
      rollNo: '1024030274',
      batch: '3C21',
      email: 'tkhandelwal_be24@thapar.edu',
    },
    {
      name: 'Pujan Patel',
      rollNo: '1024030278',
      batch: '3C21',
      email: 'ppatel_be24@thapar.edu',
    },
    {
      name: 'Rudraksh Yadav',
      rollNo: '1024030272',
      batch: '3C21',
      email: 'ryadav_be24@thapar.edu',
    },
  ];

  return (
    <>
      <header>
        <div className="eyebrow">
          <span>UCS503 - Software Engineering</span>
          <span>4 Members</span>
        </div>
        <h1>Team Members</h1>
      </header>

      <section className="roster">
        {team.map((person) => (
          <article className="card" data-index={person.index} key={person.rollNo}>
            <div className="name">{person.name}</div>
            <div className="field">
              <span className="field-label">Roll No</span>
              <span className="field-value">{person.rollNo}</span>
            </div>
            <div className="field">
              <span className="field-label">Batch</span>
              <span className="field-value">{person.batch}</span>
            </div>
            <div className="field">
              <span className="field-label">Email</span>
              <span className="field-value">{person.email}</span>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <NavLink className="projects-link" to="/projects">
            <button className="btn">View Projects</button>
        </NavLink>
      </footer>
    </>
    );
}