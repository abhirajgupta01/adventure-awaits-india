
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Your email" 
                  className="pl-10" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Your password" 
                  className="pl-10" 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-india-blue hover:underline dark:text-india-gold">
                Forgot password?
              </a>
            </div>
            
            <Button type="submit" className="w-full bg-india-blue hover:bg-india-maroon">
              Login
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="register">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <Input id="firstName" type="text" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name
                </label>
                <Input id="lastName" type="text" placeholder="Last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="registerEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="registerEmail"
                  type="email" 
                  placeholder="Your email" 
                  className="pl-10" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="registerPassword"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create password" 
                  className="pl-10" 
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-india-blue hover:bg-india-maroon">
              Register
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
