const Footer = () => {
  return (
    <footer className='bg-black text-primary mt-[100px]'>
      <div className='container mx-auto text-center'>
        <h3 className='text-lg mb-4'>Connect with me</h3>
        <div className='flex justify-center gap-4 mb-4'>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-primary'>Twitter</a>
          <a href='https://www.linkedin.com/in/oyebanji-oluwatomisin-0798101a0/' target='_blank' rel='noopener noreferrer' className='text-primary'>LinkedIn</a>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-primary'>GitHub</a>
        </div>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Oyebanji Oluwatomsin</p>
      </div>
    </footer>
  );
};

export default Footer;