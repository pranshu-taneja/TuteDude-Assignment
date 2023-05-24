import './StepsToRefer.css';

function StepsToRefer({img, head, des}) {
  return (
    <div className="step">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <div className="stepText">
        <p className="HeadofStep">{head}</p>
        <p className="DesofStep">{des}
        </p>
      </div>
    </div>
  );
}

export default StepsToRefer;
