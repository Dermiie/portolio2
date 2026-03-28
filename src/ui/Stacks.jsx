function Stacks({ stacks }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stacks.map((stack, index) => (
        <li
          className="px-4 py-1 text-sm italic text-center rounded-md border-[0.7px] shadow-md border-primary-900 text-primary-900 dark:text-primary-800"
          key={index}
        >
          {stack}
        </li>
      ))}
    </ul>
  );
}

export default Stacks;
