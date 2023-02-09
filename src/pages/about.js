import ImgOfMe from '../images/myself.jpeg'

const AboutMePage = props => {
  return (
    <>
      <div className="row g-0 d-flex align-items-center justify-content-center text-center mt-5">
        <div id="title-about" className="col-10 col-xxl-9 d-flex align-items-center justify-content-center text-center flex-wrap p-0">
            <img src={ImgOfMe} id="myself" className="img-fluid col-8 col-sm-6 col-md-5 col-lg-5 col-xl-4 col-xxl-3" alt="myself"/>
          <div className="col-lg-7 col-xl-7 col-xxl-9 mx-auto px-2">
            <h5 id="my-title" className='fs-1'>Full Stack Web Developer</h5>
            <p id="about-me" className='fs-4 m-0 pb-1'>Hello! My name is Jennifer. I'm a Full Stack Web Developer that has developed many applications independently and as part of a group. I have acquired many transferable skills from my previous work experiences including problem-solving, communication, collaboration, and time management. I love facing new challenges where I can use my problem-solving and critical thinking skills. I am very passionate about learning new things and cannot wait to continue learning and growing as a full stack web developer!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage