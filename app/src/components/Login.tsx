import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function onSubmit(){
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({"username": username, "password":password})
    }) 
    if(res.ok){
      navigate("/")
    }
    console.log('err')
  }

  return (
    <div className="">
      <section className="h-screen bg-violet-300">
        <div className="px-6 h-full text-gray-800">
          <div className="flex justify-center items-center flex-wrap h-full">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form className="border border-gray-300 p-6 rounded-md bg-white">
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(event) => {
                      setUsername(event.currentTarget.value)
                    }}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.currentTarget.value)
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    />
                    <label className="form-check-label inline-block text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-sky-500 hover:text-blue-300">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-purple-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account? 
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-800 focus:text-red-700 transition duration-200 ease-in-out pl-2"
                    >
                    Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
