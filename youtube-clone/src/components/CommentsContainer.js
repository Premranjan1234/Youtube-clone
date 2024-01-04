import React from 'react'
import { useSelector } from 'react-redux';

const commentData=[
{
   name:"Prem ranjan",
   text:"Lorem ipsum dsg asffsg fwgag",
   replies:[
    {
        name:"Prem ranjan",
        text:"Lorem ipsum dsg asffsg fwgag"
    },

    ]
},
{
    name:"Prem ranjan",
    text:"Lorem ipsum dsg asffsg fwgag",
    replies:[
        {
            name:"Prem ranjan",
            text:"Lorem ipsum dsg asffsg fwgag"
        },
        {
            name:"Prem ranjan",
            text:"Lorem ipsum dsg asffsg fwgag",
            replies:[
                {
                    name:"Prem ranjan",
                    text:"Lorem ipsum dsg asffsg fwgag"
                },
            ]
        },

    ]
},
{
    name:"Prem ranjan",
    text:"Lorem ipsum dsg asffsg fwgag",
    replies:[
        {
            name:"Prem ranjan",
            text:"Lorem ipsum dsg asffsg fwgag"
        },
    ]
},
{
    name:"Prem ranjan",
    text:"Lorem ipsum dsg asffsg fwgag",
    replies:[
        {
            name:"Prem ranjan",
            text:"Lorem ipsum dsg asffsg fwgag"
        },
    ]
},
{
    name:"Prem ranjan",
    text:"Lorem ipsum dsg asffsg fwgag",
    replies:[
        {
            name:"Prem ranjan",
            text:"Lorem ipsum dsg asffsg fwgag"
        },
    ]
},
]
const Comments=({data})=>{
    const {name,text,replies}=data;
    const darkMode=useSelector((store)=>store.app.darkMode)
    return(
     <div className={`flex mx-2 my-2 px-2 py-1 ${darkMode?"bg-slate-400":"bg-gray-200"} bg-gray-200 rounded-md `}>
      <img 
      className="w-8 h-8"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU" 
      alt="userlogo"
      />
      <div className="px-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
     </div>
    )
    
}
const CommentList=({comments})=>{
    return comments.map((comment,index)=>{
    return(
    <div className=' w-[100%]'>
    <Comments key={index} data={comment}/>
    <div className='pl-5 border-l-black '>
      <Comments key={index} data={comment}/>   
      <Comments key={index} data={comment}/>
      <Comments key={index} data={comment}/>  
    </div>
    </div>
    );

})};
const CommentsContainer = () => {
  return (
    <>
    <div className='p-2 m-2 font-bold text-3xl'>Comments</div>
    <CommentList comments={commentData}/>
    </>
  )
}

export default CommentsContainer