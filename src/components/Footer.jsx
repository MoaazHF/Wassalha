const contacts = [
  {
    label: "+20 1123456789",
    icon: "/uploads/icons8-whatsapp.svg",
    alt: "WhatsApp",
  },
  {
    label: "wassalha@gmail.com",
    icon: "/uploads/icons8-gmail-50.png",
    alt: "Email",
  },
];

const socialMedia = [
  { icon: "/uploads/icons8-facebook.svg", alt: "Facebook" },
  { icon: "/uploads/icons8-instagram.svg", alt: "Instagram" },
  { icon: "/uploads/icons8-x-50.png", alt: "X" },
];

const coverage = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Aswan",
  "Qena",
  "Sharm El-Sheikh",
  "Damanhour",
];

function Footer() {
  return (
    <footer className="mx-auto my-10 w-[90vw] rounded-2xl bg-gray-200 p-6 shadow-2xl md:p-10">
      <div className="grid gap-8 border-t-2 border-gray-300 pt-6 md:grid-cols-3">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-2xl font-bold">Contact us</h2>
          <ul className="space-y-3">
            {contacts.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <img className="h-8 w-8" src={item.icon} alt={item.alt} />
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Social Media</h2>
          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((item) => (
              <img
                key={item.alt}
                className="h-9 w-9"
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-2xl font-bold">Coverage</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            {coverage.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

