import { useParams } from "react-router";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";
import ServiceDetiallsComponents from "../../Components/ServiceDetiallsComponents/ServiceDetiallsComponents";

const ServiceDetiallsPage = () => {
  const { serviceName } = useParams();
  console.log(serviceName);

  return (
    <div>
      <NavbarSpece />
      <ServiceDetiallsComponents/>
    </div>
  );
};

export default ServiceDetiallsPage;
