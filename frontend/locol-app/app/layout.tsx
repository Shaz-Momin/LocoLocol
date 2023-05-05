import { Navbar } from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const links: [string, string][] = [
  // const links = [

  // [<Text13>Home</Text13>, "\home"],
  // [<Text14>Marketplace</Text14>, "market"],
  // [<Text15>Board</Text15>, "\bord"],
  // [<Text16>Community</Text16>, "community"]
  ["Home", "/home"],
  ["Marketplace", "/market"],
  ["Board", "/board"],
  ["Community", "/community"],
  ["Login", "/login"], //change and make a generic login page that asks if student/business
  ["Signup", "/signup_person"], 
  // ["Account", "/signup_account"],
  // ["Education", "/signup_education"],
  // ["About", "/signup_about_you"],
  // ["Create", "/signup_create"],
  // ["Calendar", "/calendar"],
  // ["Services", "/services"],
  // ["StudentProfile", "/student_profile"],
  // ["BusinessProfile", "/business_profile"] 
  ];

  return (
    <html lang="en">
      <Navbar options={links} currPath={""} />
      <body>{children}</body>
    </html>
  );
}