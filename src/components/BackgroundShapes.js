export const BackgroundShapes = () => `
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    
    <div class="absolute top-[10%] left-[10%] w-96 h-96 rounded-full blur-[100px] animate-float-slow
                bg-indigo-300/40 dark:bg-primary/20"></div>
    
    <div class="absolute top-[60%] right-[10%] w-80 h-80 rounded-full blur-[100px] animate-float-medium
                bg-purple-300/40 dark:bg-pink-500/20"></div>
    
    <div class="absolute bottom-[10%] left-[30%] w-64 h-64 rounded-full blur-[80px] animate-float-slow
                bg-blue-300/40 dark:bg-teal-500/20"></div>

    <div class="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-full h-40 rounded-[50%] blur-[80px] 
                bg-gradient-to-t from-indigo-200/50 to-transparent 
                dark:from-primary/20 dark:to-transparent"></div>
  </div>
`;