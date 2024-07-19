import React from 'react';
import course1 from '../../assets/IMG_007.jpg';
import course2 from '../../assets/datascience.jpg';
import course3 from '../../assets/IMG_004.jpg';
import course4 from '../../assets/virtual.jpg';
import course5 from '../../assets/Augmented.jpg';
import course6 from '../../assets/IMG_009.jpg';
import './courses.css';

function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="heading">
        <h2>Popular Training Courses</h2>
        <p>Pick A Course To Get Started</p>
      </div>
      <div className="course-container">
        <div className="box">
          <img src={course1} alt="AI & Space Tech" />
          <p>Beginner</p>
          <h3>AI & Space Tech</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>

        <div className="box">
          <img src={course2} alt="Data Science" />
          <p>Beginner</p>
          <h3>Data Science</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>

        <div className="box">
          <img src={course3} alt="Computer Vision" />
          <p>Beginner</p>
          <h3>Computer Vision</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>

        <div className="box">
          <img src={course4} alt="Virtual Reality" />
          <p>Beginner</p>
          <h3>Virtual Reality</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>

        <div className="box">
          <img src={course5} alt="Augmented Reality" />
          <p>Beginner</p>
          <h3>Augmented Reality</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>

        <div className="box">
          <img src={course6} alt="Blockchain" />
          <p>Beginner</p>
          <h3>Blockchain</h3>
          <div className="stars">
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star' type='solid'></i>
            <i className='bx bxs-star-half' type='solid'></i>
          </div>
          <hr />
          <p>8 Lessons | 20 Students</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
