
import toast from "react-hot-toast"
import {JSON} from "react-router-dom"


export const getBloges = () =>{

     let bloges =[]
    let strogebloges = localStorage.getItem('bloges')

    if(strogebloges){
        bloges = JSON.parse(strogebloges)
    }
    return bloges;
}


export const savebloges = blog =>{
    let bloges = getBloges()
    const isExist = bloges.find(b=> b.id === blog.id)
    if(isExist){
        return toast.error('Allredey Bookmarked!')
    }
    bloges.push(blog)
    localStorage.setItem('bloges', JSON.stringify(bloges))
    toast.success('bloge bookmarked successfully!')
}


export const deletbloges = id =>{
    let bloges = getBloges()
    const reminge = bloges.filter(b => b.id !== id)
    localStorage.setItem('bloges', JSON.stringify(reminge))
    toast.success('blog remove from Bookmark!')
}