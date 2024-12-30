import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs";
import Repo from "../../components/Repo";
import Events from "../../components/Events";
import Loading from "../../components/Loading";
import UsersContainer from "../../components/UsersContainer";

const UserInfo = () => {
    const [user, setUser] = useState([]);
    const [infos, setInfos] = useState([]);
    const [type, setType] = useState("repos");
    const [loading, setLoading] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users";

  async function GetUserInfo() {
    setLoading(true);
    const res = await fetch(BaseURL + pathname)
    const data = await res.json()
    setUser(()=>[data])
    setLoading(false)
  };

  async function GetUrls() {
     setLoading(true); 
    const res = await fetch(BaseURL + pathname + `/${type}`);
    const data = await res.json();
    setInfos(data);
     setLoading(null)   
  }

   useEffect(() => {
          GetUserInfo();
          GetUrls();
         
      }, [pathname, type]);
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 mx-1 my-4 text-gray-200 bg-teal-500 font-semibold rounded"
      >
        BACK
      </button>
      {
        user && user?.map((uinfo, i)=>(
            <div key={i} className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-4">
                <img src={uinfo.avatar_url} className="w-[350px] mx-0  border-4 border-teal-400" alt="" />
                <div className="text-lg px-3 leading-10">
                <h1 className="text-3xl pb-4">{uinfo?.name}</h1>
                <h1> <span className="text-teal-400">Login_name </span> : {""} {uinfo?.login} </h1>
                <h1> <span className="text-teal-400">Followers  </span> : {""} {uinfo?.followers} </h1>
                <h1> <span className="text-teal-400">Following  </span> : {""} {uinfo?.following} </h1>
                <h1> <span className="text-teal-400">Public_Repositories  </span> : {""} {uinfo?.public_repos} </h1>
                <h1> <span className="text-teal-400">Join  </span> : {new Date(uinfo?.created_at).toLocaleDateString()} </h1>
                <Link to={uinfo?.html_url} target="_blank"
                className="px-5 py-1 my-4 bg-teal-400 hover:bg-teal-900 font-semibold rounded tracking-wide cursor-pointer">Visit</Link>
                </div>
            </div>
        ))}
        <div className="flex gap-10 justify-center pb-4 md:text-xl mb-6 border-b border-gray-500 mt-[5%]">
            <Tabs type={type} setType={setType} />
        </div>
        {loading && <Loading />}
        {type === "repos" && (
          <div className="grid md:grid-cols-2 grid-cols gap-7 w-10/12 mx-auto">
           { infos && <Repo repos={infos} />}
          </div>
        )}
        {type === "received_events" && (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
           {infos &&  <Events events={infos} />}
          </div>
        )}
        {type === "followers" && (
          <div>
            <UsersContainer users={infos} />
          </div>
        )}
    </div>
  );
};

export default UserInfo;
