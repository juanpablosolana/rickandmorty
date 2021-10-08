import { ClipLoader } from "react-spinners";

const Super = ({ characterTarget }) => {
  return (
    <div className="super">
      <h3 className="nameMain">{characterTarget.name}</h3>
      {characterTarget ? (
        <div className="superMain">
          <div className="superImg">
            <img
              className="imgMain"
              src={characterTarget.image}
              alt={characterTarget.name}
            />
          </div>
          <div className="superData">
            <p>- Extra info -</p>
            <p>Gender: {characterTarget.gender}</p>
            <p>Location: {characterTarget.location.name}</p>
            <p>Origin: {characterTarget.origin.name}</p>
            <p>
              Type: {characterTarget.type ? characterTarget.type : "Unknow"}
            </p>
          </div>
        </div>
      ) : (
        <ClipLoader color={"fff"} loading={"loading"} size={150} />
      )}

      <h3 className="nameMain">
        Species: {characterTarget.species} - - Status: {characterTarget.status}
      </h3>
    </div>
  );
};

export default Super