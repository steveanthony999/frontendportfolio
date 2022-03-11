// import Resume from '../../assets/StevenWoodwardResume.pdf';

const ResumePage = () => {
  return (
    <div>
      <iframe
        src={`${__dirname}/StevenWoodwardResume.pdf`}
        width='100%'
        height='2000px'
      ></iframe>
    </div>
  );
};

export default ResumePage;
