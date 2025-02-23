export default function create() {
    return <form className="flex flex-col gap-3">

        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="title"/>

        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="description"/>

        <button className="bg-green-500 font-bold text-white py-3 px-6">Create New Topic</button>
        
    </form>;
}