import "./Footer.css"; // ✅ Navbar.css is in the same folder

function Footer() {
    return (
      <footer>
        <p>© {new Date().getFullYear()} Shivam Kumar | All Rights Reserved</p>
      </footer>
    );
  }
  
  export default Footer;
  