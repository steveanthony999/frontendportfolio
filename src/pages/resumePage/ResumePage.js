// import Resume from '../../assets/StevenWoodwardResume.pdf';

const ResumePage = () => {
  return (
    <div>
      <iframe
        src={`${window.location.origin}/StevenWoodwardResume.pdf`}
        width='100%'
        height='2000px'
        title='resume'
      ></iframe>
    </div>
  );
};

export default ResumePage;
