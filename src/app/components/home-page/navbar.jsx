function NavBar({ data }) {
  return (
    <ul className="flex flex-col h-full justify-around items-center relative w-[217px]">
      {data.map((item, index) => (
        <li
          key={index}
          className="group border-t-2 w-full h-full flex items-center justify-center hover:cursor-pointer hover:bg-teal-500 hover:text-white"
        >
          <div>{item.title}</div>
          <div className="hidden p-2 group-hover:block absolute left-[210px] min-h-full  h-fit w-[1072px] inset-0 bg-white shadow-lg rounded-lg z-20 before:absolute before:-left-3 before:w-[10px] before:h-full before:bg-transparent">
            <div className="flex justify-start flex-wrap text-gray-800">
              {item.items.map((subItem) => (
                <div className="flex-[0_0_20%] max-w-[20%]">
                  <h5 className="uppercase text-sm text-red-500">
                    {subItem.title}
                  </h5>
                  <ul className="text-sm ">
                    {subItem.items.map((item) => {
                      const { title, items } = item;
                      return (
                        <>
                          <li className="p-1 relative group/sub hover:border-b-red-100 hover:border-b">
                            {title}
                            {items && (
                              <div className="hidden absolute group-hover/sub:block  h-fit bg-white  shadow-[0px_19px_38px_rgba(0,0,0,0.3)] p-2 right-0 translate-y-[-50%] before:-left-2 before:top-[50%] rounded-md  before:absolute before:translate-y-[-50%] top-[50%] before:h-0 before:border-y-8 before:border-y-transparent before:border-r-[16px] before:w-0 before:border-r-white">
                                {items.map((item) => (
                                  <div>{item.title}</div>
                                ))}
                              </div>
                            )}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
