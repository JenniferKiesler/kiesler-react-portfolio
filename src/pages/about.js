import ImgOfMe from '../images/myself.jpeg'

const AboutMePage = props => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center text-center mt-3">
        <div id="title-about" className="col-11 col-xxl-9 align-items-center justify-content-center text-center flex-wrap">
            <img src={ImgOfMe} id="myself" className="img-fluid col-7 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-3" alt="myself"/>
          <div className="col-11 col-xxl-12 m-auto">
            <h5 id="my-title" className='fs-1'>Software Developer</h5>
            <p id="about-me" className='fs-5 m-0 pb-1'>Hello! My name is Jennifer. I am a software developer and problem solver who loves writing code and learning new things! I started off teaching myself code in the beginning of 2022 while my newborn was sleeping and the rest of my family was in quarantine with Covid. When I knew this was what I wanted to do for my career, I joined a full stack web development boot camp, and it was the best decision I have ever made. During the boot camp, I had the opportunity to work with other developers. Whether it was leading the group or contributing as a team member, I really enjoyed working and collaborating with other developers. 
            <br></br>
            <br></br>
            I have learned a lot about myself and what I can accomplish when I put my mind to something. I put 110% into everything I do. I love problem solving and taking on new challenges. My background in education has given me the ability to adapt quickly and solve complex problems. I enjoy taking on difficult challenges because it helps me continue to learn and grow as a developer. With my passion for problem solving and my ability to adapt quickly, I will be able to handle any new challenges I will face in coding. I am a quick learner and am eager to continue growing as a software developer!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage