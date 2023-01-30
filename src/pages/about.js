import ImgOfMe from '../images/myself.jpeg'

const AboutMePage = props => {
  return (
    <>
      <div className="row row-cols-2 d-flex align-items-center justify-content-center text-center flex-wrap mt-5">
        <div id="title-about" className="col-10 col-xxl-8 d-flex align-items-center justify-content-center text-center flex-wrap p-0">
            <img src={ImgOfMe} id="myself" className="img-fluid col-4 col-xl-4 col-xxl-3" />
          <div className="col-lg-7 col-xl-6 col-xxl-8 mx-auto">
            <h5 id="my-title" className='fs-1'>Full Stack Web Developer</h5>
            <p id="about-me" className='fs-3 m-0'>Hello! My name is Jennifer and currently I am a stay-at-home mom. I am very excited to begin my career in coding! I love facing new challenges where I can use my problem-solving and critical thinking skills. I am very passionate about learning new things and cannot wait to continue learning and growing as a full stack web developer!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage