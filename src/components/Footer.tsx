const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="p-5 text-center border-t dark:border-gray-700">
      &copy; Copyright Ayngie {currentDate}
    </footer>
  );
};

export default Footer;
