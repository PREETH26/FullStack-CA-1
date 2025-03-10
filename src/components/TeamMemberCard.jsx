import React from "react";

function TeamMemberCard({teams}){
    return(
        <div className="main grid grid-cols-3 place-content-center my-[255px] gap-5">
            
        {
            teams.map((team,i)=>(
                <div key={i} className="border border-2 ">
                    <h2 className="text-blue-600 font-semibold">{team.name}</h2>
                    <h3>{team.title}</h3>
                </div>
            ))
        }
        </div>
    )
}

export default TeamMemberCard