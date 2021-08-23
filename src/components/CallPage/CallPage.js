import { useParams } from "react-router";
import CallPageHeader from "./../UI/CallPageHeader/CallPageHeader";
import CallPageFooter from "./../UI/CallPageFooter/CallPageFooter";
import MeetingInfo from "./../UI/MeetingInfo/MeetingInfo";
import Messenger from "./../UI/Messenger/Messenger";
import "./CallPage.scss";
import { useEffect, useState } from "react";

const CallPage = () => {
  let { id } = useParams();
  const isAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  console.log(isAdmin, url);

  const [meetInfoPopup, setMeetInfoPopup] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
  }, []);

  return (
    <div className="callpage-container">
      <video className="video-container" src="" controls></video>
      <CallPageHeader />
      <CallPageFooter />
      {isAdmin && meetInfoPopup && (
        <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
      )}
      <Messenger />
    </div>
  );
};

export default CallPage; //test
