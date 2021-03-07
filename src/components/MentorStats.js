import React from 'react';

const MentorStats = () => {
  return (
    <div className="p-1">
      <div className="container p-1">
        <div className="row p-1">
          <div className="col border-0 p-3 shadow mb-2 me-3 rounded" style={{backgroundColor: '#03fcdf'}} >
            <h1 className="display-6">Total views</h1>
            <p>210</p>
          </div>
          <div className="col border-0 p-3 shadow mb-2 bg-body rounded" >
            <h1 className="display-6">Total views</h1>
            <p>150</p>
          </div>
        </div>
        <div className="row p-1">
          <div className="col border-0 p-3 shadow mb-2 me-2 bg-body rounded">
            <h1 className="display-6">Total views</h1>
            <p>150</p>
          </div>
          <div className="col border-0 p-3 shadow mb-2 me-2 bg-body rounded">
            <h1 className="display-6">Total views</h1>
            <p>150</p>
          </div>
          <div className="col border-0 p-3 shadow mb-2 bg-body rounded">
            <h1 className="display-6">Total views</h1>
            <p>150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorStats;
