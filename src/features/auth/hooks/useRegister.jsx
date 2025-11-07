import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useRegister = () => {

    const {
      register,
      handleSubmit,
      setError,
      watch,
      formState: { errors, isSubmitting },
    } = useForm();

    const router = useRouter();
    const password = watch("password");


     const onRegisterSubmit = async ({name, email, password, password_confirmation}) => {
      
          try {
            const res = await registerUser({
              name,
              email,
              password,
              password_confirmation
            });
    
            console.log(res);
            const json = await res.json();
    
            if(!res.ok){
              throw new Error(json.message || "Registration failed!");
            }
    
            toast.success("Successfully registered");
            router.push("/login")
          } catch (error) {
            console.log(error.message);
            toast.error(error.message)
          }
      }

  return {
    register,
    handleSubmit,
    setError,
    errors,
    isSubmitting,
    password,
    onRegisterSubmit
  };
};

export default useRegister;