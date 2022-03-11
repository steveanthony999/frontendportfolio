import Resume from '../../assets/StevenWoodwardResume.pdf';

const ResumePage = () => {
  return (
    <div className='ResumePage'>
      <iframe src={Resume} width='100%' height='2000px'></iframe>
    </div>
  );
};

export default ResumePage;
