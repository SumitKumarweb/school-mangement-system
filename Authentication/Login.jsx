import React, { useState } from 'react'
import { useLogin } from '../src/Hooks/useLogin.js'
import ForgetPassword from './ForgetPassword.jsx'

function Login() {
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false)
  
  const {
    formData,
    errors,
    isLoading,
    loginError,
    handleInputChange,
    handleSubmit
  } = useLogin()

  return (
    <>
      <div 
        className="flex min-h-screen items-center justify-center relative"
        style={{
          position: 'relative'
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-01"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070)'
          }}
        ></div>
        
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="rounded-lg bg-white/10 backdrop-blur-md p-8 shadow-2xl border border-white/20">
            <div className="sm:mx-auto sm:w-full">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error message display */}
                {loginError && (
                  <div className="rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-800">{loginError}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${
                        errors.email 
                          ? 'outline-red-300 focus:outline-red-500' 
                          : 'outline-gray-300 focus:outline-indigo-600'
                      } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                      Password
                    </label>
                    <div className="text-sm">
                      <button
                        type="button"
                        onClick={() => setIsForgetPasswordOpen(true)}
                        className="font-semibold text-black hover:text-indigo-600"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      autoComplete="current-password"
                      className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${
                        errors.password 
                          ? 'outline-red-300 focus:outline-red-500' 
                          : 'outline-gray-300 focus:outline-indigo-600'
                      } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <ForgetPassword 
        isOpen={isForgetPasswordOpen}
        onClose={() => setIsForgetPasswordOpen(false)}
      />
    </>
  )
}

export default Login