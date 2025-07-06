const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-green-50 shadow-lg">
      <div className="">
        <img className="w-4/12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqntSEG8VTvxtfHDZMqBNemqhuPRSnfox6A&s" />
      </div>
      <div className="shadow">
        <span className="italic">ANIL KUMAR KAMMINENI</span>
      </div>
      <div className="">
        <ul className="flex">
          <li className="mx-2">Contact Us</li>
          <li className="mx-2">Write Review</li>
          <li className="mx-2">Contact Us</li>
          <li className="mx-2">Write Review</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
