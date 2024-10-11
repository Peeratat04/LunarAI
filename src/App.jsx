import { useState } from 'react';
import './App.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChatbotList } from './DateList';


// App Component
function App() {
  const [count, setCount] = useState(0);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Product', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  return (
    <>
      <header className='head-nav'>
        <Disclosure as="nav" className="Navbar">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-nav">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img alt="Company" src="src\Images\moon.png" className="h-8 w-auto" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                  >
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </header>

      {/* Welcome Lunar */}
      <div>
        <Gallery />
      </div>
    </>
  );
}


// Gallery Component
function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < ChatbotList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let chatbot = ChatbotList[index];

  return (
    <div className="containerTop">
      <div className="cartTop">
        <h4>Research</h4>
        <div className='cont-dataList'>
          <div className='bg-dataList'>
          <h1>{chatbot.name}</h1>
          <h3>({index + 1} of {ChatbotList.length}) 
            <div className='bg-btn-next'>
              <button class="Btn-Next" onClick={handleNextClick}> {/*ปุ่ม Next*/}
                <span>Next</span>
                <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
                </path>
                </svg>
              </button>
            </div>
          </h3>
          <div className='bg-show-details'> {/*ปุ่ม Show details*/}
            <button onClick={handleMoreClick} className='btn-show-details'>
              {showMore ? 'Hide' : 'Show'} details
            </button>
          </div>
            {showMore && <h6 dangerouslySetInnerHTML={{ __html: chatbot.description }} />}
          <div className='bg-img-re'>  {/*รูปภาพประกอบงานวิจัย*/}
            <img src={chatbot.img} alt="" className='img-research' />
          </div> 
          </div>
        </div>
        <span className="btn-sound">
          <button className="btn-try">Try in AI Sound</button>
          <div className="btnBot-sound">
            <img src="\src\Images\wave-sound.png" alt=""/>
          </div>
        </span>
      </div>
    </div>
  );
}


export default App;
