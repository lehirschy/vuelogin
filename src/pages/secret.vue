<template>
    <h1 class="mt-8 text-6xl font-thin tracking-tighter text-center">
       Eden's Cool Chat
    </h1> 
    <div class="min-h-[500px] w-full mt-8 rounded-lg shadow-2xl flex flex-cl justify-between" >
        <ul class="p-4 space-y-4" >
            <li v-for="n in 5">
                <div class="flex justify-between px-4 py-2 bg-blue-400 rounded-lg" >
                    <span>Message Itself </span><span>by Author Name</span>
                </div>
            </li>

        </ul>
        <div>
            <input class="w-full p-4 rounded-lg focus:outline-none focus:bg-green-400" type="text" placeholder="Type a message..."/>
        </div>
    </div>  
</template>