const Status = ({ statusimg, title }) => {
  return (
    <div>
      <div className=" flex flex-col">
        <img src={statusimg} alt="" className="rounded-full h-12 w-12" />
        {/* <p className="text-xs truncate">{title}</p> */}
      </div>
    </div>
  );
};

export default Status;
