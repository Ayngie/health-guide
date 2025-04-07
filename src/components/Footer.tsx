const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="p-5 w-screen fixed bottom-0 left-0 text-center border-t dark:border-gray-700">
      &copy; Copyright Ayngie {currentDate}
    </footer>
  );
};

export default Footer;
