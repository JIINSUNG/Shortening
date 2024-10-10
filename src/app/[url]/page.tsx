import {redirect} from "next/navigation";


const page = ({ params } : {params : {url : string}}) => {
    redirect(`/api/${params.url}`);
}

export default page

