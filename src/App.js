/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {actionsCreators} from './state/index';
import { bindActionCreators } from 'redux';


function App() {
  const amount = useSelector(state => state.amount);
  const dispatch = useDispatch();
  const action = bindActionCreators(actionsCreators, dispatch);
  const {depositMoney, withdrawMoney} = action;

  return (
    <div class="w-screen h-screen flex justify-center items-center">
      <div class="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
            <p class="uppercase text-sm text-gray-400">
              The best shoes in the marketplace
            </p>
          </div>
          <div class="prod-img">
            <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
              class="w-full object-cover object-center" />
          </div>
          <div class="prod-info grid gap-10">
            <div>
              <ul class="flex flex-row justify-center items-center">
                <li class="mr-4 last:mr-0">
                  <span
                    class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                    <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                  </span>
                </li>
                <li class="mr-4 last:mr-0">
                  <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                    <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                  </span>
                </li>
                <li class="mr-4 last:mr-0">
                  <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                    <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                  </span>
                </li>
                <li class="mr-4 last:mr-0">
                  <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                    <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p class="font-bold text-xl"> ${amount} </p>
              <div
                class=" flex justify-content-center items-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full border-2 border-gray-900 focus:outline-none">

                <div class="w-full flex justify-center w-1/5">
                  <span class="fill-current text-2xl text-gray-600 w-3 cursor-pointer " onClick={() => withdrawMoney(10)}>
                    -
                  </span>

                  <input class="mx-2 border text-center w-8" type="text" value="1" />

                    <span class="fill-current text-2xl  text-gray-600 w-3 cursor-pointer "  onClick={() => depositMoney(10)}>
                      +
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
