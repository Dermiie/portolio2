function Technologies() {
  return (
    <div className="grid grid-cols-2 gap-8  md:grid-cols-3 md:gap-4">
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300" >
     <img src="/js.png" className="w-16 h-16" alt="javascript"></img>
     <p>Javascript</p>
     </div>
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300">
     <img src="/react.png" className="w-16 h-16" alt="react"></img>
     <p>ReactJs</p>
     </div>
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300">
     <img src="/css-3.png" className="w-16 h-16" alt="css"></img>
     <p>CSS</p>
     </div>
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300">
     <img src="/tailwind.png" className="w-16 h-16" alt="tailwind"></img>
     <p>Tailwind</p>
     </div>
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300">
     <img src="/supabase.png" className="w-16 h-16" alt="supabase"></img>
     <p>Supabase</p>
     </div>
     <div className="flex flex-col items-center justify-center py-12 border rounded-sm border-stone-300">
     <img src="/github.png" className="w-16 h-16" alt="github"></img>
     <p>Github</p>
     </div>
    
    </div>
  )
}

export default Technologies
