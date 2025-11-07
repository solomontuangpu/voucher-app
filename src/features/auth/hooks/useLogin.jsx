import { loginUser} from "@/services/auth";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useLogin = () => {

    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
    } = useForm();

    const { setToken } = useAccountStore();
    const router = useRouter();
     

    const onLoginSubmit = async ({ email, password }) => {
      try {
        const res = await loginUser({ email, password });
        const json = await res.json();

        if (!res.ok) {
          setError("root", { type: "manual", message: "Invalid Credentials!" });
          return;
        }
        setToken(json.token);
        router.push("/dashboard");
        toast.success("Login Successfully");
      } catch (error) {
        toast.error(error.message || "Unexpected Error!");
        console.log(error);
      }
    };
    
     

  return {
    register,
    handleSubmit,
    setError,
    errors,
    isSubmitting,
    onLoginSubmit
  };
};

export default useLogin;