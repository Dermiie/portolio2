function Stacks({stacks}) {
  return (
  
     <ul className="flex flex-wrap gap-2">
      {stacks.map((stack, index) => (
        <li className="px-4 py-1 text-sm italic text-center bg-white rounded-md shadow-lg text-stone-400" key={index}>{stack}</li>
      ))}
    </ul>
    )
}

export default Stacks
