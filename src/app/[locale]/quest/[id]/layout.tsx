import Modal from "@/components/modal";
import RegistrationForm from "@/components/form";
import {Header} from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header />
      {children}
      <Modal>
        <RegistrationForm />
      </Modal>
    </>
  );
}
