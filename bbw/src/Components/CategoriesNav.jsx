import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "New&Now",
      name: "NEW & NOW",
      featured: [],
      sections: [
        {
          id: "newArrivals",
          name: "NEW & NOW",
          items: [
            { name: "New Arrivals", Link: "/newhomefrag" },
            { name: "Men's Shop", Link: "/" },
            { name: "Laundary Fragrances", Link: "/" },
            { name: "Best Sellers", Link: "/" },
          ],
        },
        {
          id: "",
          name: "",
          items: [
            { name: "Get Inspired", Link: "/" },
            { name: "Shop By Fragrances", Link: "/" },
          ],
        },
      ],
    },
    {
      id: "bodycare",
      name: "BODY CARE",
      featured: [],
      sections: [
        {
          id: "featured",
          name: "FEATURED",
          items: [
            { name: "New Body Care", Link: "/" },
            { name: "Retired Fragrances", Link: "/" },
            { name: "Travel Size", Link: "/" },
            { name: "Body Lotion", Link: "/" },
            { name: "Body Cream", Link: "/" },
          ],
        },
        {
          id: "bathandshower",
          name: "BATH & SHOWER",
          items: [
            { name: "All Bath & Shower", Link: "/" },
            { name: "Body Wash & Shower Gel", Link: "/" },
            { name: "Bubble Bath", Link: "/" },
            { name: "Bar Soap", Link: "/" },
            { name: "Bath Accessories", Link: "/" },
          ],
        },
        {
          id: "fragrance",
          name: "FRAGRANCE",
          items: [
            { name: "All Fragrance", Link: "/" },
            { name: "Body Spray's and Mists", Link: "/" },
            { name: "Perfume & Cologen", Link: "/" },
          ],
        },
      ],
    },
    {
      id: "handsoaps&snaitizers",
      name: "HAND SOAPS & SANITIZERS",
      featured: [],
      sections: [
        {
          id: "featured",
          name: "FEATURED",
          items: [
            { name: "New Hand Soaps & Sanitizers", Link: "/" },
            { name: "Gentle & Clean Handsoaps", Link: "/" },
          ],
        },
        {
          id: "handsoaps",
          name: "HAND SOAPS",
          items: [
            { name: "All Hand Soaps", Link: "/" },
            { name: "Foaming Soaps", Link: "/" },
            { name: "Soap Holder", Link: "/" },
          ],
        },
        {
          id: "handsanitizers",
          name: "HAND SANITIZERS",
          items: [
            { name: "All Hand Sanitizers", Link: "/" },
            { name: "PocketBac Hand Sanitizers", Link: "/" },
            { name: "Hand Sanitizer Spray", Link: "/" },
            { name: "Full Size Sanitizers", Link: "/" },
            { name: "Sanitizer Wipe", Link: "/" },
            { name: "Hand Sanitizer Holder", Link: "/" },
          ],
        },
      ],
    },
    {
      id: "homefragrance",
      name: "HOME FRAGRANCE",
      featured: [],
      sections: [
        {
          id: "featured",
          name: "FEATURED",
          items: [
            { name: "New Home Fragrance", Link: "/newhomefrag" },
            { name: "The White Barn Shop", Link: "/" },
            { name: "Auto Refresh Wallflowers", Link: "/" },
          ],
        },
        {
          id: "candles",
          name: "CANDLES",
          items: [
            { name: "All Candles", Link: "/allcandlesAt" },
            { name: "3 - Wick Candles", Link: "/" },
            { name: "Single Wick Candles", Link: "/" },
            { name: "Candle Holders", Link: "/" },
          ],
        },
        {
          id: "airfreshners",
          name: "AIR FRESHNERS",
          items: [
            { name: "Home Fragrance", Link: "/homefragrance_At" },
            { name: "All Wallflowers", Link: "/wallflowersAt" },
            { name: "Room Sprays", Link: "/roomsprays" },
            { name: "Car Fragrance", Link: "/carfragranceAt" },
          ],
        },
      ],
    },
    {
      id: "gifts",
      name: "GIFTS",
      featured: [],
      sections: [
        {
          id: "featured",
          name: "FEATURED",
          items: [
            { name: "Mother's Day Gifts", Link: "/" },
            { name: "Gift Sets", Link: "/" },
          ],
        },
        {
          id: "giftsbypice",
          name: "Gifts By Price",
          items: [
            { name: "$15 & Under Gifts", Link: "/" },
            { name: "$30 & Under Gifts", Link: "/" },
            { name: "$50 & Under Gifts", Link: "/" },
          ],
        },
        {
          id: "collections",
          name: "Collections",
          items: [
            { name: "Gift Boxes & Bags", Link: "/" },
            { name: "Accessories", Link: "/" },
          ],
        },
        {
          id: "giftcard",
          name: "Gift Card",
          items: [
            { name: "E - Gift Cards", Link: "/" },
            { name: "Gift Cards", Link: "/" },
          ],
        },
      ],
    },
  ],
  pages: [{ name: "TOP OFFERS", Link: "/topoffers" }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white catNavar">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <Link
                              to={item.Link}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  to={item.Link}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.Link}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8 gap-16">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <Link
                                            to={item.Link}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link
                                                  to={item.Link}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.Link}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
