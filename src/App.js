import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCalendar: 'Aero',
      calendarSrcs: {
        'Aero': 'jb6i3e63fllvb3r6k2rprhfu78%40group.calendar.google.com',
        'China': 'r58ht4m27g54j6k8jlqcar2p4c%40group.calendar.google.com',
      }
    };
  }

  makeCalendarButtons() {
    let calendars = Object.keys(this.state.calendarSrcs);
    return (
      <div className="col-xs-12">
        {
          calendars.map(function(calendar) {
            return (
              <button key={calendar}
                onClick={() => this.setState({currentCalendar: calendar})}
                style={{backgroundColor: this.state.currentCalendar === calendar ? 'yellow' : 'white'}}
              >{calendar}</button>
            )
          }.bind(this))
        }
      </div>
    )
  }

  componentDidMount() {
  }

  render () {
    const currentCalendar = this.state.currentCalendar;
    const src = ["https://calendar.google.com/calendar/embed?src=", this.state.calendarSrcs[currentCalendar], "&ctz=Asia%2FSingapore"].join('')
    const calendarButtons = this.makeCalendarButtons();

    return (
      <div className="container">
        <div className="row">
          {calendarButtons}
        </div>
        <div className="row">
          <div className="col-xs-12">
            <iframe src={src} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default App
