import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationItem } from "../interfaces/navigation_item";

export default function NavItem({
  navigationItem,
  selected,
  setSelected,
  index,
}: {
  navigationItem: NavigationItem;
  selected: number;
  setSelected: any;
  index: number;
}) {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <li
      className={`relative`}
    >
      <a
        className={`block py-2.5 px-6 hover:cursor-pointer hover:text-indigo-500 ${
          selected == index ? "text-indigo-500 " : ""}`}
        onClick={() => {
          if (navigationItem.children.length == 0) {
            setSelected(index);
            router.push(navigationItem.route);
          } else {
            selected !== index ? setSelected(index) : setSelected(0);
          }
        }}
      >
        {navigationItem.icon}
        <span>{navigationItem.label}</span>
        {navigationItem.children.length != 0 && (
          <span className="inline-block float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={`transform transition duration-300 mt-1.5 bi bi-chevron-down  ${
                selected != index ? "-rotate-90" : ""
              }`}
              width="15"
              height="15"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        )}
      </a>

      <ul
        className={`transition-all rounded mb-1 rounded-t-none top-full z-50 pl-7 py-0.5 text-left font-normal  ${
          selected == index ? "" : "opacity-0 scale-50 invisible max-h-0"
        }`}
      >
        {navigationItem.children.map((item, i) => {
          return (
            <li key={i + item.label} className={`relative `}>
              <Link
                className={`block w-full py-2 px-6 clear-both whitespace-nowrap hover:text-indigo-500 ${
                  pathName.includes(item.route) ? "text-indigo-500" : ""
                } `}
                href={item.route}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
