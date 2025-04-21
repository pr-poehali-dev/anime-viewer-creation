
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/auth/RegisterForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 container max-w-md mx-auto py-12 px-4">
        <div className="space-y-6 text-center">
          <div>
            <h1 className="text-3xl font-bold">Создать аккаунт</h1>
            <p className="text-muted-foreground mt-2">
              Зарегистрируйтесь, чтобы получить доступ ко всем функциям сайта
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <RegisterForm />
            
            <div className="relative my-6">
              <Separator />
              <div className="absolute inset-x-0 top-1/2 flex justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">
                  ИЛИ ПРОДОЛЖИТЬ С
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <span className="mr-2">🌍</span> Google
              </Button>
              <Button variant="outline" className="w-full">
                <span className="mr-2">👤</span> Discord
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Регистрируясь, вы соглашаетесь с нашими{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Условиями использования
            </Link>{" "}
            и{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Политикой конфиденциальности
            </Link>
            .
          </p>
        </div>
      </div>
      
      <footer className="bg-card mt-auto py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2023 АнимеПоиск. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Register;
