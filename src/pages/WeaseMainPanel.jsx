import React, {useState} from "react";
import Chats from "../components/coreComponents/Chats";
import Leads from "../components/coreComponents/Leads";
import Layout from "../layout/Layout";

// import { useDispatch, useSelector } from 'react-redux'
// import { selectNotificationCard } from '../redux/weasepanel/weasepanelSlice'


const WeaseMainPanel = () => {
  const [notificationCard, setNotificationCard] = useState(false)

  // const notificationCard_ = useSelector(selectNotificationCard)

  return (
    <React.Fragment>
      <Layout setNotificationCard={setNotificationCard} notificationCard={notificationCard} >
        <div className="flex h-fit gap-3 ">
        {/* <div className="col-sm-3 WeasePanelLeadSection  ">
          <Leads />
        </div> */}
        <div className="w-2/6 ">
          <Leads />
        </div>
        {/* <div className="col-sm-6 WeasePanelChatSection">
          <Chats />
        </div> */}
        <div className="w-4/6 relative">
          <Chats />

            {
              notificationCard && (
                <div className="absolute top-0 right-0 w-1/2 h-100 z-50 bg-[#FAFAFA] border border-gray-400">

                </div>
              )
            }
        
            
        </div>
        {/* <div className="col-sm-3 userInfoPanel paneltoggle">
          <UserInfo />
        </div>   */}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default WeaseMainPanel;
