import React from 'react';

class Leaderboard {
    render() {
        return (

        <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>EWEEK <span className="highlight">Leaderboards</span></h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>We will declare the winners at EWEEK <span className="highlight">Semi-Formal</span>!</h2>
              </div>
            </div><table id="eweek-hiscores" className="table table-hover">
              <thead><tr>
                  <th>Team</th>
                  <th>Size</th>
                  <th>Society</th>
                  <th>Score</th>
                </tr></thead>
              <tbody>
                 {/* add link */} 
              </tbody>
            </table>
          </div>
        );
      } 
    }
export default Leaderboard;
