import './StepsToRefer.css';

function stepsToRefer({img, head, des}) {
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

export default stepsToRefer;
