import Remove_button from "./Remove_button";
import Link from 'next/link'; 
import {HiPencilAlt} from 'react-icons/hi';

export default function Topiclist() {
    return (
    <>
    <div className="p-4 border border-state-300 my-3 flex justify-between gap-5 item-start">
        <div>
            <h2 className="font bold text-2xl">Topic Title</h2>
            <div>Description</div>
        </div>
        
        <div className="fflex gap-2 ">
            <Remove_button />
            <Link href={'/edit'}>
                <HiPencilAlt size={24} />
            </Link>
        </div>
    </div>
    </>
    );
}